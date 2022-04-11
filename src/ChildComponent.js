import React from "react";

function ChildComponent({ toParent }) {
  const data = "From child to parent";
  return (
    <div>
      {/* <h1>{props.data}</h1> */}
      <button onClick={() => toParent(data)}>Click child button</button>
    </div>
  );
}

export default ChildComponent;
