import React, { useEffect, useRef } from "react";
import "../styles/Contact.css";
import mapImage from "../images/joinimg.png";
import icon3 from "../images/icon3.png";
import icon5 from "../images/icon5.png";
import icon6 from "../images/icon6.png";
import icon7 from "../images/icon7.png";
import icon8 from "../images/icon8.png";

const stats = [
  { number: 1000, label: "étudiants impactés", icon: icon8 },
  { number:  40, label: "projets réalisés ", icon: icon6 },
  { number: 500, label: "Bénéficiaires impactés ", icon: icon7 },
  { number: 3000 , label: "Heures de formations et d’accompagnement dispensées", icon: icon3 },
  { number: 13, label: "Objectives du développement durable touchés", icon: icon5 },
 
];

const NotreReseau = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const counters = sectionRef.current.querySelectorAll("[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = +el.getAttribute("data-count");
            let count = 0;
            const increment = Math.ceil(target / 100);
            const updateCount = () => {
              if (count < target) {
                count += increment;
                el.innerText = count;
                setTimeout(updateCount, 20);
              } else {
                el.innerText = target;
              }
            };
            updateCount();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((counter) => observer.observe(counter));
  }, []);

  return (
    <section className="reseau-section" ref={sectionRef}>
      <div className="reseau-left">
        <div className="title-container">
          <h2 className="title-black">Fondé en </h2>
          <span className="title-yellow">2014</span>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              className="stat-box"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={stat.icon} alt="icon" className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number" data-count={stat.number}>0</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="reseau-right">
        <img src={mapImage} alt="Carte du Maroc" className="map-image" />
      </div>
    </section>
  );
};

export default NotreReseau;
