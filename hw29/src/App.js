import React from "react";
import Example from "./Example";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      country: "Ukraine",
      isToggle: false,
    };
  }

  handlerClick = () => {
    const newCountry = this.state.isToggle
      ? "Ukraine"
      : "Ukraine is the best country";
    this.setState({ country: newCountry, isToggle: !this.state.isToggle });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <button onClick={this.handlerClick}>Toggle</button>
        <Example country={this.state.country} />
        <div className="container">
          <Main />
          <Aside />
        </div>
      </div>
    );
  }
}

export default App;
