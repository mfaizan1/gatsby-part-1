import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      Hello world!
      <div>
        <Link href="/blog">blog page</Link>
      </div>
      <a href="https://www.gatsbyjs.org">gatsby page</a>
    </div>
  )
}
