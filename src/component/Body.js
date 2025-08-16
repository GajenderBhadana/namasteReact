import { useEffect, useState } from "react";
import RestaurentCard from "./Res";
import axios from "axios";
import { MENU_API } from "../utils/contants.js";
import Shimmer from "./Shimmer.js";

const BodyComponent = () => {
  const [restaurants, setrestaurants] = useState([]);
  const [filterrestaurants, setfilterrestaurants] = useState([]);
  const [loader, setloader] = useState(true);
  const [search, setsearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await axios.get(MENU_API);
      setrestaurants(
        data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilterrestaurants(
        data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setloader(false);
    } catch (error) {
      setloader(false);
      console.error(error);
    }
  };

  const topratedres = () => {
    const filterrestaurants = restaurants.filter(
      res => res.info.avgRating > 4.2
    );
    setfilterrestaurants(filterrestaurants);
  };

  const lowratedres = () => {
    const filterrestaurants = restaurants.filter(
      res => res.info.avgRating < 4.2
    );
    setfilterrestaurants(filterrestaurants);
  };

  const clear = () => {
    setfilterrestaurants(restaurants);
  };

  const filteredData = () => {
    const filterrestaurants = restaurants.filter(res =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    if (search === "") {
      setfilterrestaurants(restaurants);
    } else {
      setfilterrestaurants(filterrestaurants);
    }
  };

  if (loader) {
    return <Shimmer />;
  }

  return (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={search}
            onChange={e => setsearch(e.target.value)}
          />
          <button onClick={() => filteredData()}>Search</button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            topratedres();
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className='filter-btn'
          onClick={() => {
            lowratedres();
          }}
        >
          Lower Rated Restaurant
        </button>
        <button
          className='filter-btn'
          onClick={() => {
            clear();
          }}
        >
          Clear
        </button>
      </div>
      <div className='res-container'>
        {filterrestaurants.map(res => (
          <RestaurentCard key={res.info.id} restaurant={res.info} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
