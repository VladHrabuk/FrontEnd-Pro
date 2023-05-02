import React from "react";
import "./styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navigation">
          <div className="container">
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Tutorials
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
