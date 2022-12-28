import React from "react";
import pgn from "../../assets/images/svg/klipartz.com.png";
function Land() {
  return (
    <div className="container Land">
      <div className="row">
        <div className="col">
          <img className="land-image" src={pgn}></img>
        </div>
        <div className="col home-title">
          <h1>Basketball World</h1>
          <p className="lead lead-home">
            Dans un univers où tout se transforme en données, nous pensons que
            le sport peut grandement bénéficier d'une plateforme contenant des
            informations bien structurées et centralisées. Basketball World App
            est une application Web qui a été créée pour cet objectif “Rendre le
            monde du Basketball accessible à tout le monde”
          </p>
          <div className="home-button">
            <a type="button" class="btn btn1 btn-success" href="#about">
              Content
            </a>
            <a type="button" class="btn btn-primary" href="#content">
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Land;
