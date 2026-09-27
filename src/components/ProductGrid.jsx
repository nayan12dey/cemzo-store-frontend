import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ products, searchQuery }) {
  if (!products || products.length === 0) {
    return (
      <div className="product-grid__empty-state" role="status">
        <span className="product-grid__empty-icon" aria-hidden="true">🔍</span>
        <p className="product-grid__empty-title">No products found</p>
        {searchQuery && (
          <p className="product-grid__empty-subtitle">
            No results for &ldquo;{searchQuery}&rdquo;. Try a different search term.
          </p>
        )}
        {!searchQuery && (
          <p className="product-grid__empty-subtitle">Try a different search term.</p>
        )}
      </div>
    );
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
