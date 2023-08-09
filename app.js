import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header/Header";
import Body from "./src/Components/Body/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
