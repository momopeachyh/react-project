import React from "react";

class NewComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 35,
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.newFunc}>Click me</button>
        <p>age is {this.state.age}</p>
      </div>
    );
  }
  newFunc = () => {
    console.log("Hi");
    this.setState({ age: "hi" });
  };
}

export default NewComponent;
