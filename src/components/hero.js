import React from "react";
import grid from "../img/grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={grid} alt="" className="hero--gird" />

      <h1 className="hero--head">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activites led by one-of-a-kind hosts. All
        without leaving Home.
      </p>
    </section>
  );
}
