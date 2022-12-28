import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

function PlayerDetails() {
  const params = useParams();
  const fetchId = parseInt(params.id);
  let [player, setPlayer] = useState([]);
  useEffect(() => {
    getPlayer();
  }, []);
  let getPlayer = async () => {
    let response = await fetch("/api/joueur/");
    let data = await response.json();
    const p = data.find((p) => p.ID_JOUEUR === fetchId);
    setPlayer(p);
  };
  return (
    <Container>
      <Link to="/players" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={player.IMAGE} alt={player.NOMJOUEUR} fluid />
          <ListGroup varinat="flush">
            <ListGroup.Item>
              <h3>Nom: {player.NOMJOUEUR}</h3>
              <h3>Prénom: {player.PRENOMJOUEUR}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>La Taille du joueur</h3>
              <h4>{player.TAILLEJOUEUR}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>La date de Naissance</h3>
              <h4>{player.DATENAISS}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Nationalité</h3>
              <h4>{player.NATIONALITE}</h4>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup varinat="flush">
            <ListGroup.Item className="ratio ratio-1x1 rounded-circle overflow-hidden">
              <img src={player.imageClub} alt={player.NOMCLUB} />
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Club</h3>
              <h5>{player.NOMCLUB}</h5>
              </ListGroup.Item>
             <ListGroup.Item>
              <h5>Pays</h5>
              <h5>{player.PAYSCLUB}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
              <h5>Ville</h5>
              <h5>{player.VILLECLUB}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Date de Début</h5>
              <h5>{player.DATE_DEBUT_Cl}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Date de Fin</h5>
              <h5>{player.DATE_FIN_Cl}</h5>
            </ListGroup.Item>
          </ListGroup>
          <br></br>
        </Col>
        <Col md={3}>
          <ListGroup varinat="flush">
            <ListGroup.Item className="ratio ratio-1x1 rounded-circle overflow-hidden">
              <img src={player.imageEq} alt="equipe" />
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Equipe</h3>
              <h5>{player.NOMEQUIPE}</h5>
              </ListGroup.Item>
             <ListGroup.Item>
              <h5>Pays</h5>
              <h5>{player.PAYS}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Date de Début</h5>
              <h5>{player.DATE_DEBUT_Eq}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Date de Fin</h5>
              <h5>{player.DATE_FIN_Eq}</h5>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Link
          to={"/players/stat/" + player.ID_JOUEUR}
          className="btn btn-primary my-3"
        >
          Des statistiques sur le Joueur {player.NOMJOUEUR}{" "}
          {player.PRENOMJOUEUR}
        </Link>
      </Row>
    </Container>
  );
}

export default PlayerDetails;
