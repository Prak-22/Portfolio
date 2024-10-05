import React from "react";
import { Col, Row } from "react-bootstrap";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={11}>
        <h3 style={{ paddingBottom: "20px" }}>
          Web Developer Intern at <strong className="purple">NullClass</strong>
        </h3>
        <p>
        Spearheaded the development of TechHub, a dynamic online platform for tech enthusiasts to engage in
        knowledge sharing through question-answer forums, incorporating robust authentication and
        authorization mechanisms to ensure data security and user privacy.
        Played a pivotal role in enhancing the TechHub platform by implementing three additional features
        requested by the organization, including a sophisticated dark mode toggle, a customizable video player
        for multimedia content, and a comprehensive user login history feature, showcasing exceptional
        problem-solving and technical skills.
        </p>
      </Col>

      <Col md={11}>
        <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
          Content Writer Intern at <strong className="purple">CollegeTips.in</strong>
        </h3>
        <p>
        Produced engaging and well-researched content on diverse subjects including technology, sports, fashion,
        movies,
        and stories, catering to a variety of target audiences.
        Collaborated within a dynamic team of content creators, contributing to specific content goals and
        fostering a supportive and interactive work environment.
        </p>
      </Col>
    </Row>
  );
}

export default Experience;
