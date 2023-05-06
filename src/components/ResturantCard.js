import { CON_URL } from '../utils/common'
// const ResturantCard = (props) => {
  const ResturantCard = (props) => { 
    const { resCard } = props; // destructure on fly.
    const { name, cuisines, avgRating, deliveryTime, costForTwo} = resCard.data;
    const styleCard = {
      backgroundColor: "#f0f0f0"
    }
    console.log(props.resCard);
    return (
      <div className='restro-card' style={styleCard}>
        <img alt='res-logo' className='restro-img' src={CON_URL+resCard.data.cloudinaryImageId} />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{deliveryTime} minutes</h5>
        <h5>₹ {costForTwo/100} FOR TWO</h5>
      </div>
    )
  }
  // not using keys (not acceptable) <<<<< index as key <<<<<<< unique id(best practice)

  export default ResturantCard;