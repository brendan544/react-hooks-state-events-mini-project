import React from "react";

const CategoryFilter = ({ categories, onCategoryChange }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className="category-button"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;