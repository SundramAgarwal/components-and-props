// import './App.css';
// import { useState } from 'react'; // Import useState hook from React

// function App() {
//   // Initialize count state with a value of 0
//   const [count, setCount] = useState(0);

//   // Define updateCount function to update the count state

//   const updateCount = () => {
//     setCount((prevState) => prevState + 1);
//   };

//   return (
//     <>
//       <button onClick={updateCount}>Click Me!</button>
//       <p>Count: {count}</p>
//     </>
//   );
// }

// export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import CenterMode from "./component/Slider/CenterMode";
import { FadeLoader, ClipLoader } from "react-spinners";
import { Audio } from "react-loader-spinner";
// import HandlingEvent from './HandlingEvent'

const App = () => {
  const [show, setShow] = useState(false);
  const handleButtonClick = () => {
    setShow(!show);
  };
  return (
    <>
      {/* <HandlingEvent/> */}
      <button
        onClick={handleButtonClick}
        className="btn btn-primary text-center w-auto h-auto align-content-center"
      >
        {show ? "Click Here to Hide" : "Click Here To show"}
      </button>

      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      <ClipLoader
        color="#f21717"
        loading
        size={66}
        speedMultiplier={2}
      />
      <FadeLoader />
      {show ? <CenterMode /> : null}
    </>
  );
};

export default App;
