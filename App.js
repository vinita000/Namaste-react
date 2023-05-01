
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

///javascript function
const fn = () => {
  return true
}
//or

const fn1 = () => true;

///both defining function in javascript are same.

/// functional component
/// It is just a javascript function which returns some jsx.
const HeadingComponent = () => {
  return (<h1>Hello I am functional componet</h1>);
}

//or
const HeadingComponent1 = () => <h1>Hello I am functional componet</h1>;


const root = ReactDOM.createRoot(document.getElementById("root"));      
// root.render(jsxheading)


// one component inside other component
const Title = () => (
  <div id='title'>This is title component</div>
)

const BodyComponent = () => {
  return(
   
    <div id="body"> 
    <h1>This is body component</h1>
    <Title />
    </div>
  )
};

///^ this is component composition
///Babel will do transpiling and react render html by  result of root.render
root.render(<BodyComponent />); //Babel uderstand some component exixts
