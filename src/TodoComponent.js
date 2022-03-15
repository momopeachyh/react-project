import React from "react";

class TodoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 35,
      value: "state name",
    };
  }
  render() {
    return (
      <div>
        <h1>Class component demo</h1>
        <p>Creating first react class component</p>
        <p>hello {this.props.name}</p>
        <p>
          ID: {this.state.id} and value: {this.state.value}
        </p>
      </div>
    );
  }
}

export default TodoComponent;
