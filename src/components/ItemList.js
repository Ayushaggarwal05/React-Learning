import { useDispatch } from "react-redux";
import { CDN_URL } from "../utilities/constants";
import { addItem } from "../utilities/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    // Dispatch in action
    dispatch(addItem("pizza"));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          {/* <div className="w-3/12 p-4">
            <div className="relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full h-auto"
              />
              <button className="absolute w-15 bottom-2 right-2 p-2 rounded-lg bg-orange-100 text-green-500 shadow-lg">
                ADD
              </button>
            </div>
          </div> */}

          <div className="w-3/12 p-4">
            <div className="relative">
              {item.card.info.imageId ? (
                <>
                  <img
                    src={CDN_URL + item.card.info.imageId}
                    className="w-full h-auto"
                    alt="Item"
                  />
                  <button
                    className="absolute bottom-1 right-1 p-2 rounded-lg font-bold w-20 bg-orange-100 text-green-500 shadow-lg cursor-pointer"
                    onClick={handleAddItem}>
                    ADD
                  </button>
                </>
              ) : (
                <button className="p-2 rounded-lg w-20 mx-18 bg-orange-100 text-green-500 shadow-lg font-bold">
                  ADD
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
