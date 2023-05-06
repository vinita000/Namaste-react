
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

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
