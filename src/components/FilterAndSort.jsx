import React, { useState, useEffect } from 'react';

const FilterAndSort = ({ data, onFilterAndSort }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredAndSortedData, setFilteredAndSortedData] = useState([]);

  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (item) =>
          item.title &&
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      console.log('Dados filtrados:', filteredData);

      const sortedData = [...filteredData].sort((a, b) => {
        if (sortOption === 'asc') {
          return a.title.localeCompare(b.title);
        } else if (sortOption === 'desc') {
          return b.title.localeCompare(a.title);
        }
        return 0;
      });

      console.log('Dados filtrados e ordenados:', sortedData);

      if (
        JSON.stringify(filteredAndSortedData) !== JSON.stringify(sortedData)
      ) {
        setFilteredAndSortedData(sortedData);
        onFilterAndSort(sortedData);
      }
    }
  }, [searchTerm, sortOption, data, filteredAndSortedData, onFilterAndSort]);

  return (
    <div className="filter-and-sort">
      <input
        type="text"
        placeholder="Filtrar vagas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Ordenar por...</option>
        <option value="asc">Título (A-Z)</option>
        <option value="desc">Título (Z-A)</option>
      </select>
    </div>
  );
};

export default FilterAndSort;
