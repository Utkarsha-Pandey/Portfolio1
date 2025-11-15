import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myimg.png";
import codingImg from "../../Assets/coding.png";
import Aboutcard from "../About/AboutCard";
import Techstack from "../About/Techstack";
import laptopImg from "../../Assets/about2.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer who loves transforming ideas into
              reliable, scalable products. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, C++ and Node.js{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, {" "}
                </b>
              </i>
              and Data Structures and Algorithms.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{ display: "flex", alignItems: "flex-start", paddingTop: "0" }}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginTop: "180px" }}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "white" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingTop: "30px", paddingBottom: "50px" }} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Row style={{ paddingTop: "30px", marginTop: "180px" }}>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Days I <span className="purple">Code</span>
            </h1>
          </Col>
        </Row>
        <Row style={{ paddingTop: "20px", paddingBottom: "30px" }}>
          <Col md={12} style={{ textAlign: "center" }}>
            <img src={codingImg} alt="coding" className="img-fluid" style={{ maxHeight: "400px", width: "100%" }} />
          </Col>
        </Row>

        <Row style={{ paddingTop: "30px", paddingBottom: "50px", marginTop: "180px" }}>
          <Col md={12}>
            <h1 className="project-heading">Technical <strong className="purple">Skills </strong></h1>
            <Techstack />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
