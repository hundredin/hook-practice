import React from "react";
import "./App.css";
import PostList from "./PostList";
import ClassPostList from "./ClassPostList";

function App() {
  return (
    <div className="App">
      <div className="rect">
        <PostList />
      </div>
      <div className="rect">
        <ClassPostList />
      </div>
    </div>
  );
}

export default App;
