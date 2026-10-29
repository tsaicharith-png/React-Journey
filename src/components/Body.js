import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestraunts, setListofRestraunts] = useState([]);
  const [originalListOfRestraunts,setOriginalListOfRestraunts]=useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3797227&lng=78.5429831&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await response.json();

    const restaurants =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
    setListofRestraunts(restaurants);
    setOriginalListOfRestraunts(restaurants);
  }

  if(listOfRestraunts.length===0){
    return <Shimmer />
  }

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestraunts.filter((res) => {
            return res.info.avgRating > 4;
          });
          setListofRestraunts(filteredList);
        }}
      >
        Top Rated restraunts
      </button>
      <button
        className="clear-btn"
        onClick={() => {
          setListofRestraunts(originalListOfRestraunts);
        }}
      >
        Clear
      </button>
      <div className="res-container">
        {listOfRestraunts.map((restaurant) => (
          <RestrauntCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
