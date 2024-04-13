import "./App.css";
import holberton_logo from "./holberton-logo.jpg";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} alt="Holberton logo" className="App-header" />
        <h1>School dashboard</h1>
      </div>
      <div>
        <p className="App-body">Login to access the full dashboard</p>
      </div>
      <div className="div-footer">
        <p className="App-footer">Copyright 2020 - holberton School</p>
      </div>
    </>
  );
}

export default App;
