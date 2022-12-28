import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function ClubCardQ7c(props) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={"/clubs/" + props.id}>
        <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
          <Card.Img src={props.image} alt="img" />
        </div>
      </Link>
      <Card.Body>
        <Card.Title as="div">
          <h3>{props.nom}</h3>
        </Card.Title>
        <Card.Text as="h5">Nombre Euroleague Gagné:{props.Combien}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ClubCardQ7c;