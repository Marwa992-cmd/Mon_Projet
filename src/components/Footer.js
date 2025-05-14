import "../styles/Footer.css";
import logo from "../images/logo.png"; 
import fbIcon from "../images/facebook.png";
import xIcon from "../images/twitter.jpg";
import inIcon from "../images/linkdin.png";
import instIcon from "../images/insta.png";
import ytbIcon from "../images/Youtube_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Colonne Contact */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Technopark, 10 Rue Ghandi, Rabat - Maroc</p>
          <p>contact@enactus-morocco.org</p>
          <p>+212 537 730 135</p>
        </div>

        {/* Centre avec Logo et Texte */}
        <div className="footer-center">
          <div className="footer-main-logo-text">
            <img src={logo} alt="Logo Enactus" className="footer-main-logo" />
            <span className="enactus-text">enactus</span>
          </div>

          <div className="footer-links-center">
            <h3>Entrepreneuriat</h3>
            <p>Transformer les idées en actions concrètes créatrices de valeur.</p>

            <h3>Action</h3>
            <p>Passer à l'action sur le terrain avec impact.</p>

            <h3>Us</h3>
            <p>Une communauté engagée de leaders du changement.</p>
          </div>
        </div>

        {/* Colonne Suivez-nous */}
        <div className="footer-column right">
          <h3>Suivez-nous</h3>
          <div className="newsletter-box">
            <input type="email" placeholder="Votre email" />
            <button>S'abonner</button>
        
          </div>

          <div className="social-icons">
            <a href="https://web.facebook.com/EnactusMorocco" target="_blank" rel="noopener noreferrer">
              <img src={fbIcon} alt="Facebook" />
            </a>
            <a href="https://x.com/enactusmorocco" target="_blank" rel="noopener noreferrer">
              <img src={xIcon} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/company/enactus-morocco" target="_blank" rel="noopener noreferrer">
              <img src={inIcon} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/enactusmorocco/" target="_blank" rel="noopener noreferrer">
              <img src={instIcon} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCJknEq0AqwwkhWqCePqrDDA" target="_blank" rel="noopener noreferrer">
              <img src={ytbIcon} alt="YouTube" />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>ENACTUS CCO © 2024 TOUS DROITS RÉSERVÉS</p>
      </div>
    </footer>
  );
};

export default Footer;
