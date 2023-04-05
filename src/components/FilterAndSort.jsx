import React, { useState, useEffect } from "react";

const FilterAndSort = ({ data, onFilterAndSort }) => {
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("asc");

  const handleFilterTextChange = (event) => {
    const text = event.target.value;
    setSearchText(text);

    if (text === "") {
      onFilterAndSort(data);
      return;
    }

    const filteredData = data.filter(
      (item) =>
        item.titulo.toLowerCase().includes(text.toLowerCase()) ||
        item.descricao.toLowerCase().includes(text.toLowerCase())
    );
    onFilterAndSort(filteredData);
  };

  const handleSortTypeChange = (event) => {
    const type = event.target.value;
    setSortType(type);

    const sortedData = data.sort((a, b) =>
      type === "asc"
        ? a.titulo.localeCompare(b.titulo)
        : b.titulo.localeCompare(a.titulo)
    );
    onFilterAndSort(sortedData);
  };

  return (
    <div className="filter-and-sort">
      <input
        type="text"
        value={searchText}
        onChange={handleFilterTextChange}
        placeholder="Filtrar por título ou descrição"
      />
      <label>
        Ordenar por título:
        <select value={sortType} onChange={handleSortTypeChange}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </label>
    </div>
  );
};

export default FilterAndSort;
