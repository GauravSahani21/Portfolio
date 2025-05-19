import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FoodApp from "../../Assets/Projects/project5.png";
import MyTunes from "../../Assets/Projects/project6.png";
import Landing from "../../Assets/Projects/project4.png";
import Youtube from "../../Assets/Projects/youtube.png";
import StonePaper from "../../Assets/Projects/stonepaper.png";
import TicTacToe from "../../Assets/Projects/tictactoe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodApp}
              isBlog={false}
              title="Food Delivery "
              demoLink="https://gauravsahani21.github.io/eCommerce-Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyTunes}
              isBlog={false}
              title="MyTunes Clone"
              demoLink="https://gauravsahani21.github.io/MyTunes-Clone/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Landing}
              isBlog={false}
              title="Landing Page"
              demoLink="https://gauravsahani21.github.io/Intro-page/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Youtube}
              isBlog={false}
              title="Youtube Clone"
              demoLink="https://gauravsahani21.github.io/Youtube-clone/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StonePaper}
              isBlog={false}
              title="Stone Paper Scissors"
              demoLink="https://gauravsahani21.github.io/rock-paper-scissors/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="tic tac toe"
              demoLink="https://gauravsahani21.github.io/tic-tac-toe-game/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
