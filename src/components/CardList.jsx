import React, { useState, useEffect } from "react";
import useFetch from "./UseFetch";
import Card from "./Card";
import FilterAndSort from "./FilterAndSort";
import Paginate from "react-paginate";
import "../styles/CardList.css";

const CardList = () => {
  const {
    data: originalData,
    page,
    setPage,
    isLoading,
    error,
  } = useFetch("https://talentsync.click:8080/jobs", 1, {
    retries: 3,
    retryDelay: 1000,
  });

  const [filteredData, setFilteredData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setFilteredData(originalData);
  }, [originalData]);

  useEffect(() => {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    setPaginatedData(filteredData.slice(start, end));
    setTotalPages(Math.ceil(filteredData.length / itemsPerPage));
  }, [filteredData, page]);

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
      <FilterAndSort
        data={originalData}
        onFilterAndSort={handleFilterAndSort}
      />
      <div className="card-list">
        {paginatedData.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </div>
      {isLoading && <div>Carregando...</div>}
      {!isLoading && (
        <Paginate
          previousLabel={"Anterior"}
          nextLabel={"Próximo"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={({ selected }) => setPage(selected + 1)}
          containerClassName={"pagination"}
          previousClassName={"button"}
          nextClassName={"button"}
          activeClassName={"activeButton"}
          forcePage={page - 1}
        />
      )}
    </div>
  );
};

export default CardList;
