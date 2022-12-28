import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SponsorCard from "./SponsorCard";
import SponsorCarousel from "./SponsorCarousel";
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

const MainSponsors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  let [sponsors, setSponsors] = useState([]);
  const [load, setLoad] = useState(undefined);
  let [visible, setVisible] = useState(12);
  useEffect(() => {
    getSponsors();
  }, []);

  let getSponsors = async () => {
    let response = await fetch("/api/sponsors/");
    let data = await response.json();
    setSponsors(data);
    setLoad(true);
  };
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 8);
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
              <a className="dropdown-item" href="#bestS">
                Sponsors des vainqueurs de la coupe du monde
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
                placeholder="Chercher par Nom ou Ville du Sponsor"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </Col>
        </Row>
        <h2 className="text-center mb-5"> All Sponsors</h2>
        {!load ? (
          <Row>
            {" "}
            <Lottie options={defaultOptions} height={200} width={200} />{" "}
          </Row>
        ) : (
          <Row>
            {sponsors
              .filter((sponsor) => {
                if (searchTerm == "") {
                  return sponsor;
                } else if (
                  sponsor.NOMSPONSOR.toLowerCase().includes(
                    searchTerm.toLowerCase()
                  )
                ) {
                  return sponsor;
                } else if (
                  sponsor.VILLE.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return sponsor;
                }
              })
              .slice(0,visible).map((sponsor) => (
                <Col key={sponsor.ID_SPONSOR} sm={12} md={6} lg={4} xl={3}>
                  <SponsorCard
                    id={sponsor.ID_SPONSOR}
                    nom={sponsor.NOMSPONSOR}
                    ville={sponsor.VILLE}
                    image={sponsor.IMAGE}
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
        <h2 className="text-center mb-5" id="bestS">
          Les Sponsors des vainqueurs de la coupe du monde
        </h2>
        <Row>
          <SponsorCarousel />
        </Row>
      </Container>
    </section>
  );
};

export default MainSponsors;
