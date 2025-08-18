import axios from "axios";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_API } from "../utils/contants";

const ResMenu = () => {
  const { id } = useParams();
  console.log(id);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await axios.get(RES_MENU_API + id);

    console.log(data.data.data);
    setResInfo(data?.data?.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className='menu'>
      <h1>{name}</h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map(res => (
          <li key={res.card.info.id}>{res.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
