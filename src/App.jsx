
import { useMemo, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    oldPrice: 3499,
    rating: 4.8,
    reviews: 124,
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
  },
  {
    id: 2,
    name: "Classic Wrist Watch",
    category: "Accessories",
    price: 1899,
    oldPrice: 2599,
    rating: 4.6,
    reviews: 86,
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
  },
  {
    id: 3,
    name: "Premium Sneakers",
    category: "Fashion",
    price: 2999,
    oldPrice: 3999,
    rating: 4.9,
    reviews: 210,
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
  },
  {
    id: 4,
    name: "Modern Backpack",
    category: "Accessories",
    price: 1499,
    oldPrice: 1999,
    rating: 4.5,
    reviews: 72,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700",
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Electronics",
    price: 3499,
    oldPrice: 4499,
    rating: 4.7,
    reviews: 156,
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&sat=-50",
  },
  {
    id: 6,
    name: "Minimal T-Shirt",
    category: "Fashion",
    price: 799,
    oldPrice: 1199,
    rating: 4.4,
    reviews: 93,
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700",
  },
  {
    id: 7,
    name: "Portable Speaker",
    category: "Electronics",
    price: 2199,
    oldPrice: 2999,
    rating: 4.6,
    reviews: 118,
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700",
  },
  {
    id: 8,
    name: "Stylish Sunglasses",
    category: "Accessories",
    price: 999,
    oldPrice: 1499,
    rating: 4.3,
    reviews: 64,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700",
  },
];

const categories = ["All", "Electronics", "Fashion", "Accessories"];

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [checkoutDone, setCheckoutDone] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, search, sortBy]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function addToCart(product) {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    setMessage(`${product.name} added to cart!`);
    setCheckoutDone(false);
    window.clearTimeout(window.shopMessageTimer);
    window.shopMessageTimer = window.setTimeout(() => setMessage(""), 2500);
  }

  function changeQuantity(id, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  }

  function checkout() {
    if (cart.length === 0) return;

    setCart([]);
    setCheckoutDone(true);
    setMessage("Your demo order has been placed successfully!");
    window.clearTimeout(window.shopMessageTimer);
    window.shopMessageTimer = window.setTimeout(() => setMessage(""), 3500);
  }

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home">
          <span className="logo-icon">S</span>
          ShopSphere<span className="logo-dot">.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Shop</a>
          <a href="#about">About</a>
        </nav>

        <button
          className="cart-button"
          onClick={() => setCartOpen(true)}
          aria-label={`Open shopping cart, ${cartCount} items`}
        >
          <span className="cart-symbol">🛒</span>
          <span>Cart</span>
          <span className="cart-count">{cartCount}</span>
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">YOUR EVERYDAY STYLE DESTINATION</span>
            <h1>
              Discover your
              <br />
              <span>next favorite</span> thing.
            </h1>
            <p>
              Explore handpicked products, everyday essentials and little
              upgrades that make life better.
            </p>
            <a href="#products" className="hero-button">
              Explore Collection <span>→</span>
            </a>

            <div className="hero-stats">
              <div>
                <strong>500+</strong>
                <small>Products</small>
              </div>
              <div>
                <strong>4.8/5</strong>
                <small>Customer rating</small>
              </div>
              <div>
                <strong>24/7</strong>
                <small>Support</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
              alt="Modern shopping store interior"
            />
            <div className="floating-card">
              <span>✨</span>
              <div>
                <strong>Fresh finds</strong>
                <small>Just for you</small>
              </div>
            </div>
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR COLLECTION</span>
              <h2>Find your favorites.</h2>
              <p>Good products. Great prices. All in one place.</p>
            </div>
            <span className="product-total">
              {filteredProducts.length} products
            </span>
          </div>

          <div className="toolbar">
            <div className="category-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category
                      ? "category-tab active"
                      : "category-tab"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="filter-controls">
              <div className="search-box">
                <span>⌕</span>
                <input
                  type="search"
                  placeholder="Search products..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>

              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <span className="product-tag">{product.tag}</span>
                  </div>

                  <div className="product-info">
                    <span className="product-category">
                      {product.category}
                    </span>
                    <h3>{product.name}</h3>

                    <div className="rating">
                      <span>★</span>
                      <strong>{product.rating}</strong>
                      <small>({product.reviews} reviews)</small>
                    </div>

                    <div className="product-bottom">
                      <div className="price">
                        <strong>{formatPrice(product.price)}</strong>
                        <del>{formatPrice(product.oldPrice)}</del>
                      </div>
                      <button
                        className="add-button"
                        onClick={() => addToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <span>🔍</span>
              <h3>No products found</h3>
              <p>Try another search or category.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section className="benefits" id="about">
          <div>
            <span>🚚</span>
            <h3>Free Shipping</h3>
            <p>On orders above ₹999</p>
          </div>
          <div>
            <span>🔒</span>
            <h3>Secure Shopping</h3>
            <p>Your shopping experience matters</p>
          </div>
          <div>
            <span>💬</span>
            <h3>Friendly Support</h3>
            <p>Here whenever you need us</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo footer-logo" href="#home">
          <span className="logo-icon">S</span>
          ShopSphere<span className="logo-dot">.</span>
        </a>
        <p>Thoughtful finds for everyday living.</p>
        <small>© 2026 ShopSphere. Demo shopping website.</small>
      </footer>

      {message && <div className="toast">✓ {message}</div>}

      {cartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="cart-panel"
            onClick={(event) => event.stopPropagation()}
            aria-label="Shopping cart"
          >
            <div className="cart-header">
              <div>
                <span className="eyebrow">YOUR SELECTION</span>
                <h2>Shopping Cart ({cartCount})</h2>
              </div>
              <button
                className="close-button"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <span>🛍️</span>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added anything yet.</p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="checkout-button"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <strong>{formatPrice(item.price)}</strong>

                        <div className="quantity-controls">
                          <button
                            onClick={() => changeQuantity(item.id, -1)}
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => changeQuantity(item.id, 1)}
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        className="remove-button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>{formatPrice(subtotal)}</strong>
                  </div>
                  <div>
                    <span>Shipping</span>
                    <strong>{subtotal >= 999 ? "FREE" : "₹99"}</strong>
                  </div>
                  <div className="total-row">
                    <span>Total</span>
                    <strong>
                      {formatPrice(subtotal + (subtotal >= 999 ? 0 : 99))}
                    </strong>
                  </div>
                  <button className="checkout-button" onClick={checkout}>
                    Place Demo Order →
                  </button>
                  <small className="demo-note">
                    Demo only — no real payment will be collected.
                  </small>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {checkoutDone && (
        <div className="success-message">
          <span>🎉</span>
          <div>
            <strong>Order placed!</strong>
            <p>Your demo order was successful.</p>
          </div>
          <button onClick={() => setCheckoutDone(false)}>×</button>
        </div>
      )}
    </div>
  );
}

export default App;
