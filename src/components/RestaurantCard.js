
// Concept of "props" this is an argument which acts like an object when we add data to a function in calling or we can directly use it also
// insteadd of props  we can use {resName , cusine , rating} also...


const RestaurantCard = (props) => {
    const {resData} = props;

    return (
        <div className="res-card" style={{ backgroundColor : "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={resData.src}/>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(",")}</h4>
            <h4>{resData.avgrating} stars</h4>
            <h4>₹{resData.costfortwo} for Two</h4>
            <h4>{resData.deliverytime} Minutes</h4>
        </div>
    );
};

export default RestaurantCard;