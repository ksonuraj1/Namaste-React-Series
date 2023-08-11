import React, { useState } from "react";
import "../Body/Body.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { resList } from "../../Services/Mockdata/ReslistData";
import SortModal from "../Modal/SortModal/SortModal";

const Body = () => {
  const [openSortModal, setOpenSortModal] = useState(false);
  const [rating4Res, setRating4Res] = useState(resList);
  const [cost, setCost] = useState(rating4Res);

  const handleRatingClick = () => {
    const filterRatingResList = rating4Res?.filter(
      (restaurant) => restaurant?.info?.avgRating >= 4
    );
    setRating4Res(filterRatingResList);
  };

  const handleCostBet = () => {
    const cost3to6 = cost?.filter(
      (item) => item?.info?.costForTwo > 300 && item?.info?.costForTwo < 600
    );
    setCost(cost3to6);
  };

  const handleSortModal = () => {
    setOpenSortModal((openSortModal) => !openSortModal);
  };

  return (
    <>
      <div className="body">
        <div className="search-bar">
          <div className="text-botton">
            <input style={{ padding: 10 }} type="text" />
            <button className="search-button">Search</button>
            <button className="search-button">Filter</button>

            <button className="search-button" onClick={handleSortModal}>
              Sort
            </button>
            <button className="search-button">Fast Delivery</button>
            <button className="search-button">New on HOT N' HOT</button>
            <button className="search-button" onClick={handleRatingClick}>
              Ratings 4.0+
            </button>
            <button className="search-button">Pure Veg</button>
            <button className="search-button" onClick={handleCostBet}>
              Rs.300-Rs.600
            </button>
            <button className="search-button">Less than Rs.300</button>
          </div>
        </div>
        <div className="res-container">
          {resList.map((item) => (
            <RestaurantCard key={item?.info?.feeDetails.id} resData={item} />
          ))}
        </div>
      </div>
      {openSortModal && (
        <div className="sort-modal">
          <SortModal />
        </div>
      )}
    </>
  );
};

export default Body;
