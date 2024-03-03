import { useState, useContext } from "react";
import { CDN_URL, GREEN_DOT, RED_DOT } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  //subscribing to the store using selector
  //(store) => store.cart.items subscribing to only cart slice
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-green-300 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-32" src={CDN_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            Online Status:{" "}
            {onlineStatus ? (
              "On"
            ) : (
              "OFF"
            )}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
          <li className="px-4">
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout") 
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
