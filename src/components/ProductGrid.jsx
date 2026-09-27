import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return <p className="product-grid__empty">No products found.</p>;
  }

  return (
    <section className="product-grid" aria-label="Product listing">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductGrid;
