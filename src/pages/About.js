import React from "react"
// import { Link } from "react-router-dom"

// IMPORT COMPONENTS
import AboutHero from "../components/About-Hero"
import AboutBelowFold from "../components/About-Below-Fold"
import Navigation from "../components/Navigation"

function About() {


  return (
    <div className="fade-in page" style={{ display: 0 }}>
      <div className="forest-gradient pb-3">

        <AboutHero />
        <AboutBelowFold />
      </div>
    </div>

  )
}

export default About;