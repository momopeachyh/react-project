import React from "react";
import FirstName from "./FirstName.js";
import LastName from "./LastName.js";
import Age from "./Age.js";

function FormPrac(props) {
  function getData() {
    const getDataFunction = (event) => {
      event.preventDefault();
      console.log(event.target.value);
    };
  }
  return (
    <div>
      <form>
        <FirstName />
        <LastName />
        <Age />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormPrac;
