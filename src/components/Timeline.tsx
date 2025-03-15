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
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
              width: "55%",
              transform: "translateX(-20%)",
            }}
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
                2024.10 - present
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
              • Archetected and optimized event-driven backend systems capable
              of handling large-scale event data in real-time by integrating
              multiple external platforms, including Ontraport CRM and Google
              APIs, to automate workflows and synchornize user data
            </p>
            <p>
              • Implemented CI/CD pipelines using GitHub Actions, Docker, and
              Amazon ECR and ECS, automating the build, test, and deployment of
              back-end services for scalable and containerized production
              environments, reducing deployment time by 50%
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="2020 - 2022"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
              width: "55%",
              transform: "translateX(+20%)",
            }}
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
              • Developed and integrated a Stripe payment system into a REST API
              and front-end using React-Redux, Stripe API, and Node.js to
              streamline payment process, enabling secure, real-time payments
              and improving the company’s monetization
            </p>
            <p>
              • Improved content generation using Retrieval-Augmented Generation
              (RAG) for internal and external data, leveraging Python,
              TensorFlow, and NLP models to enhance output accuracy while
              optimizing retrieval strategies and prompt engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="2021 - 2021"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
              width: "55%",
              transform: "translateX(-20%)",
            }}
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
              • Collaborated on improving the efficiency and reducing the false
              positive rate of Anti-Money Laundering (AML) and Counter-Terrorist
              Financing systems using Message Passing Neural Networks (MPNNs) on
              heterogeneous graphs
            </p>
            <p>
              • Integrated data from SZSE, HKEX, and internal sources, utilizing
              Neo4j for graph management; Employed node classification and link
              prediction, boosting detection accuracy by 12% and significantly
              enhancing financial security
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="2020 - 2020"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
              width: "55%",
              transform: "translateX(+20%)",
            }}
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
              • Engineered a secure backend server in TypeScript, hosted on AWS
              using S3, EC2, and RDS for PostgreSQL management with Sequelize
              ORM, providing public access to private markets and ensuring
              secure data storage and access, reducing system downtime by 15%
              and enhanced data integrity, enabling more reliable financial
              analytics for the company
            </p>
            <p>
              • Designed and implemented RESTful APIs using Node.js and Express
              to streamline data flow between the backend and frontend systems,
              improving data retrieval efficiency by 25%, enhancing the deliver
              of real-time financial insights the clients
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
