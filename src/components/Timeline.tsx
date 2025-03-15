import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            // date="2024.10 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="individual-work-row">
              <h3 className="vertical-timeline-element-title">
                <a
                  className="company-link"
                  href="https://www.brite.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  BriteCo, Inc
                </a>
              </h3>
              <h3 className="vertical-timeline-element-title">
                2024.10 - 2025.03
              </h3>
            </div>
            <div className="individual-work-row">
              <h5 className="vertical-timeline-element-title job-title">
                Software Development Intern
              </h5>
              <h5 className="vertical-timeline-element-title job-title">
                Evanston, IL
              </h5>
            </div>
            {/* <h4 className="vertical-timeline-element-subtitle">Evanston, IL</h4> */}
            <p>
              • Engineered event-driven backend systems, integrating Ontraport
              CRM & Google APIs for real-time data synchronization
            </p>
            <p>
              • Optimized asynchronous database queries, cutting execution time
              by 38.5% via connection pooling & query restructuring
            </p>
            <p>
              • Automated CI/CD pipelines with GitHub Actions, Docker, and AWS
              ECS, reducing deployment time by 50%
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="2020 - 2022"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="individual-work-row">
              <h3 className="vertical-timeline-element-title">
                <a
                  className="company-link"
                  href="https://www.atlasnova.ai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AtlasNova AI
                </a>
              </h3>
              <h3 className="vertical-timeline-element-title">
                2024.10 - 2025.01
              </h3>
            </div>
            <div className="individual-work-row">
              <h5 className="vertical-timeline-element-title job-title">
                Software Development Intern
              </h5>
              <h5 className="vertical-timeline-element-title job-title">
                Remote
              </h5>
            </div>
            {/* <h4 className="vertical-timeline-element-subtitle">Evanston, IL</h4> */}
            <p>
              • Enhanced a RAG pipeline with Python & TensorFlow, reducing
              hallucination rates & enhancing AI-driven market analysis
            </p>
            <p>
              • Integrated Stripe payments into a REST API & React-Redux
              frontend, enabling secure, real-time transactions
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="2021 - 2021"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="individual-work-row">
              <h3 className="vertical-timeline-element-title">
                <a
                  className="company-link"
                  href="https://yhjh.chinastock.com.cn/web/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  China Galaxy Securities
                </a>
              </h3>
              <h3 className="vertical-timeline-element-title">
                2024.06 - 2024.07
              </h3>
            </div>
            <div className="individual-work-row">
              <h5 className="vertical-timeline-element-title job-title">
                Software Development Intern
              </h5>
              <h5 className="vertical-timeline-element-title job-title">
                Beijing, China
              </h5>
            </div>
            {/* <h4 className="vertical-timeline-element-subtitle">Evanston, IL</h4> */}
            <p>
              • Optimized AML & Counter-Terrorist Financing systems using
              Message Passing Neural Networks, reducing false positives
            </p>
            <p>
              • Integrated SZSE, HKEX, & internal data with Neo4j graph
              database, improving detection accuracy by 12%
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="2020 - 2020"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="individual-work-row">
              <h3 className="vertical-timeline-element-title">
                <a
                  className="company-link"
                  href="https://ventureshares.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Venture Shares
                </a>
              </h3>
              <h3 className="vertical-timeline-element-title">
                2023.11 - 2024.03
              </h3>
            </div>
            <div className="individual-work-row">
              <h5 className="vertical-timeline-element-title job-title">
                Software Development Intern
              </h5>
              <h5 className="vertical-timeline-element-title job-title">
                Remote
              </h5>
            </div>
            {/* <h4 className="vertical-timeline-element-subtitle">Evanston, IL</h4> */}
            <p>
              • Built a scalable backend server with TypeScript, AWS (S3, EC2,
              RDS), & Sequelize ORM, reducing system downtime by 15%
            </p>
            <p>
              • Designed and optimized RESTful APIs with Node.js & Express,
              improving data retrieval by 25% for real-time market insights
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
