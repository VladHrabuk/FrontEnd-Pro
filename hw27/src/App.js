import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Main />
        <Aside />
      </div>
    </div>
  );
}

export default App;
