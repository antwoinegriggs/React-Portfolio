import Header from "./components/header/header.js";
import Main from "./components/main/main.js";
import Footer from "./components/footer/footer.js";

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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
