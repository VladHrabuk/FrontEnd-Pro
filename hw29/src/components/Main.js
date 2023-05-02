import React from "react";
import List from "./List";
import Form from "./Form";
import "./styles/Main.css";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      tasks: [],
    };
    this.formHandler = this.formHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
  }

  formHandler(event) {
    event.preventDefault();
    const { tasks, text } = this.state;
    this.setState({ tasks: [...tasks, text], text: "" });
  }

  textHandler(value) {
    this.setState({ text: value });
  }

  render() {
    const { text, tasks } = this.state;
    return (
      <main>
        <h1>To do list</h1>
        <Form
          handler={this.formHandler}
          text={text}
          textHandler={this.textHandler}
        />
        <List array={tasks} />
      </main>
    );
  }
}

export default Main;
