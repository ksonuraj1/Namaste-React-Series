import React, { useEffect, useState } from "react";
import "../Body/Body.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { resList } from "../../Services/Mockdata/ReslistData";
import SortModal from "../Modal/SortModal/SortModal";
import Shimmer from "../Shimmer/Shimmer";

const Body = () => {
  const [listtOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [openSortModal, setOpenSortModal] = useState(false);
  const [rating4Res, setRating4Res] = useState(resList);
  const [cost, setCost] = useState(rating4Res);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const resListApi =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(resListApi);
    setFilteredRes(resListApi);
  };

  const handleSearchText = () => {
    const filteredReastaurant = listtOfRestaurant?.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurant(filteredReastaurant);
  };

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

  return listtOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search-bar">
          <div className="text-botton">
            <input
              style={{ padding: 10 }}
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
            <button className="search-button" onClick={handleSearchText}>
              Search
            </button>
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
          {filteredRes?.map((item) => (
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
