import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      console.log("clear interval");
      clearInterval(id);
    };
  }, [count]);

  return (
    <div>
      <h1>Counter</h1>
      <span className="count">{count}</span>
    </div>
  );
};

export default Counter;
