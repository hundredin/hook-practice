import React, { useState, useEffect } from "react";

const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count + step);
    }, 1000);

    // step 이 바뀐다고 인터벌이 초기화되지 않는 것을 원한다면?
    return () => {
      console.log("clear interval");
      clearInterval(id);
    };
  }, [step]);

  return (
    <div>
      <h1>Counter</h1>
      <div className="count">{count}</div>
      step:{" "}
      <input value={step} onChange={(e) => setStep(Number(e.target.value))} />
    </div>
  );
};

export default AutoCounter;
