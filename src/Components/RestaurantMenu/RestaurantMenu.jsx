import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../../Utils/Utility";
import "../RestaurantMenu/RestaurantMenu.css";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { restaurantId } = useParams();

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const fetchResMenuData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=45607"
    );
    const jsonData = await fetchResMenuData.json();
    setResMenu(jsonData?.data);
  };

  const name = resMenu?.cards[0]?.card?.card?.info?.name;
  const cuisines = resMenu?.cards[0]?.card?.card?.info?.cuisines;
  const itemLists =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  console.log(itemLists);

  if (resMenu === null) {
    return <Shimmer />;
  }

  return (
    <div className="res-menu-root">
      <h1 className="res-name">{name}</h1>
      <div className="res-menu-headings">
        <div className="res-menu-content">
          <h4 className="">{cuisines?.join(", ")}</h4>
          <h5>sodala</h5>
        </div>
        <div className="res-menu-right-content">
          <h3>ratings</h3>
        </div>
      </div>

      <h2 className="">Menu</h2>
      <ul className="menu-list">
        {itemLists.map((item, index) => {
          <li key={index}>{item?.card?.info?.name}</li>;
        })}
      </ul>
      <div className="devider">
        <hr />
      </div>
    </div>
  );
};

export default RestaurantMenu;
