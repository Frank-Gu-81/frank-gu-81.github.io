import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import {
  faDatabase,
  faServer,
  faBrain,
  faCogs,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsProgramming = [
  "Python",
  "C++",
  "C",
  "C#",
  "Java",
  "JavaScript",
  "SQL",
  "Go",
  "R",
  "TypeScript",
  "Solidity",
];

const labelsWebDevelopment = [
  "React",
  "Node.js",
  "Express",
  "TypeScript",
  "CSS3",
  "SASS",
  "Jest",
  "Sequelize",
];

const labelsCloudDevOps = [
  "AWS (EC2, ECS, Lambda, S3, ECR)",
  "Docker",
  "GitHub Actions",
  "CI/CD",
  "Linux",
  "Serverless",
];

const labelsMachineLearning = [
  "TensorFlow",
  "PyTorch",
  "Keras",
  "Hugging Face",
  "Graph Neural Networks",
  "R",
];

const labelsDatabase = [
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "BigQuery",
  "Neo4j",
  "Firebase",
  "DynamoDB",
];

const labelsDeveloperTools = [
  "Visual Studio Code",
  "PyCharm",
  "Jupyter Notebook",
  "Postman",
  "Vim",
  "npm",
];

function Expertise() {
  return (
    // <div className="container" id="expertise">
    <div className="skills-container">
      <h1>Expertise</h1>
      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="skill">
          <FontAwesomeIcon icon={faCogs} size="3x" />
          <h3>Programming Languages</h3>
          <p>
            Proficient in multiple programming languages with strong expertise
            in Python, JavaScript, and C++, covering systems programming,
            backend development, and high-performance computing.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Languages:</span>
            {labelsProgramming.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        {/* Full Stack Web Development */}
        <div className="skill">
          <FontAwesomeIcon icon={faReact} size="3x" />
          <h3>Full Stack Web Development</h3>
          <p>
            Designed and built scalable web applications, integrating modern
            front-end frameworks with secure and high-performance backend
            services.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {labelsWebDevelopment.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        {/* Cloud Computing & DevOps */}
        <div className="skill">
          <FontAwesomeIcon icon={faCloud} size="3x" />
          <h3>Cloud Computing & DevOps</h3>
          <p>
            Implemented and automated cloud-based infrastructure, CI/CD
            pipelines, and containerized deployments for highly available and
            scalable systems.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {labelsCloudDevOps.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        {/* AI & Machine Learning */}
        <div className="skill">
          <FontAwesomeIcon icon={faBrain} size="3x" />
          <h3>AI & Machine Learning</h3>
          <p>
            Experienced in deep learning and retrieval-augmented generation
            (RAG) with expertise in TensorFlow, PyTorch, and LLM-based
            applications.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {labelsMachineLearning.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        {/* Databases & Data Engineering */}
        <div className="skill">
          <FontAwesomeIcon icon={faDatabase} size="3x" />
          <h3>Databases & Data Engineering</h3>
          <p>
            Designed and optimized relational and NoSQL databases for
            high-performance applications, integrating secure data storage
            solutions.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {labelsDatabase.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div className="skill">
          <FontAwesomeIcon icon={faServer} size="3x" />
          <h3>Developer Tools & Debugging</h3>
          <p>
            Proficient in debugging and performance tuning using
            industry-standard tools for memory analysis, network tracing, and
            profiling.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tools:</span>
            {labelsDeveloperTools.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Expertise;
