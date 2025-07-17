import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <>
      {/* Inline CSS for hover and glow */}
      <style>
        {`
          .project-card-view {
            border: none;
            transition: all 0.3s ease;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          .project-card-view:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(24, 171, 215, 0.8); /* glow effect */
            border: 1px solid #18abd7;
          }
        `}
      </style>

      <Card className="project-card-view" style={{ width: "100%", height: "100%" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Visit"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCards;
