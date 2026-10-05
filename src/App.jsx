import React, { useState } from "react";
import Home from "./components/home";
import Order from "./components/order";
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showOrder, setShowOrder] = useState(false);

  return (
    <div>
      {showOrder ? (
        <Order
          cart={cart}
          setCart={setCart}
          setShowOrder={setShowOrder}
        />
      ) : (
        <Home
          cart={cart}
          setCart={setCart}
          setShowOrder={setShowOrder}
        />
      )}
    </div>
  );
}

export default App;