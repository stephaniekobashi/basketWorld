import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
function ClubDetails() {
  const params = useParams();
  const fetchId = parseInt(params.id);
  let [sponsor, setSponsor] = useState([]);
  useEffect(() => {
    getSponsor();
  }, []);
  let getSponsor = async () => {
    let response = await fetch("/api/sponsors/");
    let data = await response.json();
    const p = data.find((p) => p.ID_SPONSOR === fetchId);
    setSponsor(p);
  };
  return (
    <Container>
      <Link to="/sponsors" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={sponsor.IMAGE} alt={sponsor.NOMSPONSOR} fluid />
        </Col>
        <Col md={3}>
          <ListGroup varinat="flush">
            <ListGroup.Item>
              <h3>Nom </h3>
              <h3>{sponsor.NOMSPONSOR}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Ville</h3>
              <h3>{sponsor.VILLE}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* <Col md={2}>
          <ListGroup varinat="flush">
            <ListGroup.Item>
              <img alt="club" />
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Sponsor Club:</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col> */}
      </Row>
    </Container>
  );
}

export default ClubDetails;
