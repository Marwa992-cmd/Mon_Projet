// src/App.js
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";
import Evenement from "./pages/Evenement";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Marquee from "react-fast-marquee";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ backgroundColor: "#fffff", padding: "3px 0", fontSize: "14px" }}>
          <Marquee pauseOnHover={false} speed={50} gradient={false}>
            Nous créons des expériences permettant à chacun de re-découvrir ses aspirations
            <img src={logo} alt="logo" style={{ height: '25px', margin: '0 15px' }} />
            Favoriser le projet sociétal à travers l'action entrepreneuriale
            <img src={logo} alt="logo" style={{ height: '25px', margin: '0 15px' }} />
          </Marquee>
        </div>

        <Navbar />
         
    
         <Route path="/home" component={Home} />
        <Route path="/join" component={Join} />
        <Route path="/evenement"  component={Evenement} />
        <Route path="/projet"  component={Projet} />
        <Route path="/contact"  component={Contact} />
 
    
        <Footer />
      </Router>
    </div>
  );
}

export default App;
