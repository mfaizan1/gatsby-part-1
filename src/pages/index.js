import React from "react"
import { LayoutWrapper } from "../components"
import { Button } from "../components/Button"

export default function Home() {
  return (
    <LayoutWrapper>
      <>
        <h1>Hello world!</h1>

        <Button>Styled button</Button>
      </>
    </LayoutWrapper>
  )
}
