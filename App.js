
import React from 'react';
import ReactDOM from 'react-dom/client';


/**
* Header
  - Logo
  - NavBar
* Body
  - Search
  - Resturant Container
    - RestroCard
     - Name, Image, ratings, cuisine, Delivery time
* Footer
  - Copyright
  - Links
  - Address
  - Contact      
*/

const Header = () => {
  return(
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const styleCard = {
  backgroundColor: "#f0f0f0"
}

const ResturantCard = () => {
  return (
    <div className='restro-card' style={styleCard}>
      <h3>Bhatinda Junction</h3>
    </div>
  )
}

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='restro-container'>
        <ResturantCard />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return(
    <div className="a">
      <Header />
      <Body />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));      
// root.render(jsxheading)
///^ this is component composition
///Babel will do transpiling and react render html by  result of root.render
root.render(<AppLayout />); //Babel uderstand some component exixts
