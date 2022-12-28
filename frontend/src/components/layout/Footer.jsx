import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <footer class='footer'>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; 2022/2023 khaoula-stéphanie
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
