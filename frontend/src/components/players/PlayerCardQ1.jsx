import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function PlayerCardQ1(props) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={"/players/" + props.id}>
        <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
          <Card.Img src={props.image} alt="img" />
        </div>
      </Link>
      <Card.Body>
        <Card.Title as="div">
          <h3>
            {props.nom} {props.prenom}
          </h3>
        </Card.Title>
        <Card.Text as="h5">Le Total Points :{props.point}</Card.Text>
        <Card.Text as="h5">nationalite :{props.nationalite}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PlayerCardQ1;
