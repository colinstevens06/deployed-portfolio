import React from "react"
import { Link } from "react-router-dom"

export default function HomeCards() {
  return (
    <div>
      <div className="container mb-5 later-fade icon-grid">
        <div className="row">
          <div className="col">
            <div className="card-deck">
              <div className="card card-home text-center nav-fade" data-aos="fade-left" data-url="projects.html">
                <Link to="/projects">
                  <i className="fas fa-laptop-code"></i>
                  <div className="card-title">Development Projects</div>
                </Link>
              </div>

              <div className="card card-home text-center" data-aos="fade-right">
                <a href="./assets/PDFs/colin-stevens-resume.pdf" target="_blank">
                  <i className="far fa-keyboard"></i>
                  <div className="card-title">Resume</div>
                </a>
              </div>

              <div className="card card-home text-center nav-fade" data-aos="fade-left" data-url="about.html">
                <Link to="/about">
                  <i className="fas fa-user"></i>
                  <div className="card-title">About Me</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card-deck two-pack">
              <div className="card text-center card-home" data-aos="fade-right">
                <a href="https://github.com/colinstevens06" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                  <div className="card-title">GitHub Profile</div>
                </a>
              </div>
              <div className="card text-center card-home" data-aos="fade-left">
                <a href="https://www.linkedin.com/in/colin-stevens/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                  <div className="card-title">LinkedIn Profile</div>
                </a>
              </div>
              <div className="card nav-fade card-home"></div>

            </div>
          </div>
        </div>
      </div>

    </div>



  )
}