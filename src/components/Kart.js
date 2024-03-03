import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Kart = () => {
    const cart = useSelector((store) => store.cart.items);
  return (
    <div className="text-center p-4 m-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <ItemList items={cart} isCart={true}/>
    </div>
  );
};

export default Kart;
