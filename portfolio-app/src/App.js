import Header from "./components/header/header.js";
import Main from "./components/main/main.js";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <Main />
      </main>
    </div>
  );
}

export default App;
