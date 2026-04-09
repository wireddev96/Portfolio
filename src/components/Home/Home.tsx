import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import homeLogo from "../../Assets/home-main.svg";
import { Link } from "react-router-dom";
import Home2 from "./Home2";
import AboutSummary from "./AboutSummary";
import ProjectsSummary from "./ProjectsSummary";
import Type from "./Type";
import linkData from "../data";

function Home() {
  return (
    <section>
      <Container fluid className="home-section content" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} className="home-header">
              <p className="home-eyebrow">
                senior_frontend_engineer — interfaces · systems · performance
              </p>
              <div className="negative-letter-spacing">
                <h1 className="heading">Hi, I&apos;m</h1>
                <h1 className="heading-name">
                  <span className="main-name">Jakob Rössner</span>
                </h1>
              </div>
              <p className="hero-lead">
                I lead and ship product UI on the web: component architecture,
                design systems, performance budgets, and accessible experiences
                users can trust — from first paint to edge cases.
              </p>
              <ul className="hero-stack" aria-label="Core technologies">
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS / SCSS</li>
                <li>Web platform</li>
              </ul>
              <div className="hero-type-row">
                <span className="hero-type-label">Focus areas</span>
                <Type />
              </div>
              <div className="hero-cta">
                <Link to="/projects" className="btn-hero btn-hero-primary">
                  Case studies &amp; work
                </Link>
                <a
                  href={`${linkData.github}Portfolio`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero btn-hero-ghost"
                >
                  This site on GitHub
                </a>
              </div>
            </Col>

            <Col lg={5} className="home-logo">
              <img
                src={homeLogo}
                alt=""
                className="img-fluid hero-illustration"
                width={480}
                height={400}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <AboutSummary />
      <ProjectsSummary />
    </section>
  );
}

export default Home;
