import React from "react";

function Sibling1({ setMessage }) {
  const onButtonClick = (changeValue) => {
    setMessage(changeValue);
  };
  return (
    <div>
      <button onClick={() => onButtonClick("Message from sibling 1")}>
        Sibling 1 button
      </button>
    </div>
  );
}

export default Sibling1;
