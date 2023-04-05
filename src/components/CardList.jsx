import React, { useState, useEffect } from "react";
import useFetch from "./UseFetch";
import Card from "./Card";
import FilterAndSort from "./FilterAndSort";
import Paginate from "react-paginate";

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
      {!isLoading && (
        <Paginate
          previousLabel={'Anterior'}
          nextLabel={'Próximo'}
          breakLabel={'...'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={({ selected }) => setPage(selected + 1)}
          containerClassName={'pagination'}
          activeClassName={'active'}
          forcePage={page - 1}
        />
      )}
    </div>
  );
};

export default CardList;
