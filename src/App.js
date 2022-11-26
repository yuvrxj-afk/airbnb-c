import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./components/data";
// import feed from "../src/img/katie.png";

export default function App() {

  const cards = data.map(item => {
    return (
        <Card 
            // img={feed}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
})        

  return (
    <React.StrictMode>
      <div>
        <Navbar />
        <Hero />
        {cards}
      </div>
    </React.StrictMode>
  );
}
