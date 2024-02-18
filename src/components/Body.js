import RestCard from "./RestCard";
import restData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRests, setListOfRests] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchLiveData();
    //fetchMockData();
  }, []);

  const fetchMockData = () => {
    console.log(restData);
    setListOfRests(restData);
    setFilteredList(restData);
  };
  const fetchLiveData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRests(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (listOfRests.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-btn"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            //if(e.target.value === '')
            //fetchData();
          }}
        />
        <button
          className="search"
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
      <div className="filter">
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <Link to={"/restaurants/"+restaurant.info.id}><RestCard key={restaurant.info.id} restData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
