import { useContext } from "react";
import { ProductContext } from "./UseContext";
import "./ProductCard.css";
import { useNavigate } from "react-router";
import { useState } from "react";


export default function ProductCard() {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
  localStorage.setItem("cart", JSON.stringify(cart));

  const products = useContext(ProductContext);

  const titleCondition = (title) => {
    if (title.length >= 25) {
      return title.substring(0, 25) + "...";
    }
    return title;
  };
  const navigate = useNavigate();
  const toProductDetails = (id) => {
    {
      navigate(`product/${id}`);
    }
  };
  const handleCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} className="image" />
          <section>
            <p className="title" onClick={() => toProductDetails(product.id)}>
              {titleCondition(product.title)}
            </p>
            <p className="price">${product.price}</p>
            <button
              onClick={() => toProductDetails(product.id)}
              className={"mt-auto px-4 py-2 rounded text-white bg-green-600 "}
            >
              View Details
            </button>
            <button
              onClick={() => handleCart(product)}
              className={`mt-auto px-4 py-2 rounded text-white ${
                cart.find((item) => item.id === product.id)
                  ? "bg-red-500"
                  : "bg-blue-500"
              }`}
            >
              {cart.find((item) => item.id === product.id)
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
          </section>
        </div>
      ))}
    </>
  );
}
