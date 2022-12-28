import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function ClubCard(props) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={"/clubs/" + props.id}>
        <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
          <Card.Img src={props.image} alt="img" />
        </div>
      </Link>
      <Card.Body>
        <Card.Title as="div">
          <h4>{props.nom}</h4>
        </Card.Title>
        <Card.Text as="h5">Pays :{props.pays}</Card.Text>
        <Card.Text as="h5">Ville :{props.ville}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ClubCard;
