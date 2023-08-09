import React, { useState } from "react";
import "../Body/Body.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { resList } from "../../Services/Mockdata/ReslistData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <div className="text-botton">
          <input style={{ padding: 10 }} type="text" />
          <button className="search-button">Search</button>
          <button className="search-button">Filter</button>
          <button className="search-button">Fast Delivery</button>
          <button className="search-button">New on HOT N' HOT</button>
          <button className="search-button">Ratings 4.0+</button>
          <button className="search-button">Pure Veg</button>
          <button className="search-button">Rs.300-Rs.600</button>
          <button className="search-button">Less than Rs.300</button>
        </div>
      </div>
      <div className="res-container">
        {resList.map((item) => (
          <RestaurantCard key={item?.info?.feeDetails.id} resData={item} />
        ))}
      </div>
      ;
    </div>
  );
};

export default Body;
