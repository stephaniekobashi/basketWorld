import React from "react";
import pgn from "../../assets/images/svg/basket1.png";
function About() {
  return (
    <div className="container Land" id="content">
      <div className="row">
        <div className="col">
          <img className="land-image" src={pgn}></img>
        </div>
        <div className="col home-title">
          <h1>About US</h1>
          <br></br>
          <br></br>
          <p className="lead lead-home">
            Basketball World a été créé en 2022 par Stéphanie Kobashi et Khaoula
            Abouelfadl avec l’envie de trouver les informations du monde du
            basket-ball centrées dans un seul lieu. Sans doute, ce désir a été
            grandement stimulé au sein du cours MOD Systèmes de gestion de bases
            de données de l’école Centrale de Lyon par les professeurs Mohsen
            Ardabilian et Daniel Muller.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
