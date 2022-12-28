import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function ClubCardQ6(props) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={"/players/" + props.id}>
        <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
          <Card.Img src={props.image} alt="img" />
        </div>
      </Link>
      <Card.Body>
        <Card.Title as="div">
          <h4>
            {props.nom} {props.prenom}
          </h4>
        </Card.Title>
        <Card.Text as="h5">Passe décisive/match:</Card.Text>
        <Card.Text as="h5">{props.pass}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ClubCardQ6;
