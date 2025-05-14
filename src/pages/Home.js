import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/photoaccueil1.png";

import younImage from "../images/younes.png";
import maryamImage from "../images/maryam.png";
import wiamImage from "../images/wiam.png";
import ammarImage from "../images/ammar.png";
import hindImage from "../images/hind.png";
import abdelImage from "../images/abdelwadoud.png";
import basmaImage from "../images/basma.png";
import imaneImage from "../images/imane.png";
import hoverLogo from "../images/logo.png";
import sectionImage from "../images/photo.png";
import "../styles/Home.css";

const products = [
  { name: "Younes TAOUMI", price: "Team Leader", image: younImage, hoverImage: hoverLogo, tag: "LEADER" },
  { name: "Maryam BADRI", price: "Vice Team Leader", image: maryamImage, hoverImage: hoverLogo },
  { name: "Wiam ABOUTARA BELRHITI", price: "Vice President Project", image: wiamImage, hoverImage: hoverLogo },
  { name: "Ammar MASSAOUDI", price: "Communication Manager", image: ammarImage, hoverImage: hoverLogo },
  { name: "Hind ZAKY", price: "Human Ressources Manager", image: hindImage, hoverImage: hoverLogo },
  { name: "Abdelwadoud EL BAROUJI", price: "Treasurer", image: abdelImage, hoverImage: hoverLogo },
  { name: "Basma JAWHAR", price: "Event Manager", image: basmaImage, hoverImage: hoverLogo },
  { name: "Imane OUAZZANI CHAHD", price: "Head of partnerships", image: imaneImage, hoverImage: hoverLogo },
];

function Home() {
  const carouselRef = useRef(null);
  const [activeTab, setActiveTab] = useState("histoire");

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      {/* Bannière principale */}
      <div className="headerContainer" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContent">
          <h1>ENACTUS FSBM<br />ENTREPRENEURIAT - ACTION - US</h1>
          <p>Plus de 1000 jeunes entrepreneurs<br />participent activement au développement<br />durable au Maroc depuis 2014</p>
          <Link to="/join">
            <button>rejoignez nous</button>
          </Link>
        </div>
      </div>

      {/* Carrousel */}
      <div className="equipe-section">
        <h2>Notre équipe</h2>
        <div className="carousel-wrapper">
          <button className="nav left" onClick={() => scrollCarousel("left")} aria-label="Défiler vers la gauche">&lt;</button>

          <div className="carousel-container" ref={carouselRef}>
            {products.map((product, index) => (
              <div className="product-card" key={product.name} tabIndex="0">
                {product.tag && <span className="product-tag">{product.tag}</span>}
                <div className="image-wrapper">
                  <img src={product.image} alt={product.name} className="main-img" />
                  <img src={product.hoverImage} alt="Logo Enactus" className="hover-img" />
                </div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))}
          </div>

          <button className="nav right" onClick={() => scrollCarousel("right")} aria-label="Défiler vers la droite">&gt;</button>
        </div>
      </div>

      {/* Section présentation avec onglets */}
      <div className="presentation-section">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "histoire" ? "active" : ""}`}
            onClick={() => setActiveTab("histoire")}
          >EVENEMENTS</button>

          <button
            className={`tab ${activeTab === "engagements" ? "active" : ""}`}
            onClick={() => setActiveTab("engagements")}
          >NOS PROJETS</button>
        </div>

        <div className="content-and-image">
          <div className="text-content">
            {activeTab === "histoire" ? (
              <>
                <h2>Une année riche en défis, rencontres et accomplissements !</h2>
                <p>Entre intégration, compétitions nationales, hackathons et événements inspirants, notre parcours 2023-2024 reflète notre engagement, notre esprit d’équipe et notre soif d’impact.</p>
                <p className="author">— Clique ici pour revivre les temps forts de l’aventure Enactus FSBM</p>
                <Link to="/evenement">
                  <button className="discover-btn">DÉCOUVRIR NOS EVENEMENTS</button>
                </Link>
              </>
            ) : (
              <>
                <h2>Des solutions concrètes pour un avenir plus durable et solidaire</h2>
                <p>Chez Enactus, nous croyons en la force de l'action pour un avenir meilleur. Nos projets étudiants s’engagent activement pour l’atteinte des Objectifs de Développement Durable, en plaçant l’inclusion, l’innovation et la durabilité au cœur de chaque initiative.</p>
                <p className="author">— Découvrez comment nos projets changent les règles du jeu pour un avenir plus durable.</p>
                <Link to="/projet">
                  <button className="discover-btn">VOIR NOS PROJETS</button>
                </Link>
              </>
            )}
          </div>

          <div className="image-side">
            <img src={sectionImage} alt="Présentation Enactus" />
          </div>
        </div>
      </div>

  
    </div>
  );
}

export default Home;
