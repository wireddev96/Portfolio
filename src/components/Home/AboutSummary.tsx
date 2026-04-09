import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import previewAbout from "../../Assets/previewAbout2.webp";
import Tilt from "react-parallax-tilt";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import ResponsiveImage from "../ResponsiveImage";

function aboutSummary() {
  return (
    <Container
      fluid
      className="home-about-summary-section content"
      id="about-summary"
      data-aos="fade-right"
      data-aos-offset="150"
      data-aos-duration="1200"
    >
      <Container>
        <Row>
          <Col md={7} className="home-about-summary-description">
            <h2 className="negative-letter-spacing summary-section-title">
              About <span className="purple">the craft</span>
            </h2>
            <p className="home-about-summary-body">
              How I work across the frontend stack — from{" "}
              <span className="purple">UI architecture</span> and tooling to the
              habits that keep <span className="purple">shipping</span> sustainable.
            </p>
            <Nav.Link as={Link} to="/about" className="link">
              <AiOutlineUser
                style={{ marginBottom: "2px", marginRight: "7px" }}
              />
              Learn more about me
            </Nav.Link>
          </Col>
          <Col md={5} className="previewAbout">
            <Tilt>
              <ResponsiveImage
                src={previewAbout}
                className="img-fluid"
                alt="previewAbout"
                style={{ borderRadius: "20px" }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default aboutSummary;
