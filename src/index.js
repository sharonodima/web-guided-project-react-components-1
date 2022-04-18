import React from 'react'
import { render } from 'react-dom'
import Playground from "./components/Playground"


/**
 * Two ways to export in react are
 * 1.) Default export
 * 2.)Named export
 */

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App(props) {

  /**
   * if we do const {track, instructor, numStudents, favStudent, foo} = props then we wont need props. like below.
   */
  const fun = true;
  return (
    <div className='container'>
      <h1>Welcome to React, {props.track} rockstars!! {props.instructor} is the best</h1>
      <p> current number of students : {props.numStudents}</p>
      <h2>Favorite Student is {props.favStudent}</h2>
      <Playground happy = {fun}/>
    </div>
  )
}

render(
  <App track='Web' instructor="CRHarding" numStudents="31" favStudent="Casey" foo="bar" />,
  document.querySelector('#root')
)

/**
 * props are data passed from a parent to a child
 */