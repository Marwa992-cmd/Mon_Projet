import React from "react";
import photoaccueil1 from "../images/Capture.png";
import  "../styles/Join.css";

function  Join(){
    return(
    <div className="join">
     <div className="cotegauche" style={{ backgroundImage: `url(${photoaccueil1})` }}></div>
      <div className="cotedroit">
         <h1> Rejoigner nous</h1>
         <form id="contactform" method="post">
          <label htmlfor="name">Nom Complet</label>
          <input name="name" placeholder="enter votre nom complet" type="text"/>
          <label htmlfor="email">Email</label>
          <input name="email" placeholder="enter votre email" type="email"/>
         <label htmlFor="message">Message</label>
         <textarea rows="6" placeholder="entrer votre message" name="message" required></textarea>
          <button type="submit">Envoyer le message</button>
         </form>
       </div>
      </div>
 );
}
export default Join;