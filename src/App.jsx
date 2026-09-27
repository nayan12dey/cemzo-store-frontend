import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import mockProducts from "./data/mockProducts";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="app__container">
          <h1 className="app__heading">All Products</h1>
          <ProductGrid products={mockProducts} />
        </div>
      </main>
    </div>
  );
}

export default App;
