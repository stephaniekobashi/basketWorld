import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ClubCard from "./ClubCard";
import ClubCarouselQ7a from "./ClubCarouselQ7a";
import ClubCarouselQ7c from "./ClubCarouselQ7c";
import ClubCarouselQ3 from "./ClubCarouselQ3";
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

const MainClubs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [load, setLoad] = useState(undefined);
  let [visible, setVisible] = useState(8);
  let [clubs, setClubs] = useState([]);
  useEffect(() => {
    getClubs();
  }, []);

  let getClubs = async () => {
    let response = await fetch("/api/clubs/");
    let data = await response.json();
    setClubs(data);
    setLoad(true);
  };
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
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
              <a className="dropdown-item" href="#bestE">
                Les Clubs ayant remportés l’Euroleague
              </a>
              <a className="dropdown-item" href="#bestS">
                Clubs ayant remportés l’Euroleague plus de 3 fois
              </a>
              <a className="dropdown-item" href="#bestH">
                Taille Moyenne des clubs
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
                placeholder="Chercher par Nom ou Pays des Clubs"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </Col>
        </Row>
        <h2 className="text-center mb-5"> Tous les Clubs</h2>
        {!load ? (
          <Row>
            {" "}
            <Lottie options={defaultOptions} height={200} width={200} />
          </Row>
        ) : (
          <Row>
            {clubs
              .filter((club) => {
                if (searchTerm == "") {
                  return club;
                } else if (
                  club.NOMCLUB.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return club;
                } else if (
                  club.PAYSCLUB.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return club;
                }
              })
              .slice(0, visible)
              .map((club) => (
                <Col key={club.ID_CLUB} sm={12} md={6} lg={4} xl={3}>
                  <ClubCard
                    id={club.ID_CLUB}
                    nom={club.NOMCLUB}
                    pays={club.PAYSCLUB}
                    ville={club.VILLECLUB}
                    image={club.IMAGE}
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
        <h2 className="text-center mb-5" id="bestE">
          les Clubs ayant remportés l’Euroleague
        </h2>
        <Row>
          <ClubCarouselQ7a />
        </Row>
        <br></br>
        <h2 className="text-center mb-5" id="bestS">
          Clubs ayant remportés l’Euroleague plus de 3 fois
        </h2>
        <Row>
          <ClubCarouselQ7c />
        </Row>
        <br></br>
        <h2 className="text-center mb-5" id="bestH">
          Les Clubs qui ont la plus grandes moyenne de taille
        </h2>
        <Row>
          <ClubCarouselQ3 />
        </Row>
      </Container>
    </section>
  );
};

export default MainClubs;
