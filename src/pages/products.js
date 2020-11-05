import React from "react"
import { graphql } from "gatsby"
import { LayoutWrapper } from "../components"
import styles from "./products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(products)
  return (
    <LayoutWrapper>
      <section className={styles.page}>
        <h1>Hello from products</h1>
      </section>
      <section className={styles.products}>
        {products.map(elem => {
          return (
            <article key={elem.id}>
              <Image fluid={elem.image.fluid} />
              <h3>
                {elem.title}
                <span>{elem.price}</span>
              </h3>
              <Link to={`/products/${elem.slug}`}>More details</Link>
            </article>
          )
        })}
      </section>
    </LayoutWrapper>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        description {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default Products
