
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

const restroList = [
  {
  "type": "restaurant",
    "data": {
      "type": "F",
      "id": "565891",
      "name": "Roti-Wala",
      "uuid": "257a0889-b243-4252-b84a-6c9f1760d58f",
      "city": "1",
      "area": "BTM Layout",
      "totalRatingsString": "10000+ ratings",
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
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 0.20000000298023224,
      "slugs": {
        "restaurant": "roti-wala-lavelle-road-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#239, 7TH Cross, Btm Stage 2. NS Palya, 560076",
      "locality": "2nd Stage",
      "parentId": 415860,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "aggregatedDiscountInfo": {
        "header": "30% off",
        "shortDescriptionList": [
          {
            "meta": "30% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6695481~p=1~eid=00000187-e5af-b905-24f0-2a72004b0161",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "0.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "56589",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 0.20000000298023224,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "56589",
      "name": "Bhatinda",
      "uuid": "257a0889-b243-4252-b84a-6c9f1760d58f",
      "city": "1",
      "area": "BTM Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "yqhavtikrfxoj7wqkh9h",
      "cuisines": [
        "North Indian",
        "Home Food",
        "Thalis",
        "Chinese",
        "Punjabi",
        "South Indian",
        "Ice Cream"
      ],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 0.20000000298023224,
      "slugs": {
        "restaurant": "roti-wala-lavelle-road-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#239, 7TH Cross, Btm Stage 2. NS Palya, 560076",
      "locality": "2nd Stage",
      "parentId": 415860,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "aggregatedDiscountInfo": {
        "header": "30% off",
        "shortDescriptionList": [
          {
            "meta": "30% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6695481~p=1~eid=00000187-e5af-b905-24f0-2a72004b0161",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "0.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "56589",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 0.20000000298023224,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    }
  }
]

// const ResturantCard = (props) => {
const ResturantCard = (props) => { 
  const { resCard } = props; // destructure on fly.
  const { name, cuisines, avgRating, deliveryTime, costForTwo} = resCard.data;
  console.log(props.resCard);
  return (
    <div className='restro-card' style={styleCard}>
      <img alt='res-logo' className='restro-img' src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+resCard.data.cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{deliveryTime} minutes</h5>
      <h5>₹ {costForTwo/100} FOR TWO</h5>
    </div>
  )
}
// not using keys (not acceptable) <<<<< index as key <<<<<<< unique id(best practice)
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
