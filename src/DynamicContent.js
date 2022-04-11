import React from "react";
import UserA from "./UserA.js";
import UserB from "./UserB.js";

const components = {
  // Properties are the components themselves
  userA: UserA,
  userB: UserB,
};

function DynamicContent(props) {
  const SelectUser = components[props.user];
  return <SelectUser />;
}

export default DynamicContent;
