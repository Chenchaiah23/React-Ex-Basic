import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
    const [restInfo,setRestInfo] = useState(null);
    const {resId} = useParams();
    useEffect(
        () =>{
            fetchRestInfoLive();
        },[]
    )
    
    const fetchRestInfoLive = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId="+resId);
        const json = await data.json();
        console.log(json.data.cards[0].card.card.info)
        setRestInfo(json.data.cards[0].card.card.info)
    }
    return restInfo == null ? <Shimmer/> : (
        <div>
            <h1>{restInfo.name}</h1>
            <h3>{restInfo.cuisines.join(", ")} - {restInfo.costForTwoMessage}</h3>
        </div>
    )
}

export default RestaurantMenu;