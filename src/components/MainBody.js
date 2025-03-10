import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./Main.css";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Cardcontent from "./Cardcontent";

const Mainbody = () => {
  const movie = useSelector((state) => state.movies);
  const minRand = 0;
  const maxRand = 50;

  const [id, setId] = useState({
    zeroid: Math.floor(minRand + Math.random() * (maxRand - minRand)),
    firstid: Math.floor(minRand + Math.random() * (maxRand - minRand)),
    secondid: Math.floor(minRand + Math.random() * (maxRand - minRand)),
    thirdid: Math.floor(minRand + Math.random() * (maxRand - minRand)),
    fourthid: Math.floor(minRand + Math.random() * (maxRand - minRand)),
    fithid: Math.floor(minRand + Math.random() * (maxRand - minRand)),
  });
  function handleSpin() {
    setId({
      ...id,
      fithid: id.fourthid,
      fourthid: id.thirdid,
      thirdid: id.secondid,
      secondid: id.firstid,
      firstid: Math.floor(minRand + Math.random() * (maxRand - minRand)),
    });
  }

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs={8} className="d-flex justify-content-center mt-3 align-middle">
          <Image src="../logo.png" fluid />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={2} className={"d-flex justify-content-center px-15 m-5"}>
          <Button
            className="align-middle px-5"
            variant="primary"
            onClick={handleSpin}
          >
            Spin it!
          </Button>
        </Col>
        <Col></Col>
      </Row>

      <Row id="spinner">
        <Card id="Card0">
          <Card.Body>
            <Card.Title id="Card0title">
              <Cardcontent index={id.zeroid} />
            </Card.Title>
          </Card.Body>
        </Card>

        <Card id="Card1">
          <Card.Body>
            <Card.Title id="Card1title">
              <Cardcontent index={id.firstid} />
            </Card.Title>
          </Card.Body>
        </Card>

        <Card id="Card2">
          <Card.Body>
            <Card.Title id="Card2title">
              <Cardcontent index={id.secondid} />
            </Card.Title>
          </Card.Body>
        </Card>

        <Card id="Card3">
          <Card.Body>
            <Card.Title id="Card3title">
              <Cardcontent index={id.thirdid} />
            </Card.Title>
          </Card.Body>
        </Card>

        <Card id="Card4">
          <Card.Body>
            <Card.Title id="Card4title">
              <Cardcontent index={id.fourthid} />
            </Card.Title>
          </Card.Body>
        </Card>

        <Card id="Card5">
          <Card.Body>
            <Card.Title id="Card5title">
              <Cardcontent index={id.fithid} />
            </Card.Title>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Mainbody;
