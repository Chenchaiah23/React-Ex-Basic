import RestCard, { withBestLabel } from "./RestCard";
import restData from "../../data/homePage";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import "dotenv/config";
import UserContext from "../utils/UserContext";
import { HOME_PAGE_URL } from "../utils/constants";

const Body = () => {
  const [listOfRests, setListOfRests] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestCardLabel = withBestLabel(RestCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    process.env.APP_START === "online" ? fetchLiveData() : fetchMockData();
  }, []);
  const fetchMockData = async () => {
    //console.log(restData.data.cards);
    const data = await fetch("http://localhost:3000/homePage.json");
    setListOfRests(
      restData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
      restData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const fetchLiveData = async () => {
    const data = await fetch(HOME_PAGE_URL);
    const json = await data.json();
    // console.log(
    //   json
    // );
    setListOfRests(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (onlineStatus == false) return <h1>You are offline buddy!!!</h1>;
  if (listOfRests === null) {
    return <Shimmer />;
  }
  return (
    <div>
      <div className="flex p-4">
        <div className="">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              //if(e.target.value === '')
              //fetchData();
            }}
            data-testid = "searchInput"
          />
          <button
            className="px-4 bg-green-100 m-4 border border-black  rounded-lg"
            onClick={() => {
              const filterList = listOfRests.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filterList);
            }}
          >
            Search
          </button>
        </div>
        <div className="">
          <button
            className="px-4 bg-green-100 m-4 border border-black  rounded-lg"
            onClick={() => {
              const filteredList = listOfRests.filter(
                (rest) => rest.info.avgRating > 4.4
              );
              
              setFilteredList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="p-4">
          Update Context :
          <input
            className="border border-black px-2"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="flex flex-wrap rounded-md flex-grow-0">
        {filteredList.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.5 ? (
              <RestCardLabel restData={restaurant} />
            ) : (
              <RestCard key={restaurant.info.id} restData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
