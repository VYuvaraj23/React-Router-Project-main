import { useNavigate } from "react-router";
import "./NavBar.css";

export default function NavBar() {
  let navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };
  const toCart = () => {
    navigate("cart");
  };

  return (
    <nav>
      <h1>Fake API Store</h1>
      <div>
        <button onClick={toHome}>Home</button>
        <button onClick={toCart}>Cart</button>
      </div>
    </nav>
  );
}
