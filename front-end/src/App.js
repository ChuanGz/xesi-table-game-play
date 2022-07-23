import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="App">
          <Game></Game>
        </div>
      </header>
    </div>
  );
}

export default App;
