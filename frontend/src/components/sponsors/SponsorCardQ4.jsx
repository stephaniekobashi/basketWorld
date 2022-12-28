import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function SponsorCard(props) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={"/sponsors/" + props.id}>
        <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
          <Card.Img src={props.image} alt="img" />
        </div>
      </Link>
      <Card.Body>
        <Card.Title as="div">
          <h2>{props.nom}</h2>
        </Card.Title>
        <Card.Text as="h5">Pays :{props.pays}</Card.Text>
        <Card.Text as="h5">La saison :{props.season}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SponsorCard;
