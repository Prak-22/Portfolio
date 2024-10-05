import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LandingPage from "../../Assets/Projects/LandingPage.png";
import myGoals from "../../Assets/Projects/myGoals.jpeg";
import TechHub from "../../Assets/Projects/TechHub.jpeg";
import TripVisor from "../../Assets/Projects/TripVisor.jpeg";
import Portfolio from "../../Assets/Projects/Portfolio.png"

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
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={TechHub}
                            isBlog={false}
                            title="TechHub"
                            description="Platform for Technology QA: Enables users to ask and answer questions related to various technologies Facilitates
                            user interaction by allowing comments and voting on different answers.
                            Robust Authentication and Authorization: Implements secure user authentication and authorization mechanisms
                            to ensure data integrity and user privacy.
                            Enhanced User Experience: Incorporates features such as dark mode toggle, custom video player, and detailed
                            login history (including OS, browser, IP, and device) to enhance user experience and engagement on the platform."
                            ghLink="https://github.com/Prak-22/TechHub"
                            demoLink="https://stackoverflow-inky-three.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={TripVisor}
                            isBlog={false}
                            title="TripVisor"
                            description="Developed and deployed a feature-rich web application, TripBooking,that empowers users to seamlessly plan and book their dream vacations. Implemented a user-friendly interface where users can select their preferred destinations travel dates and occupancy requirements allowing the application to suggest suitable hotels based on their choices. Employed authentication and authorization to secure user data and ensure a safe and private booking experience, and optimized user experience with lazy loading improving page loading times and overall performance"
                            ghLink="https://github.com/Prak-22/Travel_Booking"
                            demoLink="https://travel-site-frontend.onrender.com/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={myGoals}
                            isBlog={false}
                            title="MyGoals"
                            description="API made for fetching data(goals) based on user entry. It lets users add, update their daily goals. Proficiently
                            utilized body-parser middleware for handling JSON and URL-encoded data, prioritizing error-free operations.
                            Ensured efficient handling of asynchronous operations, such as connecting to the database and starting the server,
                            using async/await syntax.Exhibited the ability to handle various HTTP request methods, such as POST, GET,
                            DELETE, and PUT to handle goals."
                            ghLink="https://github.com/Prak-22/Goals-API"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Portfolio}
                            isBlog={false}
                            title="Portfolio"
                            description="A Portfolio Website made using React, Css and Javascript"
                            ghLink="https://github.com/Prak-22/Portfolio"
                            demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={LandingPage}
                            isBlog={false}
                            title="Landing Page"
                            description="A simple yet effective Landing Page made using HTML, CSS and Javascript"
                            ghLink="https://github.com/Prak-22/LandingPage"
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
