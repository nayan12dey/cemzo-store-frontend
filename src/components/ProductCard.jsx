import "./ProductCard.css";

// Renders ★ stars based on a numeric rating (0–5)
function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <span className="product-card__stars" aria-label={`Rating: ${rating} out of 5`}>
      {"★".repeat(full)}
      {half && "½"}
      {"☆".repeat(empty)}
    </span>
  );
}

function ProductCard({ product }) {
  const { title, price, category, rating, images } = product;

  // Use the first image from the images array; fall back to a placeholder
  const imageSrc = Array.isArray(images) && images.length > 0 ? images[0] : null;

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        {imageSrc ? (
          <img
            className="product-card__image"
            src={imageSrc}
            alt={title}
            loading="lazy"
          />
        ) : (
          <div className="product-card__image-placeholder" aria-hidden="true">
            🛍️
          </div>
        )}
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <h2 className="product-card__title">{title}</h2>

        <div className="product-card__meta">
          <StarRating rating={rating} />
          <span className="product-card__rating-value">({rating})</span>
        </div>

        <div className="product-card__footer">
          <span className="product-card__price">${price.toFixed(2)}</span>
          <button className="product-card__btn" aria-label={`Add ${title} to cart`}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
