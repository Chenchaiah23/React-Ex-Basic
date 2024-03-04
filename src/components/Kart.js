import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux/cartSlice";

const Kart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4">
      <div>
        <h1 className="font-bold text-2xl">Cart</h1>
        <button
          className="px-4 bg-green-100 m-4 border border-black  rounded-lg"
          onClick={() => handleClearCart}
        >
          Clear
        </button>
      </div>
      <div className="w-6/12 m-auto">
        {cart.items.length === 0 && <h2>Your Cart is Empty</h2>}
        <ItemList items={cart} isCart={true} />
      </div>
    </div>
  );
};

export default Kart;
