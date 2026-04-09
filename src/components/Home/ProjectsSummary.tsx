import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import previewProjects from "../../Assets/previewProjects.webp";
import Tilt from "react-parallax-tilt";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ImPointRight } from "react-icons/im";
import ResponsiveImage from "../ResponsiveImage";

function AboutSummary() {
  return (
    <Container
      fluid
      className="home-projects-summary-section content"
      id="projects-summary"
      data-aos="fade-left"
      data-aos-offset="150"
      data-aos-duration="1200"
    >
      <Container>
        <Row>
          <Col md={7} className="home-projects-summary-description">
            <h2 className="negative-letter-spacing summary-section-title">
              Selected <span className="purple">projects</span>
            </h2>
            <p className="home-about-summary-body">
              Interfaces, apps, and experiments — spanning{" "}
              <span className="purple">production UIs</span>, tooling, and{" "}
              <span className="purple">earlier game-adjacent</span> work that got
              me into programming.
            </p>
            <p className="home-about-summary-body projects-summary-highlights-intro">
              Highlights include:
            </p>
            <ul className="projects-summary-list basic-list">
              <li>
                <ImPointRight /> A tablet for elderly people
              </li>
              <li>
                <ImPointRight /> A weather app
              </li>
              <li>
                <ImPointRight /> A few Minecraft Mods
              </li>
            </ul>
            <p className="home-about-summary-body">
              In the case of the Minecraft Mods, they were my{" "}
              <span className="purple"> first projects</span> in relationship to
              programming after some small stuff I tried out with Scratch.
            </p>
            <Nav.Link as={Link} to="/projects" className="link">
              <AiOutlineFundProjectionScreen className="link-inline-icon" />
              See my projects
            </Nav.Link>
          </Col>
          <Col md={5} className="previewProjects">
            <Tilt>
              <ResponsiveImage
                src={previewProjects}
                className="img-fluid preview-image-rounded"
                alt="previewProjects"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutSummary;
