import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
      
        <Link to="/Home"> <img src={logo} alt="Logo Enactus" /></Link>
        <p className="logoTexte">Enactus</p>
      </div>

      <div className="rightSide">
        <Link to="/Home">Home</Link>
        <Link to="/evenement">Evenements</Link>
        <Link to="/projet">Projects</Link>
        <Link to="/contact">Nos chiffres</Link>
        <Link to="/join">Join Us</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>

      {/* Liens visibles uniquement en version mobile */}
      {openLinks && (
        <div className="hiddenLinks">
          <Link to="/Home">Home</Link>
          <Link to="/evenement">Evenements</Link>
          <Link to="/projet">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/join">Join Us</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
