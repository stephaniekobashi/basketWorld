import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";
import PlayerCarouselQ1 from "./PlayerCarouselQ1";
import PlayerCarouselQ2 from "./PlayerCarouselQ2";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import * as location from "../../assets/loaders/baskets.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const MainPlayers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [load, setLoad] = useState(undefined);
  let [players, setPlayers] = useState([]);
  let [visible, setVisible] = useState(9);
  useEffect(() => {
    getPlayers();
  }, []);

  let getPlayers = async () => {
    let response = await fetch("/api/joueurs");
    let data = await response.json();
    setPlayers(data);
    setLoad(true);
  };
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  return (
    <section>
      <Container>
        <Row className="filter">
          <Col>
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filter
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#top10">
                Listes 10 marqueurs dans leurs équipes nationales
              </a>
              <a className="dropdown-item" href="#top3">
                Top 3 meilleurs tireurs de lancers francs dans une finale en
                2015
              </a>
              <a className="dropdown-item" href="#3point">
                3 Point
              </a>
            </div>
          </Col>
          <Col>
            <form className="d-flex">
              <input
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
                className="form-control me-sm-2"
                type="search"
                placeholder="Chercher par Nom ,Prénom ou Nationalité du Joueur"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </Col>
        </Row>
        <h2 className="text-center mb-5"> Tous Les Joueurs</h2>
        {!load ? (
          <Row>
            {" "}
            <Lottie options={defaultOptions} height={200} width={200} />{" "}
          </Row>
        ) : (
          <Row>
            {players
              .filter((player) => {
                if (searchTerm == "") {
                  return player;
                } else if (
                  player.NOMJOUEUR.toLowerCase().includes(
                    searchTerm.toLowerCase()
                  )
                ) {
                  return player;
                } else if (
                  player.PRENOMJOUEUR.toLowerCase().includes(
                    searchTerm.toLowerCase()
                  )
                ) {
                  return player;
                } else if (
                  player.NATIONALITE.toLowerCase().includes(
                    searchTerm.toLowerCase()
                  )
                ) {
                  return player;
                }
              })
              .slice(0, visible)
              .map((player) => (
                <Col key={player.ID_JOUEUR} sm={12} md={6} lg={4}>
                  <PlayerCard
                    id={player.ID_JOUEUR}
                    nom={player.NOMJOUEUR}
                    taille={player.TAILLEJOUEUR}
                    prenom={player.PRENOMJOUEUR}
                    nationalite={player.NATIONALITE}
                    image={player.IMAGE}
                  />
                </Col>
              ))}
            <button
              type="button"
              class="btn btn-primary"
              onClick={showMoreItems}
            >
              Afficher Plus
            </button>
          </Row>
        )}
        <br></br>
        <h2 className="text-center mb-5" id="top10">
          Listes des 10 meilleurs marqueurs dans leurs équipes nationales
        </h2>
        <Row>
          <PlayerCarouselQ1 />
        </Row>
        <br></br>
        <h2 className="text-center mb-5" id="top3">
          Top des 3 meilleurs tireurs de lancers francs dans une finale de 2015
        </h2>
        <Row>
          <PlayerCarouselQ2 />
        </Row>
        <br></br>
      </Container>
    </section>
  );
};

export default MainPlayers;
