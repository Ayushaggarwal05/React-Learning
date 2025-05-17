import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmers";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext";

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
  // console.log("hi bodynew 2");

  //Local state Variable  -  super powerfull variable
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  // console.log(ListOfRestaurants);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=restaurants&trackingId=560f19d8-03a8-fbcd-5846-7b452fe04765&submitAction=ENTER&queryUniqueId=e564311a-fab7-a1bb-7b86-ee42206c9539"
    );

    const json = await data.json();

    //optional Chainning
    // console.log(json);

    setListOfRestaurant(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks Like you're offline!!! Please check your internet connection
      </h1>
    );

  // Normal way of wrinting variable in JS
  // let ListOfRestaurant = ["Apple"];

  //Shimmer rendering : --- Its a way to create a skeletal page of our main page.
  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex ">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box  border border-solid border-black rounded-xl h-7 w-60"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-xl cursor-pointer "
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

        <div className="search m-4 p-4 flex items-center">
          <button
            className="filter-btn  px-4 py-2 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200"
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
        <div className="search m-4 p-2  flex items-center">
          <label>User : </label>
          <input
            className="border border-black-2 m-2 p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container  flex  flex-wrap">
        {/* using map property of javascript. */}
        {FilteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.card.card.info.id}
            to={"/restaurants/" + restaurant.card.card.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

// "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=restaurants&trackingId=560f19d8-03a8-fbcd-5846-7b452fe04765&submitAction=ENTER&queryUniqueId=e564311a-fab7-a1bb-7b86-ee42206c9539"

// https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=restaurants&trackingId=70e0c37f-8420-7cd5-183c-af610fcd28dd&submitAction=ENTER&queryUniqueId=34595aa0-2915-2dfa-40b8-560867375902
