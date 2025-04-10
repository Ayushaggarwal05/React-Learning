import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmers";

// This is a body using data in other file:
// const Body = () => {
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="res-container">
//                 {/* using map property of javascript. */}
//                 {resList.map((restaurant) => (
//                     <RestaurantCard key = {restaurant.id} resData = {restaurant} />
//                 ))},
//                 {resList.map((restaurant) => (
//                     <RestaurantCard key = {restaurant.id} resData = {restaurant} />
//                 ))},
//                 {resList.map((restaurant) => (
//                     <RestaurantCard key = {restaurant.id} resData = {restaurant} />
//                 ))}
//             </div>
//         </div>
//     );
// };

const Body = () => {
  console.log("hi bodynew 2");

  //Local state Variable  -  super powerfull variable
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=restaurants&trackingId=560f19d8-03a8-fbcd-5846-7b452fe04765&submitAction=ENTER&queryUniqueId=e564311a-fab7-a1bb-7b86-ee42206c9539"
    );

    const json = await data.json();

    //optional Chainning
    console.log(json);

    setListOfRestaurant(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  // Normal way of wrinting variable in JS
  // let ListOfRestaurant = ["Apple"];

  //Shimmer rendering : --- Its a way to create a skeletal page of our main page.
  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the restraunt cards and update the UI

              const filterRestaurant = ListOfRestaurants.filter((res) => {
                return res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
                  
              });
              setFilteredRestaurant(filterRestaurant);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
            console.log(filteredList);
          }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* using map property of javascript. */}
        {FilteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
