import React from "react";

class Form extends React.Component {
  render() {
    const { handler, text, textHandler } = this.props;
    return (
      <form onSubmit={handler} className="container">
        <input
          id="text"
          name="text"
          value={text}
          onChange={(e) => textHandler(e.target.value)}
        ></input>
        <button>Save</button>
      </form>
    );
  }
}

export default Form;
