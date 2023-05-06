### Food Ordering App

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


Two types of export and import
1 - Default export/import -  export default Component
  - import Component from 'path';

2 - Named export/import
 - export const Component = 
 - import {Component} from 'path';


### we can use default and name export for same component

// MyComponent.js

import React from 'react';

const MyComponent = () => {
  return <h1>Hello, world!</h1>;
};

export const MyNamedComponent = () => {
  return <h2>This is a named component</h2>;
};

export default MyComponent;
