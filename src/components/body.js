import RestaurantCard from "./RestaurantCard";
import resList from "../utilities/mockData";
import { useState } from "react";

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

    console.log("hi body")
     
    //Local state Variable  -  super powerfull variable
    let [ListOfRestaurants,setListOfRestaurant] = useState([
        {
            type:"restaurant",
            name:"Megna foods",
            id:2001,
            cuisines: ["Briyani", "Rice" , "North Indian"],
            avgrating: 3.9,
            src:"https://b.zmtcdn.com/data/pictures/chains/6/19611286/dabb9bb7ba11ae6f6e90bd8fc7c92eea.jpg",
            costfortwo: 400,
            deliverytime:38
        },
        {
            type:"restaurant",
            name:"KFC",
            id:2002,
            cuisines: ["Chicken Burger", "Fast foods", "Burger"],
            avgrating: 4.2,
            src:"https://b.zmtcdn.com/data/pictures/chains/7/20287/24697b617bb8aaf5b1c7df9a7074a662.jpg",
            costfortwo: 800,
            deliverytime:43 
        },
        {
            type:"restaurant",
            id:2003,
            name:"Burgeri Shop",
            cuisines: ["Puffy Burger","Burger","Pizza"],
            avgrating: 4.0,
            src:"https://static.vecteezy.com/system/resources/thumbnails/023/809/530/small/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg",
            costfortwo: 300,
            deliverytime:25
        },
        {
            type:"restaurant",
            name:"Kandan Foods",
            id:2004,
            cuisines: ["South Indian" ,"Rice" , "North Indian"],
            src:"https://img-global.cpcdn.com/recipes/4e6759e54cbfedc2/1200x630cq70/photo.jpg",
            avgrating: 3.8,
            costfortwo: 500,
            deliverytime:30
        },
    ]);

    // Normal way of wrinting variable in JS
    // let ListOfRestaurant = ["Apple"];

    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn"
                onClick={() => {
                    const filteredList = ListOfRestaurants.filter(
                        (res) => res.avgrating > 4
                    );
                    setListOfRestaurant(filteredList);
                    console.log(filteredList);
                }}
                
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* using map property of javascript. */}
                {ListOfRestaurants.map((restaurant) => (                                     
                    <RestaurantCard key = {restaurant.id} resData = {restaurant} />
                ))}
            </div>
        </div>
    );
};


export default Body;