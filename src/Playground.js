import React, { useState, useEffect } from "react";

function Playground() {
  const [author, setAuthor] = useState("Herman Melville");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("lightpink");
  const authorArray = ["Hendrix", "Phillips", "O'Keefe", "Faulkner"];
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setColor((color) => "red");
    }, 1000);
  });
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={(event) => setAuthor("Hendrix")}
      >
        Change author
      </button>
      <h1>{author}</h1>
      <h2>You've been on the page for {count}</h2>
    </div>
  );
}

export default Playground;
