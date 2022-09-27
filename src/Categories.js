import data from "./data";
import React from "react";

const menuCategories = [...new Set(data.map((item) => item.category))];

const Categories = ({ filterItems }) => {
  return (
    <>
      <div className="btn-container">
        <button
          type="button"
          className="categories-btn"
          onClick={() => filterItems("all")}
        >
          All
        </button>
        {menuCategories.map((category, index) => (
          <button
            key={index}
            type="button"
            className="categories-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
