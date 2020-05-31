import React from "react";

class ClassCounter extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };

  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidMount() {
    // 1. 일반적인 count
    document.getElementById(
      "class-info"
    ).innerText = `You clicked ${this.state.count} times`;

    // 2. function Counter 와의 비교. 연속 click
    // setTimeout(
    //   () =>
    //     (document.getElementById(
    //       "class-info"
    //     ).innerText = `You clicked ${this.state.count} times`),
    //   5000
    // );
  }

  render() {
    return (
      <div>
        <h1>Class Component - Counter</h1>
        <span className="count">{this.state.count}</span>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
        <div id="class-info"></div>
      </div>
    );
  }
}

export default ClassCounter;
