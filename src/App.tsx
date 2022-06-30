import logo from "./logo.svg";
import "./App.css";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ibrahim Ahmed</p>
      </header>
    </div>
  );
};

export default App;
