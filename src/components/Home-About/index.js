import React from "react"
import { Link } from "react-router-dom"

export default function HomeAbout() {
  return (
    <div className="orange-gradient">
      <div className="container">
        <div className="row">
          <div className="body-copy my-5" id="body-copy" data-aos="fade-up">
            <img src="./assets/images/colin-stevens-headshot.jpg" alt="Colin Stevens" className="rounded-circle" />
            <h2>Who is Colin Stevens?</h2>
            <p>
              I’m a full-stack web developer and storyteller whose
              experiences in web project management, journalism and customer
              service have shaped me into a detail-oriented, product-focused
              problem solver.
          </p>

            <p>
              I recently completed a full-stack development bootcamp
              at Johns Hopkins University. Over six months, we learned the MERN stack: MongoDB, ExperessJS, ReactJS and NodeJS. We completed <Link to="/projects" className="body-link">new projects</Link> each week, incrementally building on concepts which all pointed to ReactJS and the MERN stack.
          </p>

            <p>
              While learning web development in the bootcamp, I worked full time managing content
              and search engine optimization on a local hospital’s
              consumer-facing website. My time in this role taught me about crafting a smooth user experience and how to
              develop content that ranks high in search engines. My degree
              and subsequent career in journalism, specifically working at a
              daily newspaper, shaped my ability to work in deadline-driven
              environments with a focus on detail. The combination of these
              experiences gave me a strong foundation for my future as a web
              developer and furthering my career in web marketing.
          </p>
            <p>
              In my free time, I play drums in a cover band. Part of my band
              duties is promoting upcoming shows and managing our brand. You
            can see examples of my work on <a href="https://www.instagram.com/liesfromgranny" className="body-link"
                target="_blank" rel="noopener noreferrer">the band's Instagram account</a> and on&nbsp;
            <a href="http://liesfromgranny.com" className="body-link" target="_blank" rel="noopener noreferrer">our website</a>, which I designed.
          </p>
            <p>
              I also enjoy photography. I took the photos on this page -
              photos of me required a timer - and my photos can be
            viewed on <a href="https://www.instagram.com/drumminup/" target="_blank" rel="noopener noreferrer" className="body-link">my Instagram
              account</a>. Read <Link to="/about" className="body-link">more about me</Link>.
          </p>
          </div>
        </div>
      </div>
      {/* <!-- ============== END OF THE BODY COPY============== --> */}
    </div>

  )

}
