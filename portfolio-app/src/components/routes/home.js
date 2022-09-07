import "./home.css";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

export default function Home(props) {
  return (
    <div className="home">
      <header className="home-header">
        <Header />
      </header>
      <main id="home-main">
        <Main />
      </main>
      <footer className="home-footer">
        <Footer />
      </footer>
    </div>
  );
}
