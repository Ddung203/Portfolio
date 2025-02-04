import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Duong Dung(ddung203) </span>
            from <span className="purple"> Bac Giang, Vietnam.</span>
            <br />I am currently employed as a backend developer at{" "}
            <a
              style={{ color: "inherit" }}
              href="https://sworksolution.com/"
            >
              Swork
            </a>
            .
            <br />
            I completed my bachelor's degree in Software Engineering at Hanoi
            University of Industry
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Go out with friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I’m not lazy, I’m in energy-saving mode 😎"{" "}
          </p>
          <footer className="blockquote-footer">Ddung203</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
