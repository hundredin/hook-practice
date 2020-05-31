import React, { useReducer, useEffect } from "react";

const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state, action) => {
  const { count, step } = state;
  if (action.type === "tick") {
    return { count: count + step, step };
  } else if (action.type === "step") {
    return { count, step: action.step };
  } else {
    throw new Error();
  }
};

const AutoCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    // step 이 바뀐다고 인터벌이 초기화되지 않는 것을 원한다면?
    // useReducer 를 이용해서 의존성배열(deps) 를 모두 제거했다.
    // 결국 이 AutoCounter 컴포넌트는 한번만 실행되게 되며(=유지되며) dispatch 는 항상 같다.
    return () => {
      console.log("clear interval");
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Counter</h1>
      <div className="count">{count}</div>
      step:{" "}
      <input
        value={step}
        onChange={(e) => {
          dispatch({ type: "step", step: Number(e.target.value) });
        }}
      />
    </div>
  );
};

export default AutoCounter;
