import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/project.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/project.png";
import chatify from "../../Assets/Projects/project.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/project.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Jcoles-Canvas"
              description="A custom web-based design editor for creating posters and templates. Supports real-time shape and text manipulation using Fabric.js, with auto-save and project persistence via serverless APIs built with Hono and Drizzle ORM. Powered by Neon PostgreSQL and React Query, it also offers template duplication, project export, and a responsive UI for a smooth editing experience."
              ghLink="https://github.com/Utkarsha-Pandey/jcoles-canvas.git"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Expense Tracker"
              description="A full-stack personal finance tracker for logging, categorizing, and visualizing expenses. Features secure JWT-based authentication, protected API routes, and real-time transaction updates using Socket.IO. Supports file uploads via Multer and provides dynamic charts and tables for clear financial insights."
              ghLink="https://github.com/Utkarsha-Pandey/bhujo.git"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="The Case Files"
              description="A modern blogging platform with JWT-based user management, rich blog creation (templates, formatting, image uploads), and interactive features like comments and search. Supports advanced customization through themes and layouts, and includes moderation tools for a safe content environment."
              ghLink="https://github.com/saurabh-develop/Case-Files.git"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FuelEU"
              description="A compliance platform implementing FuelEU Maritime rules with a hexagonal architecture. Includes a React dashboard for managing routes, GHG comparisons, compliance balance (CB), banking, and pooling. Backend services handle core domain logic, validations, and PostgreSQL persistence through clean ports-and-adapters design."
              ghLink="https://github.com/Utkarsha-Pandey/Varuna_assignment.git"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
