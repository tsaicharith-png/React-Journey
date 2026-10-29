import RestrauntCard from "./RestrauntCard";
import { restaurants } from "../utils/mockData";
import { useState } from "react";
const Body = () => {

const [ listOfRestraunts,setListofRestraunts ]=useState(restaurants)
  return(
  <div className="body">
    <button className="filter-btn"
    onClick={()=>{
      const filteredList=listOfRestraunts.filter((res)=>{
        return res.info.avgRating > 4;
      });
      setListofRestraunts(filteredList);
    }}>
      Top Rated restraunts
      </button>
    <button className="clear-btn" onClick={()=>{
      setListofRestraunts(restaurants);
    }}>Clear</button>
    <div className="res-container">
      {listOfRestraunts.map((restaurant) => (
        <RestrauntCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  </div>
)};

export default Body;