import React from "react";

class List extends React.Component {
  render() {
    const { array } = this.props;
    return (
      <ul>
        {" "}
        {array.map((elem) => {
          return (
            <div className="container-list">
              <li>
                <span>{elem}</span>
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default List;
