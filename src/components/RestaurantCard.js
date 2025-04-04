// Concept of "props" this is an argument which acts like an object when we add data to a function in calling or we can directly use it also
// insteadd of props  we can use {resName , cusine , rating} also...

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          resData.card.card.info.cloudinaryImageId
        }
      />
      <h3>{resData.card.card.info.name}</h3>
      <h4 style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
        {resData.card.card.info.cuisines.join(",")}
      </h4>
      <h4>{resData.card.card.info.avgRating} stars</h4>
      <h4>₹{resData.card.card.info.costForTwo / 100} for Two</h4>
      <h4>{resData.card.card.info.sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
