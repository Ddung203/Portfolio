import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  // let date = new Date();
  // let year = date.getFullYear();
  return (
    <Container
      fluid
      className="footer"
    >
      <Row>
        <Col
          md="4"
          className="footer-copywright"
        >
          <h3>Maintained by Ddung203</h3>
        </Col>
        <Col
          md="4"
          className="footer-copywright"
        >
          {/* <h3>Copyright © {year} SB</h3> */}
        </Col>
        <Col
          md="4"
          className="footer-body"
        >
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ddung203"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://facebook.com/ddung203"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/ddung203"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/ddung203"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
