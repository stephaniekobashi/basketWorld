import React from "react";
import pgn from "../../assets/images/svg/basket.png";
function Content() {
  return (
    <div className="container Land" id="about">
      <div className="row">
        <div className="col-8">
          <h1>Content</h1>
          <br></br>
          <p className="lead">
            Nous avons mis nos compétences et toutes nos énergies à réaliser la
            conception du modèle entité-association des données,
            l'implémentation et l’alimentation d’une base de données sur SQL
            puis le développement d’interfaces pour l’application web.
          </p>
          <h4>Les Objectifs réalisés Par: </h4>
          <br></br>
          <div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Joueur
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>
                      <ul>
                        <li>
                          Filtrer par nationalité ,nom et prénom du joueur
                        </li>
                        <li>
                          List 10 marqueurs dans leurs équipes nationales
                          (afficher nom et nombre de points)
                        </li>
                        <li>
                          Top 3 meilleurs tireurs de lancers francs dans une
                          finale (filtrer par championnat et season, afficher
                          nom et % de lance franc)
                        </li>
                        <li>Affichage des détails de chaque Joueurs</li>
                        <li>
                          Des statistiques de performance de chaque Joueurs
                        </li>
                      </ul>
                    </strong>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Clubs
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>
                      <ul>
                        <li>Affichage et Filtrage par nom et pays du Club</li>
                        <li>Affichage des Clubs ayant remporté l’Euroleague</li>
                        <li>
                          Affichage des Clubs ayant remporté l’Euroleague plus
                          de 3 fois
                        </li>
                        <li>Affichage des détails de chaque Sponsor</li>
                        <li>
                          Pour chaque Club ,affichage de ces 10 meilleurs
                          joueurs en passe décisive
                        </li>
                      </ul>
                    </strong>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Sponsors
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>
                      <ul>
                        <li>
                          Affichage et Filtrage par nom et ville du Sponsors
                        </li>
                        <li>
                          Affichage des top Sponsors qui sponsorisent les
                          vainqueurs de la coupe du monde
                        </li>
                        <li>Affichage des détails de chaque Sponsor</li>
                      </ul>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col">
          <img className="about-image" src={pgn}></img>
        </div>
      </div>
    </div>
  );
}

export default Content;
