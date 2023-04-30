
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'heading' }, "Hello world React")
console.log(heading);
//JSX

const jsxheading = <h1 id="heading">Hello world React from jsx</h1>;
// console.log(heading) //heading is actually is a object
console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));      
root.render(jsxheading)