import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projet.css";

import biogazify from "../images/biogazify.png";
import bistrokab from "../images/bistrokab.png";
import botaba9a from "../images/Botaba9a.png";
import bottle3d from "../images/bottle3d.png";
import educlass from "../images/educlass mingle.png";
import enbo from "../images/enbo.png";
import potrinov from "../images/potrinov.png";
import reskin from "../images/reskin.png";
import sitauti from "../images/sitauti.png";
import uniride from "../images/uniride.png";
import voltainos from "../images/voltainos.png";

const sections = [
  {
    title: "Biogazify",
    text: `projet vise à convertir du biogaz issu de déchets organiques en une source d'énergie pratique pour la cuisine.`,
    image: biogazify,
    reverse: false,
  },
  {
    title: "Bistrokabb",
    text: `le câprier, trésor nutritionnel souvent négligé au Maroc, est mis en lumière par Bistrolabb. En créant des produits alimentaires sains et variés à base de câpres, cette initiative soutient les producteurs locaux, valorise le savoir-faire artisanal et crée des opportunités économiques pour les femmes, tout en ravivant la cuisine marocaine traditionnelle.`,
    image: bistrokab,
    reverse: true,
  },
  {
    title: "Botaba9a",
    text: `Lorsque des coupures inattendues de gaz interrompent vos repas ou douches, cela perturbe votre quotidien. Bota Baقa apporte une solution intelligente avec un capteur qui mesure le niveau de gaz restant et envoie des alertes avant que la bouteille ne soit vide, garantissant ainsi une gestion fluide et sans surprise de vos réserves.`,
    image: botaba9a,
    reverse: false,
  },
  {
    title: "Bottle 3D",
    text: `projet vise à collecter et traiter les bouteilles en plastique pour les recycler en filaments utilisables dans les imprimantes 3D. `,
    image: bottle3d,
    reverse: true,
  },
  {
    title: "Educlass mingle",
    text: `un site web intégrant réseaux sociaux et étude, facilitant l'apprentissage, la révision et la communication simultanément pour les utilisateurs. `,
    image: educlass,
    reverse: false,
  },
  {
    title: "Enbo",
    text: `propose des boîtes écologiques à trois couches, faites de matériaux recyclés, pour protéger les produits et assurer leur traçabilité.`,
    image: enbo,
    reverse: true,
  },
  {
    title: "Potrinov",
    text: `POTRINOV réinvente l’art de la poterie en alliant savoir-faire traditionnel et innovation moderne. Avec des créations uniques et un service digital en cours de finalisation, nous offrirons à nos partenaires une visibilité authentique et engageante. Ce projet vise à soutenir un artisanat durable et éco-responsable, tout en promettant une expérience enrichissante pour tous. `,
    image: potrinov,
    reverse: false,
  },
  {
    title: "Reskin",
    text: `Face au gaspillage alimentaire et à l'impact néfaste des cosmétiques industriels sur l’environnement, Reskin transforme ces résidus en cosmétiques durables. En recyclant les déchets alimentaires, l'entreprise réduit l'empreinte carbone et crée des produits respectueux de la peau et de la planète, répondant ainsi aux attentes des consommateurs éco-conscients. `,
    image: reskin,
    reverse: true,
  },
  {
    title: "Sitauti",
    text: `Une plateforme interactive dédiée à l'autisme, offrant divers moyens de soutien aux autistes, leurs familles et aidants,répondant à un besoin social urgent.`,
    image: sitauti,
    reverse: false,
  },
  {
    title: "Uniride",
    text: `Une application mobile optimise le transport étudiant au Maroc avec covoiturage adaptatif, promouvant mobilité durable, économique et sécurisée`,
    image: uniride,
    reverse: true,
  },
  {
    title: "Voltainos",
    text: `Avec sa solution énergétique durable, VOLTAINOS combine l'énergie éolienne avec la technologie piézo électrique pour une production d'électricité flexible et durable.`,
    image: voltainos,
    reverse: false,
  },
];

const Section = ({ title, text, image, reverse }) => (
  <div className={`section ${reverse ? "reverse" : ""}`}>
    <div className="text-content" data-aos="fade-up">
      <div className="text-box">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
    <div className="image-content" data-aos="fade-up">
      <img src={image} alt={title} />
    </div>
  </div>
);

const Projet = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="projet-page">
    <div className="page-container">
      <h1 className="page-title">Nos Projets</h1>
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
    </div>
  );
};

export default Projet;

