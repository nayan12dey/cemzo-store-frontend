import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">
          Cemzo Store
        </a>
        <div className="header__search">
          <input
            id="search-input"
            type="search"
            className="header__search-input"
            placeholder="Search products..."
            aria-label="Search products"
          />
          <span className="header__search-icon" aria-hidden="true">
            &#128269;
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
