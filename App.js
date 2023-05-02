
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'heading' }, "Hello world React")
console.log(heading);

//Jsx(transpiled before it reaches the JS Engine) - Parcel - Babel

//JSX => Babel is converted to React.CreateElement JS Object => HTMLElement
const jsxheading = <h1 id="heading" className='heading' tabIndex='10'>Hello world React from jsx</h1>; ///if it one liner then ok
// console.log(heading) //heading is actually is a object
console.log(jsxheading);

const elem = <span>React Element</span>;

///React element ## here pqr is nothing but javascript varible
const pqr = (
  <div>
  <h1 id="heading" className='heading' tabIndex='10'>
      Hello world React from jsx
    </h1>
    {elem}
  </div>
  
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
const number = 10;
// React fragment for wrapping two div container at root lavel
const BodyComponent = () => {
  return(
    <React.Fragment>
      <div id="container1"> 
        <h1>This is body component</h1>
        <Title />
        <h2>{ number }</h2>
        {console.log("vinita Kumari")}
        {/* we can call react element inside component */}
        {pqr} 
        {/* call component like this also */}
        {HeadingComponent()}
      </div>
      <div id="container2">Hello React from second contailner</div> 
    </React.Fragment>
  )
};

///^ this is component composition
///Babel will do transpiling and react render html by  result of root.render
root.render(<BodyComponent />); //Babel uderstand some component exixts
