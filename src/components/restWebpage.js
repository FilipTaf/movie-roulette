import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Mainbody = () => {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs={8} className="d-flex justify-content-center mt-5 align-middle">
          <Image src="../logo.png" fluid />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={2} className={"d-flex justify-content-center px-15 m-5"}>
          <Button className="align-middle px-5" variant="primary">
            Spin it!
          </Button>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col className={"d-flex justify-content-center"}>1</Col>
        <Col xs={3} className={"d-flex justify-content-center"}>
          2
        </Col>
        <Col xs={4} className={"d-flex justify-content-center"}>
          3
        </Col>
        <Col xs={3} className={"d-flex justify-content-center"}>
          4
        </Col>
        <Col className={"d-flex justify-content-center"}>5</Col>
      </Row>
    </Container>
  );
};

export default Mainbody;
