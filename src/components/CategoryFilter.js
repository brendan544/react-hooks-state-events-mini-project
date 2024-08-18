import React from 'react';

const CategoryFilter = ({ categories, onCategorySelect }) => (
  <div>
    {categories.map(category => (
      <button
        key={category}
        onClick={() => onCategorySelect(category)}
        className={category === 'Code' ? 'selected' : ''}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter;