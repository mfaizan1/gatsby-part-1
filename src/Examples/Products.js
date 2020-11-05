import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image1.jpg"
import Image from "gatsby-image"
import "./Images.css"
const gql = graphql`
  {
    fixed: file(relativePath: { eq: "image5.png" }) {
      childImageSharp {
        fixed(width: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Images() {
  const data = useStaticQuery(gql)
  const {
    fixed: {
      childImageSharp: { fixed: fixedSrc },
    },
    fluid: {
      childImageSharp: { fluid: fluidSrc },
    },
  } = data
  console.log(fixedSrc, fluidSrc)
  return (
    <section className="images-container">
      <article className="single-image">
        <h3>Basic image</h3>
        <img src={img} width="100%" alt="test" />
      </article>
      <article className="single-image">
        <h3>fixed-blur image</h3>
        <Image fixed={fixedSrc} />
      </article>
      <article className="single-image">
        <h3>fluid image</h3>
        <Image fluid={fluidSrc} />
      </article>
    </section>
  )
}
