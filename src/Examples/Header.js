import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const grapqlQuery = graphql`
  {
    site {
      siteMetadata {
        author
        data
        description
        title
        person {
          fisrtName
          lastName
        }
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(grapqlQuery)
  return (
    <>
      <h4>{data.site.siteMetadata.title}</h4>
      <h4>{data.site.siteMetadata.person.fisrtName}</h4>
      <h4>{data.site.siteMetadata.person.lastName}</h4>
    </>
  )
}

export default Header
