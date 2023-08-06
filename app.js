import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from react"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/**
 * 
 * <div>
  <div>
    <h1></h1>
    <h2></h2>
  </div>
</div>;
 * 
 * 
 */
