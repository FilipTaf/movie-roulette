import React from "react";
import { Accordion } from "react-bootstrap";
import "./faq.css";
const Faq = () => {
  return (
    <>
      <h1 style={{ color: "white", marginTop: "50px", marginBottom: "50px" }}>
        FAQ
      </h1>
      <center>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why would i use this site ?</Accordion.Header>
            <Accordion.Body>
              Arrr, ye ever found yerself in a bind, not knowin' what to watch,
              eh? Or maybe ye be strugglin’ to pick a film to watch with yer
              crew? Well, fear no more, ye scallywags! With our mighty movie
              roulette, ye’ll never face that trouble again! And with our trusty
              "favourite films" and "history" features, ye can stash away those
              films ye wanna watch for later, like treasure ye plan to claim
              when the time be right! Yarrr, the sea of movies be yours to sail!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Where do you get the database for movies?
            </Accordion.Header>
            <Accordion.Body>
              The films within our esteemed roulette are procured from a grand
              tapestry of sources most varied and distinguished. Chief among
              them are the venerable archives of public domain, the noble houses
              of streaming services, and the learned repositories of cinematic
              history. Each motion picture is selected with the utmost care,
              ensuring a curation most delightful to our honored guests. Fret
              not, dear patron, for all films are obtained through means both
              lawful and just, befitting the dignity of this fine establishment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Why the facts about cats</Accordion.Header>
            <Accordion.Body>
              You see, life, she is like a roulette—one moment, you spin and
              find a grand adventure! Ze next? Poof! A most curious feline
              appears! Why, you ask, ‘ave we bestowed upon zis fine
              establishment ze gift of un petit fact about ze noble cat? Ah, mon
              ami, it is because ze cat, she is a creature of mystery, of
              elegance, of ze most delightful unpredictability—much like zis
              very roulette! One does not question why ze sun rises, or why ze
              wind whispers secrets to ze trees. Non! One simply enjoys ze
              marvels of fate. And so, when you spin ze wheel, you may find not
              only a film to delight your senses, but also a morsel of wisdom
              about our feline overlords. C’est magnifique, non?
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </center>
    </>
  );
};

export default Faq;
