import React, { useState } from "react";

function StateHook() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1975",
    color: "red",
  });
  return (
    <div className="StateHook">
      <h1>The special car is {car.color}.</h1>
      <h1>The car model is {car.model}</h1>
      <button onClick={() => setCar({ ...car, color: "yellow" })}>
        Change color
      </button>
    </div>
  );
}

export default StateHook;
