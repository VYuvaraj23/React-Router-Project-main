import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import "./CartPage.css";
import { CartContext } from "../components/UseContext";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = total * 0.9;

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      <div>
        <div className="">
          <h1 className="cartPage-h1">Your Cart</h1>
          <p className="cartDiv-2 ">
            Total:{" "}
            <span className="text-green-700">
              ${discountedTotal.toFixed(2)}
            </span>{" "}
            (10% discount applied)
          </p>
        </div>

        <div className="cartDiv-1">
          {cart.length > 0 ? (
            <CartItem />
          ) : (
            <p>Your cart is empty. Start shopping now!</p>
          )}
        </div>
      </div>
    </CartContext.Provider>
  );
}
