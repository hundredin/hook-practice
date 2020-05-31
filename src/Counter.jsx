import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // 1. 일반적인 count
    document.getElementById("info").innerText = `You clicked ${count} times`;

    // 2. classCounter 와의 비교. 연속 click
    // setTimeout(
    //   () =>
    //     (document.getElementById(
    //       "info"
    //     ).innerText = `You clicked ${count} times`),
    //   5000
    // );
  }, []);

  return (
    <div>
      <h1>Functional Component - Counter</h1>
      <span className="count">{count}</span>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      <div id="info"></div>
    </div>
  );
};

export default Counter;
