import { CDN_URL } from "../utils/contants";

const RestaurentCard = props => {
  const restaurant = props.restaurant;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    restaurant;
  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src={CDN_URL + cloudinaryImageId}
        alt='dishimage'
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurentCard;
