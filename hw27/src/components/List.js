import Item from "./Listitem";

function List({ array }) {
  return (
    <ul>
      {" "}
      {array.map((elem) => {
        return (
          <div className="container-list">
            <Item>
              <span>{elem}</span>
            </Item>
          </div>
        );
      })}
    </ul>
  );
}

export default List;
