function Form(props) {
  const { handler, text, textHandler } = props;
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

export default Form;
