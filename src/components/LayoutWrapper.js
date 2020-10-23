import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
function LayoutWrapper({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default LayoutWrapper
