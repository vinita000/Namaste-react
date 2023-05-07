import ResturantCard from "./ResturantCard";
import restroList from "../utils/MockData" 
import { useState } from "react";
const Body = () => {

  ///// Normal JS variable
  let listOfResturants2 = [
    {
      "data": {
        "type": "F",
        "id": "565891",
        "name": "Roti-Wala",
        "uuid": "257a0889-b243-4252-b84a-6c9f1760d58f",
        "cloudinaryImageId": "p93onoqsypryvtn7objj",
        "cuisines": [
          "North Indian",
          "Home Food",
          "Thalis",
          "Chinese",
          "Punjabi",
          "South Indian",
          "Ice Cream"
        ],
        "costForTwo": 20000,
        "deliveryTime": 29,
        "avgRating": "4.2",
      }
    },
    {
      "data": {
        "type": "F",
        "id": "565892",
        "name": "KFC",
        "uuid": "257a0889-b243-4252-b84a-6c9f1760d58f",
        "cloudinaryImageId": "xrwawhachqi8m410tvvp",
        "cuisines": [
          "North Indian",
          "Home Food",
          "Thalis",
          "Chinese",
          "Punjabi",
          "South Indian",
          "Ice Cream"
        ],
        "costForTwo": 20000,
        "deliveryTime": 29,
        "avgRating": "3.8",
      }
    },
    {
      "data": {
        "type": "F",
        "id": "565899",
        "name": "Bhatinda",
        "uuid": "257a0889-b243-4252-b84a-6c9f1760d58f",
        "cloudinaryImageId": "94d3bc5e6392fbaf50686cf8cfab10ef",
        "cuisines": [
          "North Indian",
          "Home Food",
          "Thalis",
          "Chinese",
          "Punjabi",
          "South Indian",
          "Ice Cream"
        ],
        "costForTwo": 20000,
        "deliveryTime": 29,
        "avgRating": "5.0",
      }
    }
  ]

  /// Local state Variable = Super powerfull variable
  /// scope of stste variable inside componenet only
  // return type of useState is array
  const [listOfResturants, setListOfResturant] = useState(restroList) /// here setListOfResturant callback function is used to update listOfResturants
  // Array destructuring ---
  /// It is nothing but
  // const arr = useState(restroList);
  // const [listOfResturants, setListOfResturant] = arr;
  // const listOfResturants = arr[0];
  // const setListOfResturant = arr[1];
  
  return (
    <div className='body'>
      {/* <div className='search'>Search</div> */}
      <div className="filter-btn">
        <button className="filter" onClick={()=>{
          const filterList = listOfResturants.filter((res)=>res.data.avgRating >= 4.0);
          setListOfResturant(filterList)
          }}
          // onMouseOver={()=>{
          //   console.log("Button Clicked")
          //   }}
          >Top Rated Resturenat</button>
      </div>
      <div className='restro-container'>
        {
          listOfResturants.map((resturant, index) => (
            <ResturantCard key={resturant.data.id} resCard={resturant}/>
            // <ResturantCard key={index} resCard={resturant}/>
          ))
        }
      </div>
    </div>
  )
}

export default Body;