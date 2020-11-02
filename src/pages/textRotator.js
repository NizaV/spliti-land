import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundSlider from 'gatsby-image-background-slider'
import '../styles/index.css'

export const TextRotator = () => {
  return <>
  
  <BackgroundSlider 
     query={useStaticQuery(graphql`
      query {
        backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
          nodes {
            relativePath
            childImageSharp {
              fluid (maxWidth: 4000, quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `)}
    initDelay={1} // delay before the first transition ( if left at 0, the first image will be skipped initially)
    transition={2} // transition duration between images
    duration={2} // how long an image is shown
    // specify images to include (and their order) according to `relativePath`
    // images={["spliti-app-icon.png", "spliti-app-icon.png", "spliti-app-icon.png", "spliti-app-icon.png", "spliti-app-icon.png"]} 

    // pass down standard element props
    style={{
      // transform: "rotate(-2deg) scale(.9)",
      display: "none",
    }}
    >
      {/* Captions in sync with background images*/}
    <div className="text-rotator">{""}</div>
    <div className="text-rotator">{"UTILITIES"}</div>
    <div className="text-rotator">{"PHONE"}</div>
    <div className="text-rotator">{"NETFLIX"}</div>
    <div className="text-rotator">{"HULU"}</div>
    <div className="text-rotator">{"RENT"}</div>
    <div className="text-rotator">{"FOOD"}</div>
    <div className="text-rotator">{"DRINKS"}</div>
    <div className="text-rotator">{"TRIPS"}</div>
    <div className="text-rotator">{"FLIGHTS"}</div>
    <div className="text-rotator">{"MOVIES"}</div>
  </BackgroundSlider>
  
  </>
}