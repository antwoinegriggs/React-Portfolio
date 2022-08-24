import Logo from "./components/logo.js";
import SocialBar from "./components/SocialBar.js";
import NavBar from "./components/NavBar.js";
import Landing from "./components/Landing.js";
import Technology from "./components/Technology.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SocialBar />
        <Logo />
        <NavBar />
      </header>
      <div>
        <main className="App-main">
          <Landing />
          <Technology />
        </main>
      </div>
    </div>
  );
}

export default App;
