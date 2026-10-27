import React from "react";
import ReactDOM from "react-dom/client";

const Heading=() => (<h1 id="heading">Lets start learning React</h1>);
const title=(<h2>React Journey</h2>)
const HeadingComponent=() => (
  <div>
    {title} 
    <Heading />
    <h1>This is the example of a Functional component</h1>
  </div>

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< HeadingComponent/>);
