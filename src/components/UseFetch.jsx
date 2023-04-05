import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useFetch = (url, initialPage, options = {}) => {
  const { retries = 3, retryDelay = 1000, useCache = true } = options;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retryCount = useRef(0);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    const cacheKey = `cache_${url}`; // const cacheKey = `cache_${url}+_${page}`;
    console.log('Cache key:', cacheKey);

    const cachedData = useCache ? localStorage.getItem(cacheKey) : null;
    console.log('Cached data:', cachedData);

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      if (Array.isArray(parsedData)) {
        setData(parsedData);
      } else if (parsedData.items) {
        setData(parsedData.items);
        setTotalPages(parsedData.totalPages);
      }
      setIsLoading(false);
    } else {
      try {
        const response = await axios.get(`${url}?page=${page}`);
        console.log('API response:', response.data);
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else if (response.data && response.data.items && response.data.totalPages) {
          setData(response.data.items);
          setTotalPages(response.data.totalPages);
        } else {
          console.error('Unexpected API response:', response.data);
        }
        retryCount.current = 0;

        if (useCache) {
          localStorage.setItem(cacheKey, JSON.stringify(response.data));
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
        if (retryCount.current < retries) {
          retryCount.current++;
          setTimeout(fetchData, retryDelay);
        } else {
          setError(error.message);
        }
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, page, retries, retryDelay, useCache]);

  return { data, page, setPage, totalPages, isLoading, error, fetchData };
};

export default useFetch;
