import React from "react"
// import { Link } from "react-router-dom"

// IMPORT COMPONENTS
import HomeHero from "../components/Home-Hero"
import HomeCards from "../components/Home-Cards"
import HomeAbout from "../components/Home-About"


function Home() {


  return (
    <div className="fade-in" style={{ display: 0 }}>

      <HomeHero />
      <HomeCards />
      <HomeAbout />

    </div>

  )
}

export default Home;