import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ThinkBoard from "../../Assets/Projects/ThinkBoard.png";
import PhotoSorter from "../../Assets/Projects/PhotoSorter.png";
import RecurringDP from "../../Assets/Projects/RecurringDP.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import FoodApp from "../../Assets/Projects/project5.png";
import MyTunes from "../../Assets/Projects/project6.png";
import Landing from "../../Assets/Projects/project4.png";
import Youtube from "../../Assets/Projects/youtube.png";
import StonePaper from "../../Assets/Projects/stonepaper.png";
import TicTacToe from "../../Assets/Projects/tictactoe.png";
import MusicPortfolio from "../../Assets/Projects/MusicPortfolio.png";
import Roavia from "../../Assets/Projects/Roavia.png";
import Todo from "../../Assets/Projects/Todo.png";
import StopWatch from "../../Assets/Projects/StopWatch.png";

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
              imgPath={PhotoSorter}
              isBlog={false}
              title="Photo Sorter"
              demoLink="https://photo-selector.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ThinkBoard}
              isBlog={false}
              title="MERN-ThinkBoard"
              demoLink="https://mern-thinkboard-1-c01d.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MusicPortfolio}
              isBlog={false}
              title="Music Portfolio"
              demoLink="https://music-portfolio-self.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Roavia}
              isBlog={false}
              title="Roavia"
              demoLink="https://roavia.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="Todo App"
              demoLink="https://todo-sct-wd-4.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio Website"
              demoLink="https://portfolio-alpha-pearl-78.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StopWatch}
              isBlog={false}
              title="Stop Watch"
              demoLink="https://stop-watch-sct-wd-2.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RecurringDP}
              isBlog={false}
              title="Recurring Date Picker"
              demoLink="https://recurring-date-picker-eight.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodApp}
              isBlog={false}
              title="Restaurant Website"
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
              imgPath={TicTacToe}
              isBlog={false}
              title="tic tac toe"
              demoLink="https://gauravsahani21.github.io/tic-tac-toe-game/"
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
              imgPath={Youtube}
              isBlog={false}
              title="Youtube Clone"
              demoLink="https://gauravsahani21.github.io/Youtube-clone/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
