import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

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
  let [ListOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=restaurants&trackingId=560f19d8-03a8-fbcd-5846-7b452fe04765&submitAction=ENTER&queryUniqueId=e564311a-fab7-a1bb-7b86-ee42206c9539"
    );

    const json = await data.json();

    console.log(json);
    //optional Chainning
    setListOfRestaurant(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  // Normal way of wrinting variable in JS
  // let ListOfRestaurant = ["Apple"];
  return (
    <div className="body">
      <div className="filter">
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
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
