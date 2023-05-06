import ResturantCard from "./ResturantCard";
import restroList from "../utils/MockData"
const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='restro-container'>
        {
          restroList.map((resturant, index) => (
            <ResturantCard key={resturant.data.id} resCard={resturant}/>
            // <ResturantCard key={index} resCard={resturant}/>
          ))
        }
      </div>
    </div>
  )
}

export default Body;