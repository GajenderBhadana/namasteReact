import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/Header";
import BodyComponent from "./component/Body";

// JSX

const AppLayout = () => {
  return (
    <div className='app'>
      <HeaderComponent></HeaderComponent>
      <BodyComponent></BodyComponent>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
