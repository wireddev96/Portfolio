import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import linkData from "./data";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center gy-3">
        <Col md={5} className="footer-copyright text-md-start">
          <h3>
            © {year} Jakob Rössner · Senior frontend engineer
          </h3>
        </Col>
        <Col md={3} className="footer-copyright text-md-center">
          <h3>React · TypeScript · product UI</h3>
        </Col>
        <Col md={4} className="footer-body text-md-end">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={linkData.github}
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={linkData.linkedIn}
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={linkData.mail}
                className="footer-icon"
                aria-label="Email"
              >
                <FaMailBulk />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
