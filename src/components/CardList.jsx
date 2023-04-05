import React, { useState, useEffect } from "react";
import useFetch from "./UseFetch";
import Card from "./Card";
import FilterAndSort from "./FilterAndSort";

const CardList = () => {
  const { data: originalData, page, setPage, totalPages, isLoading, error, fetchData } =
    useFetch(
      "http://34.232.202.87:3000/jobs",
      1,
      {
        retries: 3,
        retryDelay: 1000,
      },
      10
    );

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(originalData);
  }, [originalData]);

  const handleFilterAndSort = (updatedData) => {
    setFilteredData(updatedData);
  };

  const loadMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
      fetchData();
    }
  };

  if (error) {
    return <div>Erro ao buscar dados: {error}</div>;
  }

  if (!originalData) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <FilterAndSort data={originalData} onFilterAndSort={handleFilterAndSort} />
      <div className="card-list">
        {filteredData.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </div>
      {isLoading && <div>Carregando...</div>}
      {page < totalPages && (
        <button onClick={loadMore} className="load-more-button">
          Carregar mais
        </button>
      )}
    </div>
  );
};

export default CardList;
