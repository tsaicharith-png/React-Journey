import RestrauntCard from "./RestrauntCard";
import { restaurants } from "../utils/mockData";

const Body = () => (
  <div className="body">
    <div className="search">Search</div>

    <div className="res-container">
      {restaurants.map((restaurant) => (
        <RestrauntCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  </div>
);

export default Body;