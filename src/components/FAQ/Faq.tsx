import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./faq.scss";
const Faq = () => {
  return (
    <>
      <h1>FAQ</h1>
      <center>
        <CardGroup>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Why would I use this site ?</Card.Title>
              <Card.Text>
                Arrr, ye ever found yerself in a bind, not knowin' what to
                watch, eh? Or maybe ye be strugglin’ to pick a film to watch
                with yer crew? Well, fear no more, ye scallywags! With our
                mighty movie roulette, ye’ll never face that trouble again! And
                with our trusty "favourite films" and "history" features, ye can
                stash away those films ye wanna watch for later, like treasure
                ye plan to claim when the time be right! Yarrr, the sea of
                movies be yours to sail!
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Why is there fact about a cat ? </Card.Title>
              <Card.Text>
                You see, life, she is like a roulette—one moment, you spin and
                find a grand adventure! Ze next? Poof! A most curious feline
                appears! Why, you ask, ‘ave we bestowed upon zis fine
                establishment ze gift of un petit fact about ze noble cat? Ah,
                mon ami, it is because ze cat, she is a creature of mystery, of
                elegance, of ze most delightful unpredictability—much like zis
                very roulette! One does not question why ze sun rises, or why ze
                wind whispers secrets to ze trees. Non! One simply enjoys ze
                marvels of fate. And so, when you spin ze wheel, you may find
                not only a film to delight your senses, but also a morsel of
                wisdom about our feline overlords. C’est magnifique, non?
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Where did you get the movies ?</Card.Title>
              <Card.Text>
                The films within our esteemed roulette are procured from a grand
                tapestry of sources most varied and distinguished. Chief among
                them are the venerable archives of public domain, the noble
                houses of streaming services, and the learned repositories of
                cinematic history. Each motion picture is selected with the
                utmost care, ensuring a curation most delightful to our honored
                guests. Fret not, dear patron, for all films are obtained
                through means both lawful and just, befitting the dignity of
                this fine establishment.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </center>
    </>
  );
};

export default Faq;
