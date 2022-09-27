import React from "react";

const Menu = ({ img, price, title, desc }) => {
  return (
    <div className="single-meal">
      <img className="meal-img" src={img} alt={title}></img>

      <div>
        <h4 className="meal-title">{title}</h4>
        <span className="price">{price}$</span>
        <div className="second-underline"></div>
        <p className="description">{desc}</p>
      </div>
    </div>
  );
};

export default Menu;
