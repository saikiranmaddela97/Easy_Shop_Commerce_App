import React, { useState, useEffect } from "react";
import "./Home.css";
import { useStateValue } from "../StateProvider";
import Hero from "../components/Hero/Hero";
import Product from "../components/Product/Product";

function Home() {
  const [{ term }] = useStateValue();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        // FakeStoreAPI returns array of strings
        setCategories(data);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  // Fetch Products
  useEffect(() => {
    setLoading(true);
    const url = selectedCategory === "All"
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${encodeURIComponent(selectedCategory)}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        // FakeStoreAPI returns array of products directly
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedCategory]);

  // Filter products only if there is a search term
  const filteredProducts = term
    ? products.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    )
    : products;

  return (
    <div className="home">
      <div className="home__container">
        <Hero />

        {/* Category Selector */}
        <div className="home__categories">
          <button
            className={`home__categoryButton ${selectedCategory === "All" ? "active" : ""}`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`home__categoryButton ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ padding: "20px", textAlign: "center" }}><h2>Loading products...</h2></div>
        ) : error ? (
          <div style={{ padding: "20px", textAlign: "center", color: "red" }}><h2>Error: {error}</h2></div>
        ) : (
          <div className="home__row" style={{ flexWrap: "wrap" }}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <Product
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating ? Math.round(item.rating.rate) : 0}
                  image={item.image}
                />
              ))
            ) : (
              <div
                style={{ padding: "20px", width: "100%", textAlign: "center" }}
              >
                <h2>No results found for "{term}"</h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
