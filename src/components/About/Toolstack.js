import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiApple,
} from "react-icons/si";

function Toolstack() {
  return (
     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons text-center">
    <SiApple />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "grey" }}>Mac Os</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <SiVisualstudiocode />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "grey" }}>VS Code</div>
  </Col>
  <Col xs={4} md={2} className="tech-icons text-center">
    <SiVercel />
    <div style={{ marginTop: "8px", fontSize: "14px", color: "grey" }}>Vercel</div>
  </Col>
</Row>

  );
}

export default Toolstack;
