import React from "react";
import "./App.css";
import Counter from "./Counter";
import ClassCounter from "./ClassCounter";

function App() {
  return (
    <div className="App">
      <div className="rect">
        <Counter />
      </div>
      <div className="rect">
        <ClassCounter />
      </div>
    </div>
  );
}

export default App;
