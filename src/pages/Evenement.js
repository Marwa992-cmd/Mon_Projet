import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Evenement.css";

import biogazify from "../images/evenement_header.jpeg";
import bistrokab from "../images/Capture.png";
import botaba9a from "../images/teste.png";
import bottle3d from "../images/photo.png";

const sections = [
  {
    title: "Journée d'intégration/lancement ( (2024-2025) ",
    text: ` La journée de lancement et d'intégration a permis de présenter le club Enactus FSBM tout en facilitant l'intégration des nouveaux membres à travers des jeux et des activités de cohésion. Un moment de partage et de convivialité, marquant le début d'une aventure collective.`,
    image: biogazify,
    reverse: false,
  },
  {
    title: "Compétition/Demi finale",
    text: `La fin d'une aventure, mais le début d'une autre. Nous aurions pu atteindre des sommets, mais les choses ne se passent pas toujours comme on l'aurait souhaité.
L'histoire est en marche et nous sommes fiers d’être parmi les 12 meilleures équipes du Maroc, une première historique pour Enactus FSBM.
The journey is ongoing.
E la storia continua.`,
    image: bistrokab,
    reverse: true,
  },
  {
    title: "Journée 8 mars : 09/ 03/2024",
    text: `L'événement "L'innovation au féminin : Explorer la science et l'entrepreneuriat" a mis en lumière le rôle des femmes dans ces deux domaines. Au programme : des panels sur les femmes leaders en sciences et l'entrepreneuriat, suivis d'un atelier sur le Brand Building. Des experts tels qu’Abdellah Zerhouni, Sanaâ Benahmed et Malika Izid ont partagé leurs expériences inspirantes, clôturant ainsi une journée riche en échanges et apprentissages.`,
    image: botaba9a,
    reverse: false,
  },
  {
    title: "Hackathon: 15/ 12/2023 et 16/12/2023 et 17/12/2023 ",
    text: ` Du 15 au 17 décembre 2023, notre équipe a participé au Méga Hackathon Panafricain, où nous avons eu l'opportunité de développer des idées de projets innovants en un temps limité, démontrant notre créativité et notre capacité à relever des défis dans un cadre compétitif.`,
    image: bottle3d,
    reverse: true,
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

const Evenement = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="projet-page">
    <div className="page-container">
      <h1 className="page-title">Nos Evenement</h1>
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
    </div>
  );
};

export default Evenement;

