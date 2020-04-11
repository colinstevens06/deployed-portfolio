import React from "react"

export default function AboutBelowFold() {
  return (

    <main className="container mt-5">

      <div className="row" id="about-section">
        <div className="col-md-8 left-col">
          <div className="about-section">
            <h1>About Colin Stevens</h1>
            <p>
              I'm goal driven and always try to do the best at whatever I'm doing, no matter if it's in the workplace or in my hobbies.
            </p>
            <p>
              Art, the outdoors and creativity have had an important place in my life as long as I can remember. I'm looking forward to working on projects that pair my coding abilities with my creative skills.
            </p>
            <h2>Adventurer</h2>
            <p>
              I have always loved being outside and traveling. This past fall, my sister and I visited National Glacier Park in Montana and its beauty blew my mind. There's something about the calm of the mountains and removing myself from the hustle and bustle of city life. I can't wait for my next National Park trip.
      </p>
            <h2>Musician</h2>
            <p>
              I started a lawn-mowing business when I was in 6th grade. After a couple summers shaking down my neighbors, the money I saved went towards my drumset. I've been behind that kit ever since. I still play that same set today in my band, Lies From Granny.
      </p>

            <h2>Photographer</h2>
            <p>
              Photography is new to me. It's a challenge, but that's part of my attraction to it. I bought a Sony A6500 a couple years ago and have really enjoyed learning this new instrument. It helps me look at the world differently, but also gives me more reasons to be outside.
      </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <img src="./assets/images/about/colin-stevens-montana.jpg"
                alt="Colin Stevens with his sister in the Montana mountains" className="img-fluid img-about"
                data-small-img="image-1" />
            </div>
            <div className="col-md-12">
              <img src="./assets/images/about/colin-stevens-drumming.jpg"
                alt="Colin Stevens playing the drums with his band Lies From Granny" className="img-fluid img-about"
                data-small-img="image-2" />
            </div>
            <div className="col-md-12">
              <img src="./assets/images/about/colin-stevens-photographer.jpg"
                alt="Colin Stevens doing something in Baltimore? Doing something Else?"
                className="img-fluid img-about" data-small-img="image-3" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ========== END OF OPENING SCREEN ========== --> */}

      {/* <!-- ********* START OF FULL SIZE IMAGES ********* --> */}

      {/* <div className="row large-image" id="about-img-1" style={{ display: 0 }}>
        <div className="col p-0">
          <img src="./assets/images/about/large/colin-anna-glacier-national-Park.jpg"
            alt="Colin Stevens and his sister, Anna, at the top of a hike in Glacier Nation Park, Montana"
            className="img-fluid large-about-img" />
          <div className="icon-wrapper">
            <i className="far fa-times-circle"></i>
          </div>
        </div>
      </div>

      <div className="row large-image" id="about-img-2" style={{ display: 0 }}>
        <div className="col p-0">
          <img src="./assets/images/about/large/colin-stevens-drumming.jpg"
            alt="Colin Stevens drumming for his band, Lies From Granny" className="img-fluid large-about-img" />
          <div className="icon-wrapper">
            <i className="far fa-times-circle"></i>
          </div>
        </div>
      </div>

      <div className="row large-image" id="about-img-3" style={{ display: 0 }}>
        <div className="col p-0">
          <img src="./assets/images/about/large/colin-stevens-animal-photography.jpg"
            alt="Several birds in OC, taken by Colin Stevens" className="img-fluid large-about-img" />
          <div className="icon-wrapper">
            <i className="far fa-times-circle"></i>
          </div>
        </div>
      </div> */}
    </main>
  )
}