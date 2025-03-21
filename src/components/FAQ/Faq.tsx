import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./faq.scss";

const Faq = () => {
  const [isHovered1, setisHovered1] = useState(true);
  const [isHovered2, setisHovered2] = useState(true);
  const [isHovered3, setisHovered3] = useState(true);

  const handleHoverCard1 = () => {
    setisHovered2(false);
    setisHovered3(false);
    setisHovered1(true);
  };
  const handleHoverCard2 = () => {
    setisHovered1(false);
    setisHovered3(false);
    setisHovered2(true);
  };
  const handleHoverCard3 = () => {
    setisHovered2(false);
    setisHovered1(false);
    setisHovered3(true);
  };
  const handleOut = () => {
    setisHovered2(true);
    setisHovered1(true);
    setisHovered3(true);
  };
  return (
    <>
      <center className="cardgroupper">
        <h1>FAQ</h1>
        <div className="row">
          <div className="col-sm-4">
            <Card
              className={isHovered1 ? "cards" : "cards darker"}
              id="card1"
              onMouseOver={handleHoverCard1}
              onMouseOut={handleOut}
            >
              <Card.Body>
                <Card.Img variant="top" src="/mark.svg" />
                <Card.Title>Why would I use this site ?</Card.Title>
                <Card.Text>
                  Arrr, ye ever found yerself in a bind, not knowin' what to
                  watch, eh? Or maybe ye be strugglin’ to pick a film to watch
                  with yer crew? Well, fear no more, ye scallywags! With our
                  mighty movie roulette, ye’ll never face that trouble again!
                  And with our trusty "favourite films" and "history" features,
                  ye can stash away those films ye wanna watch for later, like
                  treasure ye plan to claim when the time be right! Yarrr, the
                  sea of movies be yours to sail!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card
              className={isHovered2 ? "cards" : "cards darker"}
              id="card2"
              onMouseOver={handleHoverCard2}
              onMouseOut={handleOut}
            >
              <Card.Body>
                <Card.Img variant="top" src="/cat.svg" />
                <Card.Title>Why is there fact about a cat ? </Card.Title>
                <Card.Text>
                  You see, life, she is like a roulette—one moment, you spin and
                  find a grand adventure! Ze next? Poof! A most curious feline
                  appears! Why, you ask, ‘ave we bestowed upon zis fine
                  establishment ze gift of un petit fact about ze noble cat? Ah,
                  mon ami, it is because ze cat, she is a creature of mystery,
                  of elegance, of ze most delightful unpredictability—much like
                  zis very roulette! One does not question why ze sun rises, or
                  why ze wind whispers secrets to ze trees. Non! One simply
                  enjoys ze marvels of fate. And so, when you spin ze wheel, you
                  may find not only a film to delight your senses, but also a
                  morsel of wisdom about our feline overlords. C’est magnifique,
                  non?
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card
              id="card3"
              className={isHovered3 ? "cards" : "darker"}
              onMouseOver={handleHoverCard3}
              onMouseOut={handleOut}
            >
              <Card.Body>
                <Card.Img variant="top" src="/movie.svg" />
                <Card.Title>Where did you get the movies ?</Card.Title>
                <Card.Text>
                  The films within our esteemed roulette are procured from a
                  grand tapestry of sources most varied and distinguished. Chief
                  among them are the venerable archives of public domain, the
                  noble houses of streaming services, and the learned
                  repositories of cinematic history. Each motion picture is
                  selected with the utmost care, ensuring a curation most
                  delightful to our honored guests. Fret not, dear patron, for
                  all films are obtained through means both lawful and just,
                  befitting the dignity of this fine establishment.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </center>
    </>
  );
};

export default Faq;
