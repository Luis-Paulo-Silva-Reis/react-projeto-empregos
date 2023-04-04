import React, { useCallback, useEffect } from 'react';
import useFetch from './UseFetch';
import Card from './Card';

const CardList = () => {
  const { data, page, setPage, totalPages, isLoading, error, fetchData } = useFetch('http://localhost:8079/jobs', 1, { retries: 3, retryDelay: 1000 });
  console.log('CardList data:', data);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
      fetchData();
    }
  }, [page, totalPages, setPage, fetchData]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (error) {
    return <div>Erro ao buscar dados: {error}</div>;
  }

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <div className="card-list">
    {data.map((item, index) => (
      <Card key={index} item={item} index={index} />
    ))}
  </div>
      {isLoading && <div>Carregando...</div>}
    </div>
  );
};

export default CardList;
