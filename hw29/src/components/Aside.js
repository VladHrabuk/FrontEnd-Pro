import React from "react";
import "./styles/Aside.css";

class Aside extends React.Component {
  render() {
    return (
      <aside>
        <div className="sidebar">
          <ul>
            <li>
              <a href="/">Посилання 1</a>
            </li>
            <li>
              <a href="/">Посилання 2</a>
            </li>
            <li>
              <a href="/">Посилання 3</a>
            </li>
            <li>
              <a href="/">Посилання 4</a>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default Aside;
