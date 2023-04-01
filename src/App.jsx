import React from "react";
import "./App.css";
import Navbar from "./AirBnB/Navbar";
import Data from "./AirBnB/Data";
import Card from "./AirBnB/Card";
import Hero from "./AirBnB/Hero";
// import Display from "./Components/Display";
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

console.log(Data);
function App() {
  let Cards = Data.map((card) => {
    return <Card 
            key={card.id}
            card={card}
            />;
  });
  return (
    <>
      <Navbar />
        <Hero />
        <div className="container">{Cards}</div>
      {/* <Display/> */}
    </>
  );
}

export default App;
