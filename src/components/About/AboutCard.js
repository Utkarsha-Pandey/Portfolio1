import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Utkarsha Pandey</span>{" "}
            from <span className="purple">Uttrakhand, India</span>.
            <br />
            {/* I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Juspay</span>. */}
            <br />I am a Final Year student pursuing {" "}
            <span className="purple">B.Tech</span> from{" "}
            <span className="purple">MNNIT Allahabad</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Athletics 🏅
            </li>
            <li className="about-activity">
              <ImPointRight /> Art and Crafting 🎨
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Utkarsha</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
