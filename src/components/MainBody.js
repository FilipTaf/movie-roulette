import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./Main.css";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";

const Mainbody = () => {
  const minRand = 0;
  const maxRand = 50;
  const movie = useSelector((state) => state.movies);
  var rand = Math.floor(minRand + Math.random() * (maxRand - minRand));
  function StartSpinner() {
    //add a reset to the array
    for (var i = 0; i < 5; i++) {
      //rand = Math.floor(minRand + Math.random() * (maxRand - minRand));
    }
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
            onClick={StartSpinner()}
          >
            Spin it!
          </Button>
        </Col>
        <Col></Col>
      </Row>

      <Row id="spinner">
        <Col class="col-sm-2">
          <Card id="Card1">
            <Card.Body>
              <Card.Title id="Card1title">{movie[rand]["title"]}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col class="col-sm-2">
          <Card id="Card2">
            <Card.Body>
              <Card.Title id="Card2title">{movie[rand]["title"]}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col class="col-sm-4">
          <Card id="Card3">
            <Card.Body>
              <Card.Title id="Card3title">{movie[rand]["title"]}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col class="col-sm-2">
          <Card id="Card4">
            <Card.Body>
              <Card.Title id="Card4title">{movie[rand]["title"]}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col class="col-sm-2">
          <Card id="Card5">
            <Card.Body>
              <Card.Title id="Card5title">{movie[rand]["title"]}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Mainbody;
