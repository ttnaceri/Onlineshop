import React, { useState } from "react";

function Order({ cart, setCart, setShowOrder }) {
  const [ordered, setOrdered] = useState(false);

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const delivery = cart.length > 0 ? 15 : 0;
  const total = subtotal + delivery;

  const handleCheckout = () => {
    setOrdered(true);
    setCart([]);
    setTimeout(() => {
      setShowOrder(false);
      setOrdered(false);
    }, 2500);
  };

  return (
    <div className="order-container">
      <button className="back-btn" onClick={() => setShowOrder(false)}>
        ← Orqaga
      </button>

      <h2 className="order-title">🛒 Savat</h2>

      {ordered && (
        <div className="success-msg">
          ✅ Buyurtmangiz qabul qilindi! Rahmat!
        </div>
      )}

      {cart.length === 0 && !ordered && (
        <div className="empty-cart">
          <p>😔 Savat bo'sh</p>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>
            Mahsulot qo'shish uchun orqaga qayting
          </p>
        </div>
      )}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-info">
            <h4>{item.name}</h4>
            <div className="price">${item.price}</div>
          </div>
          <div className="qty-controls">
            <button onClick={() => decreaseQty(item.id)}>−</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>
          <div style={{ minWidth: "80px", textAlign: "right", fontWeight: "bold" }}>
            ${item.price * item.quantity}
          </div>
          <button className="remove-btn" onClick={() => removeItem(item.id)}>
            🗑️
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="order-summary">
          <div className="summary-row">
            <span>Mahsulotlar:</span>
            <span>${subtotal}</span>
          </div>
          <div className="summary-row">
            <span>Yetkazib berish:</span>
            <span>${delivery}</span>
          </div>
          <div className="summary-row total">
            <span>Jami:</span>
            <span>${total}</span>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            ✅ Buyurtmani rasmiylashtirish
          </button>
        </div>
      )}
    </div>
  );
}

export default Order;