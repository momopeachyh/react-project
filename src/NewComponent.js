import React from "react";

class NewComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 35,
      name: "Philward",
      favorite_color: "magenta",
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
    this.setState({ age: 46 });
  };
}

export default NewComponent;
