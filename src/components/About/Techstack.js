import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiPhp,
  DiBootstrap,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";


function Techstack() {
  return (
   <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons text-center">
    <CgCPlusPlus />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>C++</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <DiJavascript1 />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>JavaScript</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <DiNodejs />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>Node.js</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <DiReact />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>React</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <DiMysql />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>MySQL</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <DiHtml5 />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>HTML5</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <DiCss3 />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>CSS3</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <DiPhp />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>PHP</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <DiBootstrap />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>Bootstrap</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <DiMongodb />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>MongoDB</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <DiGit />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>Git</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <DiPython />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>Python</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <DiJava />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>Java</div>
  </Col>
</Row>

  );
}

export default Techstack;
