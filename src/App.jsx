import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import "./App.css";

const API_URL = "https://dummyjson.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let cancelled = false; // prevent state update if component unmounts mid-fetch

    async function fetchProducts() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (!cancelled) {
          setProducts(data.products); // API wraps products in a "products" array
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Something went wrong. Please try again.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchProducts();
    return () => { cancelled = true; };
  }, []);

  // Derive filtered list from the original products array — never mutates it
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="app__main">
        <div className="app__container">
          <h1 className="app__heading">
            {searchQuery
              ? `Results for "${searchQuery}" (${filteredProducts.length})`
              : "All Products"}
          </h1>

          {loading && (
            <div className="app__status" role="status" aria-live="polite">
              <div className="app__spinner" aria-hidden="true" />
              <p>Loading products…</p>
            </div>
          )}

          {error && !loading && (
            <div className="app__error" role="alert">
              <span className="app__error-icon" aria-hidden="true">⚠️</span>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && <ProductGrid products={filteredProducts} />}
        </div>
      </main>
    </div>
  );
}

export default App;
