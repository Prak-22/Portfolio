import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prakruti Priyadarshini </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently a final year student at IIIT Bhubaneswar
            <br />
            I am currently studying Information Technology (BTech)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always stay consistent and joyful!"{" "}
          </p>
          <footer className="blockquote-footer">Prakruti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
