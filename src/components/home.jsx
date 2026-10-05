import React from "react";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 1200,
    description: "Apple flagman smartfoni, 256GB",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=400",
  },
  {
    id: 2,
    name: "MacBook Air M3",
    price: 1500,
    description: "Yengil va kuchli noutbuk, 13 dyuym",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 250,
    description: "Shovqinni yo'qotuvchi simsiz quloqchin",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400",
  },
  {
    id: 4,
    name: "Sony PlayStation 5",
    price: 500,
    description: "Yangi avlod o'yin konsoli",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 400,
    description: "Aqlli soat, sog'liq monitoringi",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
  },
  {
    id: 6,
    name: "iPad Pro 12.9",
    price: 1100,
    description: "Planshet, kuchli M2 chip bilan",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400",
  },
  {
    id: 7,
    name: "Samsung Galaxy S24",
    price: 1000,
    description: "Samsung flagman smartfoni",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
  },
  {
    id: 8,
    name: "Dyson V15",
    price: 700,
    description: "Simsiz changyutgich, kuchli",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
  },
];

function Home({ cart, setCart, setShowOrder }) {
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <header className="header">
        <h1>🛍️ Online Shop</h1>
        <button className="cart-btn" onClick={() => setShowOrder(true)}>
          🛒 Savat
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
      </header>

      <div className="products">
        {products.map((product) => {
          const inCart = cart.find((item) => item.id === product.id);
          return (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">${product.price}</div>
                <button
                  className="add-btn"
                  onClick={() => addToCart(product)}
                >
                  {inCart
                    ? `Savatda (${inCart.quantity}) ✓`
                    : "+ Savatga qo'shish"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;