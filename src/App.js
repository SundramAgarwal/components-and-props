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

import React from 'react'
import Card from './component/Card/Card'
// import HandlingEvent from './HandlingEvent'

const cardData = [
  {
    id: 1,
    name: "Er Sundram Agarwal",
    designation: "Software Engineer",
    called: "30k",
    messaged: "20k",
    shared: "10k"
  },
  {
    id: 2,
    name: "Er Sonu Shukla",
    designation: "Software Developer",
    called: "50k",
    messaged: "89k",
    shared: "12k"
  }
]

const App = () => {
  return (
    <>
      {/* <HandlingEvent/> */}
      {cardData.map((data) => (
        <Card key={data.id} data = {data}/>
      ))}
    </>
  )
}

export default App