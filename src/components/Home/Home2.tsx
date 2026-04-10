import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import myImg from "../../Assets/avatar4.webp";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import linkData from "../data";

function Home2() {
  return (
    <>
      <Container fluid className="home-about-section content" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <Tilt className="myAvatar">
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="Portrait of Jordan Lopez"
                  width={600}
                  height={600}
                />
              </Tilt>
              <br />
              <br />
              <h2 className="negative-letter-spacing section-kicker">Connect</h2>
              <p className="connect-sub">
                Open to senior frontend roles, product teams, and UI-heavy
                collaborations — especially where craft and metrics both matter.
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href={linkData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href={linkData.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href={linkData.mail}
                    className="icon-colour home-social-icons"
                    aria-label="Email"
                  >
                    <FaMailBulk />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home2;
