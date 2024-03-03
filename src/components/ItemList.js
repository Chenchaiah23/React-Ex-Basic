import { useDispatch } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { addItem } from "../utils/redux/cartSlice";

const ItemList = ({ items,isCart }) => {
  //console.log("items", items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-between">
            <div className="w-9/12">
              <span className="text-lg font-bold">{item.card.info.name}</span>
              <span> - &#8377; {item.card.info.price / 100}</span>
              <p className="text-xs text-gray-500">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              {
                isCart ? "" : (
                  <div className="absolute">
                  <button className="p-2 bg-green-300 shadow-lg  rounded-lg" onClick={() => handleAddItem(item)}>Add +</button>
                  </div>
                )
              }
              {
                isCart ? <img src={LOGO_URL + item.card.info.imageId} className="rounded-xl h-20"/> : <img src={LOGO_URL + item.card.info.imageId} className="rounded-xl"/>
              }
              
              
            </div>
          </div>
          <div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
