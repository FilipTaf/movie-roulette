import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import emailjs from "@emailjs/browser";
//@ts-ignore
import styles from "../components/forms.module.scss";
import "../components/forms.module.scss";
import * as Icon from "react-bootstrap-icons";

const FooterForm = () => {
  const Send = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_2w17szf",
      "template_yyrsj5s",
      e.target,
      "8KlHuXhbV40jr6enq"
    );
  };
  return (
    <>
      <div className={styles.block}>
        <div className={styles.Text}>
          <h1>
            {" "}
            Contact Form <Icon.InfoSquareFill></Icon.InfoSquareFill>
          </h1>
        </div>
        <Form onSubmit={Send} className={styles.Forms}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  className={styles.formControl}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control
                  className={styles.formControl}
                  type="email"
                  name="email_from"
                  placeholder="Your E-mail"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col colSpan={2}>
              <Form.Group>
                <Form.Control
                  className={styles.formControl}
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group>
              <Button type="submit" className={styles.button}>
                Send Message <Icon.Send></Icon.Send>
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default FooterForm;
