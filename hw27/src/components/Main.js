import { useState } from "react";
import List from "./List";
import Form from "./Form";
import "./styles/Main.css";

function Main() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const formHandler = (event) => {
    event.preventDefault();
    setTasks([...tasks, text]);
    setText("");
  };

  return (
    <main>
      <h1>To do list</h1>
      <Form handler={formHandler} text={text} textHandler={setText} />
      <List array={tasks} />
    </main>
  );
}

export default Main;
