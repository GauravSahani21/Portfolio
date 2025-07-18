import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gaurav Sahani </span>
            from <span className="purple"> Goa, India.</span>
            <br />
            <br />
            I have completed BCA at Don Bosco College Panjim Goa,
            <br />With Grade 7.8 CGPA.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <br />
          I am now looking for a role where I can contribute to meaningful
          projects, learn from industry experts, and continue growing as a
          developer. <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
