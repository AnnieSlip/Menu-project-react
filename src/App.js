import React from "react";
import Categories from "./Categories";
import data from "./data";
import { useState, useEffect } from "react";
import Menu from "./Menu";

function App() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState(data);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(data);
      return;
    }

    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <main>
      <section>
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
      </section>
      <Categories filterItems={filterItems} />
      <section className="menu-container">
        {items.map((item) => {
          return <Menu {...item} key={item.id} />;
        })}
      </section>
    </main>
  );
}

export default App;
