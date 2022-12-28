import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import ClubCarouselQ6 from "./ClubCarouselQ6";
function ClubDetails() {
  const params = useParams();
  const fetchId = parseInt(params.slug);
  let [club, setClub] = useState([]);
  useEffect(() => {
    getClub();
  }, []);
  let getClub = async () => {
    let response = await fetch("/api/clubs/");
    let data = await response.json();
    const p = data.find((p) => p.ID_CLUB === fetchId);
    setClub(p);
  };

  return (
    <Container>
      <Link to="/clubs" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={club.IMAGE} alt={club.NOMCLUB} fluid />
        </Col>
        <Col md={4}>
          <ListGroup varinat="flush">
            <ListGroup.Item>
              <h3>Nom du Clubs</h3>
              <h3>{club.NOMCLUB}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Le Pays</h3>
              <h3>{club.PAYSCLUB}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <br></br>
      <h2 className="text-center mb-5">
        Les Joueurs qui ont eu le plus de Passe Décisive par Match dans{" "}
        {club.NOMCLUB}
      </h2>
      <Row>
        <ClubCarouselQ6 id={fetchId} />
      </Row>
    </Container>
  );
}

export default ClubDetails;
