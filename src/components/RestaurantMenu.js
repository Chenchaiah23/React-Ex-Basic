import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  
  return restInfo == null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{restInfo.name}</h1>
      <h3>
        {restInfo.cuisines.join(", ")} - {restInfo.costForTwoMessage}
      </h3>
    </div>
  );
};

export default RestaurantMenu;
