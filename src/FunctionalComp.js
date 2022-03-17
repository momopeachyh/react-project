import React from "react";

function FunctionalComp(props) {
  const style = {
    backgroundColor: "pink",
  };
  return (
    <div>
      <h1 style={style}>hello from functional component</h1>
      <p>The functional component city is {props.city}</p>
    </div>
  );
}

export default FunctionalComp;
