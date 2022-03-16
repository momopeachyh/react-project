import React, { useState, useEffect } from "react";

function EffectHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  // array bracket keeps counter from going up and up

  return (
    <div className="EffectHook">
      <h1>I have rendered {count} times</h1>
    </div>
  );
}

export default EffectHook;
