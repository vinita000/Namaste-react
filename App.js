
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'heading' }, "Hello world React")
console.log(heading);

//Jsx(transpiled before it reaches the JS Engine) - Parcel - Babel

//JSX => Babel is converted to React.CreateElement JS Object => HTMLElement
const jsxheading = <h1 id="heading" className='heading' tabIndex='10'>Hello world React from jsx</h1>; ///if it one liner then ok
// console.log(heading) //heading is actually is a object
console.log(jsxheading);


const pqr = (
  <h1 id="heading" className='heading' tabIndex='10'>
    Hello world React from jsx
  </h1>
); ///if it is multi liner then wrap with braces as bibel understand where jsx start and where end

const root = ReactDOM.createRoot(document.getElementById("root"));      
root.render(jsxheading)
