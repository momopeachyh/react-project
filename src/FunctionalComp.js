import React from "react";

function FunctionalComp(props) {
  return (
    <div>
      <h1>hello from functional component</h1>
      <p>The functional component city is {props.city}</p>
    </div>
  );
}

export default FunctionalComp;
