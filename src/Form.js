import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");

  function doSomething() {
    setInput("hi");
  }

  function displayInput(event) {
    event.preventDefault();
    setInput(event.target.value);
  }
  return (
    <div>
      <input type="text" onInput={displayInput}></input>
      <input type="text" onInput={displayInput}></input>
      <button onClick={doSomething}>Submit</button>
      <h2>This is input 1: {input}</h2>
      <h2>This is input 2: {input}</h2>
    </div>
  );
}

export default Form;
