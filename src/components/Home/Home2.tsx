import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import myImg from "../../Assets/avatar4.webp";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import linkData from "../data";
// @ts-ignore
import popup_discord_png from "../../Assets/discord-popup.png";
import Button from "react-bootstrap/Button";

function Home2() {
  const [showDiscordPopup, setShowDiscordPopup] = React.useState(false);
  useEffect(() => {
    const contentElements = document.querySelectorAll(".content");

    contentElements.forEach((element) => {
      element.classList.toggle("blur", showDiscordPopup);
    });

    return () => {
      contentElements.forEach((element) => {
        element.classList.remove("blur");
      });
    };
  }, [showDiscordPopup]);

  return (
    <>
      {showDiscordPopup && (
        <div className="discord-popup">
          <img
            src={popup_discord_png}
            alt="Discord Info"
            className="popup-discord-png"
          />
          <Button
            variant="primary"
            onClick={() => {
              setShowDiscordPopup(false);
            }}
          >
            Close
          </Button>
        </div>
      )}
      <Container fluid className="home-about-section content" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <Tilt className="myAvatar">
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="Portrait of Jakob Rössner"
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
                  <div
                    className="icon-colour home-social-icons"
                    role="button"
                    tabIndex={0}
                    aria-label="Discord"
                    onClick={(event) => {
                      event.preventDefault();
                      setShowDiscordPopup(true);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setShowDiscordPopup(true);
                      }
                    }}
                  >
                    <FaDiscord />
                  </div>
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
