import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import { SiFirebase, SiNestjs, SiPostgresql, SiRedis } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiJavascript1 />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <TbBrandGolang />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiNodejs />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiReact />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiMongodb />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiNestjs />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiGit />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiFirebase />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiRedis />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiPostgresql />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

export default Techstack;
