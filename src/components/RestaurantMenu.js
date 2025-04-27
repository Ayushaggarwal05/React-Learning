import Shimmer from "./Shimmers";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilities/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // recommended
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu m-4 p-4 ">
      <h1 className="my-3 font-bold text-2xl">{name}</h1>
      <p className="pl-10 text-lg font-medium mb-8">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="m-4 font-mono font-extrabold text-3xl">Menu</h2>
      <ul>
        <li>
          <h3 className="ml-15 mb-5 font-medium">BreakFast Special</h3>
        </li>
        {Array.isArray(itemCards) &&
          itemCards.map((item) => (
            <li key={item.card.info.id} className="ml-15 ">
              {item.card.info.name} - {item.card.info.price / 100}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
