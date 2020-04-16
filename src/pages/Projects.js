import React from "react"
import { useEffect } from "react"
// import { Link } from "react-router-dom"

// IMPORT COMPONENTS
import ProjectsCardsWrapper from "../components/Projects-Cards-Wrapper"




function Projects() {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)

    }, 400)
  });

  return (
    <div className="fade-in page" style={{ display: 0 }}>
      <div className="grey-gradient">

        <ProjectsCardsWrapper />

      </div>

    </div>

  )
}

export default Projects;