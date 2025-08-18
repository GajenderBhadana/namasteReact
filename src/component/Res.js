import { CDN_URL } from "../utils/contants";
import { useNavigate } from "react-router-dom";

const RestaurentCard = props => {
  const navigate = useNavigate();
  const restaurant = props.restaurant;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla, id } =
    restaurant;
  return (
    <div
      className='res-card'
      onClick={() => {
        console.log(id);
        navigate(`/restaurants/${id}`, { replace: true });
      }}
    >
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
