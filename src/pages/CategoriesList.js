import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CategoriesList.css";

function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories"
      );
      const data = await response.json();
      setCategories(data);
    };
    fetchData();
  }, []);
  console.log("cat===", categories);

  return (
    <div className="categories-list-container">
      <h1>Category List</h1>
      <div className="categories-list">
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            className="category-card"
          >
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesList;
