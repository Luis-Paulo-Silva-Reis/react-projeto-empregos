import { useState } from "react";

const FilterAndSort = ({ data, onFilterAndSort }) => {
  const [filterText, setFilterText] = useState("");
  const [sortedAsc, setSortedAsc] = useState(true);

  const handleFilterTextChange = (event) => {
    const { value } = event.target;
    setFilterText(value);

    const filteredData = data.filter((item) =>
      item.titulo.toLowerCase().includes(value.toLowerCase())
    );

    onFilterAndSort(filteredData);
  };

  const handleSort = () => {
    const sortedData = data.sort((a, b) => {
      if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) {
        return sortedAsc ? -1 : 1;
      }
      if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) {
        return sortedAsc ? 1 : -1;
      }
      return 0;
    });
    setSortedAsc(!sortedAsc);
    onFilterAndSort(sortedData);
  };

  const [sortType, setSortType] = useState("asc");

  const handleSortTypeChange = (event) => {
    const type = event.target.value;
    setSortType(type);

    const sortedData = data
      .slice()
      .sort((a, b) =>
        type === "asc"
          ? a.titulo.localeCompare(b.titulo)
          : b.titulo.localeCompare(a.titulo)
      );
    onFilterAndSort(sortedData);
  };

  return (
    <div>
      <label>
        Filtro:
        <input
          type="text"
          value={filterText}
          onChange={handleFilterTextChange}
        />
      </label>
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
