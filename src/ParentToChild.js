import React, { useState } from "react";
import ChildComponent from "./ChildComponent.js";

function ParentToChild(props) {
  const [data, setData] = useState("");
  const toChild = () => {
    setData("This data is being passed from parent to child");
  };
  const childToParent = (childData) => {
    setData(childData);
  };
  return (
    <div>
      <h1>{data}</h1>
      <ChildComponent toParent={childToParent} />
      <button onClick={() => toChild()}>Click parent</button>
    </div>
  );
}

export default ParentToChild;
