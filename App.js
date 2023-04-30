
import React from 'react';
import ReactDOM from 'react-dom/client';
/*

<div id="parent">
  <div id="children">
    <h1>I am h1 tag from react</h1>
    <h2>I am 2nd h1 tag<h2>
  </div>

  <div id="children2">
    <h1>I am h1 tag from react</h1>
    <h2>I am 2nd h1 tag<h2>
  </div>
</div>




*/

const parent = React.createElement(
  'div', {id: 'parent'},
  [React.createElement('div', {id: 'children'}, [
    React.createElement('h1', {}, 'I am h1 tag from react'),
     React.createElement('h2', {}, 'I am 2nd h1 tag3333')
    ]
  ),
  React.createElement('div', {id: 'children2'}, [
    React.createElement('h1', {}, 'I am h1 tag111 from react111'),
     React.createElement('h2', {}, 'I am 2nd h1 tag12222')
    ]
  )
  ]
);

//JSX

// const heading = React.createElement('h1', { id: 'heading' }, "Hello world React")

// console.log(heading) //heading is actually is a object
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));      
root.render(parent)