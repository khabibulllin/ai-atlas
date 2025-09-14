import React from 'react';

const FilterBar = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter-bar">
      <div className="filter-label">Filter by category:</div>
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;