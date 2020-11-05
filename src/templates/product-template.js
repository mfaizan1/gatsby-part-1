import React from "react"
import { graphql, Link } from "gatsby"
import { LayoutWrapper } from "../components"
import styles from "./product-template.module.css"
import Image from "gatsby-image"
const productTemplate = props => {
  console.log(props)
  const {
    data: {
      contentfulProduct: {
        title,
        price,
        description: { description },
        image: { fixed },
      },
    },
  } = props
  return (
    <LayoutWrapper>
      <div className={styles.productPage}>
        <Link to="/products">Go back to products</Link>
        <h1>Single product</h1>
      </div>
      <section className={styles.product}>
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>{price}</h3>
          <p>{description}</p>
        </article>
      </section>
    </LayoutWrapper>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      price
      description {
        description
      }
      slug
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
export default productTemplate
