import React from "react"
import { Link } from "gatsby"
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/examples">examples</Link>
        </li>
        <li>
          <Link to="/images">images</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
