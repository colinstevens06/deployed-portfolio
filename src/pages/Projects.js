import React from "react"
// import { Link } from "react-router-dom"

// IMPORT COMPONENTS
import ProjectsCardsWrapper from "../components/Projects-Cards-Wrapper"
import Navigation from "../components/Navigation"



function Projects() {


  return (
    <div className="fade-in page" style={{ display: 0 }}>
      <div className="grey-gradient">

        <ProjectsCardsWrapper />

      </div>

    </div>

  )
}

export default Projects;