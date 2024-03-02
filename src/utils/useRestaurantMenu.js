import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    process.env.APP_START === "online" ? fetchRestInfoLive() : fetchRestInfoOffline();
  }, []);

  const fetchRestInfoLive = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=" +
        resId
    );
    const json = await data.json();
    //console.log(json.data.cards[2].card.card.info);
    setRestInfo(json.data);
  };

  const fetchRestInfoOffline = async () => {
    const url = location.href;
    const data = await fetch(
      "http://localhost:3000/restaurants/" +
      url.substring(url.lastIndexOf('/')+1,url.length) +".json"
    );
    const json = await data.json();
    //console.log(json.data.cards[2].card.card.info);
    setRestInfo(json.data);
  };
  return restInfo;
};

export default useRestaurantMenu;
