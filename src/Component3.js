import React, { createContext, useContext } from "react";
import { UserContext } from "./Component1";

function Component3() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Component 3</h1>
      <h2>{`Hi ${user}!`}</h2>
    </div>
  );
}

export default Component3;
