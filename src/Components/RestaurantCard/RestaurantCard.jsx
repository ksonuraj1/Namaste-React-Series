import React from "react";
import "../RestaurantCard/RestaurantCard.css";
import { RATING_LOGO, RES_LOGO } from "../../Utils/Utility";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    props.resData.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={RES_LOGO + cloudinaryImageId} alt="" />
      <h3 className="cards">{name}</h3>
      <div style={{ display: "flex", padding: 5 }}>
        <img src={RATING_LOGO} alt="" width={20} height={20} />
        <h5 className="rating">{avgRating} </h5>
      </div>
      <h5 className="rating">{costForTwo}</h5>
      <h6 className="cuisins">{cuisines.join(", ")}</h6>
    </div>
  );
};

export default RestaurantCard;
