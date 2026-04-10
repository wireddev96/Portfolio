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
                  <span className="main-name">Jordan Lopez</span>
                </h1>
              </div>
              <p className="hero-lead">
              Senior Software Engineer with 8+ years of experience building full-stack SaaS applications using React, TypeScript,
              GraphQL, Node.js, and scalable APIs. Proven track record shipping collaborative, content-rich products with a strong
              focus on user experience, performance optimization, automated testing, and end-to-end feature ownership.
              </p>
              <ul className="hero-stack" aria-label="Core technologies">
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS / SCSS</li>
                <li>Web platform</li>
                <li>Vue</li>
                <li>Angular</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>GraphQL</li>
                <li>REST APIs</li>
                <li>Java</li>
                <li>Python</li>
                <li>C#</li>
                <li>PHP</li>
                <li>AWS</li>
                <li>Docker</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Elasticsearch</li>
                <li>RabbitMQ</li>
                <li>GitHub</li>
                <li>Jenkins</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Terraform</li>
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
