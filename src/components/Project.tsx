import React from "react";
import golang from "../assets/images/golang.jpg";
import smileme from "../assets/images/SmileMe.png";
import iot from "../assets/images/iot.jpg";
import smartparking from "../assets/images/smartparking.jpg";
import deepstuq from "../assets/images/deepstuq.png";
import bustub from "../assets/images/bustub.png";
import networking from "../assets/images/networking.jpg";
import platformer from "../assets/images/platformer.jpg";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          {/* <Link to="/project-page/1"> */}
          <img src={golang} className="zoom" alt="thumbnail" width="100%" />
          <h2>Distributed Systems Project</h2>
          {/* </Link> */}

          <p>
            Built a custom MapReduce framework, the Chandy-Lamport snapshot
            algorithm, and the Raft consensus protocol to enhance fault
            tolerance and concurrency in distributed systems
          </p>
        </div>
        <div className="project">
          {/* <Link to="/project-page/2"> */}
          <img src={smileme} className="zoom" alt="thumbnail" width="100%" />
          <h2>SmileMe</h2>
          {/* </Link> */}

          <p>
            Developed real-time facial emotion detection models using CNNs and
            LSTMs, integrated into an interactive React and Node.js-based
            website, boosting user engagement by 50%
          </p>
        </div>
        <div className="project">
          {/* <Link to="/project-page/3"> */}
          <img
            src={smartparking}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />
          <h2>
            Smart Parking System: IoT Technology and Energy Efficiency Analysis
          </h2>
          {/* </Link> */}

          <p>
            Researched IoT-based Smart Parking Systems, analyzing LoRaWAN and
            NB-IoT technologies to optimize energy efficiency and scalability,
            while proposing data models for real-time updates and extended
            sensor battery life
          </p>
        </div>
        <div className="project">
          {/* <Link to="/project-page/4"> */}
          <img src={iot} className="zoom" alt="thumbnail" width="100%" />
          <h2>Advanced IoT Communication Systems</h2>
          {/* </Link> */}

          <p>
            Developed IoT applications using BLE and WiFi technologies,
            implementing communication protocols, traffic scanning, and
            MQTT-based messaging on nRF52840DK and Heltec WiFi LoRa 32 boards,
            with a focus on low-power, long-distance data transmission over LoRa
          </p>
        </div>
        <div className="project">
          {/* <Link to="/project-page/5"> */}
          <img src={deepstuq} className="zoom" alt="thumbnail" width="100%" />
          <h2>DeepSTUQ-Conformal Model For Traffic Flow Prediction</h2>
          {/* </Link> */}

          <p>
            Developed the DeepSTUQ-Conformal model, integrating Conformalized
            Graph Neural Networks and Bayesian optimization to enhance
            uncertainty quantification for spatio-temporal traffic data.
            Achieved a balance of computational efficiency and predictive
            performance on the PEMS traffic dataset
          </p>
        </div>
        <div className="project">
          {/* <Link to="/project-page/6"> */}
          <img src={bustub} className="zoom" alt="thumbnail" width="100%" />
          <h2>BusTub Relational Database Management System</h2>
          {/* </Link> */}

          <p>
            Optimized BusTub's database system by implementing an LRU-K buffer
            pool, extendible hashing with concurrency control, and advanced
            query execution plans, reducing latency and enhancing transaction
            concurrency for high-traffic workloads
          </p>
        </div>
        <div className="project">
          {/* <Link to="/project-page/7"> */}
          <img src={networking} className="zoom" alt="thumbnail" width="100%" />
          <h2>Network Protocols and Security Analysis Tools Development</h2>
          {/* </Link> */}

          <p>
            Developed multi-threaded TCP/UDP communication applications,
            simulated OSPF and BGP routing protocols, and built a Python-based
            network security auditing tool for domain probing, security
            assessment, and performance analysis
          </p>
        </div>
        <div className="project">
          {/* <Link to="/project-page/8"> */}
          <img src={platformer} className="zoom" alt="thumbnail" width="100%" />
          <h2>Unity Game Development</h2>
          {/* </Link> */}

          <p>
            Developed two Unity games, Squarebound Adventures, a physics-based
            platformer with custom levels and animations, and Galaxian, a
            retro-inspired space shooter with enemy spawning, power-ups, and
            dynamic difficulty balancing for immersive gameplay
          </p>
        </div>
        {/* <div className="project">
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <h2>High Speed Chase</h2>
          </a>
          <p>
            Designed, developed, and launched a 3D multiplayer racing game with
            C# and Unity. This is available on Itch.io for gamers worldwide to
            enjoy.
          </p>
        </div>
        <div className="project">
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Astro Raiders</h2>
          </a>
          <p>
            Developed and released a 2D shooting game with C# and Unity. This
            project is hosted on the Itch.io public marketplace.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Datum: Integrated Learning Platform</h2>
          </a>
          <p>
            This is an online educational platform that provides high-quality,
            data science-focused learning resources in the Japanese language. I
            created the entire platform from scratch using Ruby on Rails.
          </p>
        </div>
        <div className="project">
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <h2>WeManage: Real Estate Asset Management</h2>
          </a>
          <p>
            This mobile application allows realtors in Japan to securely manage
            their property information and view future income predictions. This
            app is built with Ruby on Rails and JavaScript.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <h2>COVID-19 Case Management</h2>
          </a>
          <p>
            Built official charts for COVID/vaccination tracking for an
            educational institution using JavaScript and the Google Sheets API
            v4. The dashboard served the university's leadership in their
            decision-making processes.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/yujisatojr/multi-reg-analysis"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/yujisatojr/multi-reg-analysis"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Multiple Regression Property Analysis</h2>
          </a>
          <p>
            Analyzed the real estate market in Japan and predicted property
            prices by implementing statistical methods such as OLS and
            multi-regression analysis. This project leveraged Python and various
            libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.
          </p>
        </div>
        <div className="project">
          <a
            href="https://holokai.byuh.edu/programs-of-study"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://holokai.byuh.edu/programs-of-study"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Programs of Study</h2>
          </a>
          <p>
            Designed and developed a custom component for a CMS-based platform
            (e.g., 'Brightspot') using Java, Handlebars, and LESS. University
            students can find their majors of interest through this module.
          </p>
        </div>
        <div className="project">
          <a
            href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Transfer Evaluation Matrix</h2>
          </a>
          <p>
            Created an interactive CSV table generator with Java, Handlebars,
            and LESS. This project helps transfer students to quickly identify
            eligible credits.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/yujisatojr/submeowrine"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/yujisatojr/submeowrine"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Submeowrine</h2>
          </a>
          <p>
            Developed and released an Android mobile application using Java and
            Android Studio that runs a 2D shooting game.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
