import RestCard from "./RestCard";
import restData from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {restData.map((restaurant) => (
            <RestCard key={restaurant.info.id} restData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;