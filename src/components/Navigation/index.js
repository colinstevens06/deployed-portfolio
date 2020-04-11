import React from "react"
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand d-flex flex-row align-items-center">
          <h1 className="logo">Colin Stevens</h1>
        </div>

        <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon custom-toggler"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="navbar-nav ml-auto">
            <a className="nav-btn"
              href="/">Home</a>
            <Link className="nav-btn"
              to="/projects">Projects</Link>
            <Link className="nav-btn"
              to="/about">About</Link>
            <a className="nav-btn" href="./assets/PDFs/colin-stevens-resume.pdf" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  )
}