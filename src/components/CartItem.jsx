import { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "./UseContext";
import { useNavigate } from "react-router";
export default function CartItem() {
  const { cart, updateCart } = useContext(CartContext);
  const navigate = useNavigate();
  const handleQuantityChange = (delta, id) => {
    const updatedCart = JSON.parse(localStorage.getItem("cart")).map(
      (cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            quantity: Math.max(cartItem.quantity + delta, 1),
          };
        }
        return cartItem;
      }
    );
    updateCart(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = JSON.parse(localStorage.getItem("cart")).filter(
      (cartItem) => cartItem.id !== id
    );
    updateCart(updatedCart);
  };

  const toProductDetails = (id) => {
    {
      navigate(`/product/${id}`);
    }
  };

  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} className="image" />
          <section>
            <p className="title">{item.title}</p>
            <p className="price">${item.price}</p>
            <div className="flex items-center gap-2">
              <p>Quantity: {item.quantity}</p>
              <button
                onClick={() => handleQuantityChange(-1, item.id)}
                className="bg-gray-300 px-2"
              >
                -
              </button>
              <button
                onClick={() => handleQuantityChange(1, item.id)}
                className="bg-gray-300 px-2"
              >
                +
              </button>
            </div>
            <button
              onClick={() => toProductDetails(item.id)}
              className={"mt-auto px-4 py-2 rounded text-white bg-green-600 "}
            >
              View Details
            </button>
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 mt-auto px-4 py-2 rounded text-white"
            >
              Remove
            </button>
          </section>
        </div>
      ))}
    </>
  );
}
