import { useState } from "react";
import arrowDown from "../images/down-arrow.png";
import arrowUp from "../images/up-arrow.png";
import ItemList from "./ItemList";

const RestCategory = ({data,showAcc,setShowIndex}) => {
  //console.log(data);
  // this maintains own state for each children
  const [flag,setFlag] = useState(false);
   const handleClick = () => {
    //setShowIndex();
    setFlag(!flag);
   };
   //console.log('show',setShowIndex)
  return (
    <div>
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="w-8">
            <img src={showAcc? arrowUp : arrowDown} />
          </span>
        </div>

        {flag && 
          <ItemList items={data.itemCards} />
        }
      </div>
    </div>
  );
};

export default RestCategory;
