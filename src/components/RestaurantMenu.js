import Shimmer from "./Shimmers";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // recommended
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="menu text-center ">
      <h1 className="my-6  font-bold text-2xl">{name}</h1>
      <p className=" text-lg font-medium ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* {Accordian categories} */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
