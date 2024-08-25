import React from "react";
import ReactDOM from "react-dom/client";

// JSX
const title = <h1 className='head'>Namaste React Using JSX </h1>;

const HeadingComponent = () => {
  return (
    <div id='container'>
      {title}
      <h1>Namaste React Header Component </h1>;
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
