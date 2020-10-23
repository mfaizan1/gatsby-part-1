import React from "react"
import { LayoutWrapper } from "../components"
import styles from "./blog.module.css"

export default function blog() {
  return (
    <LayoutWrapper>
      <div>This is blog page</div>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor
        vel massa non mattis. Nullam eu enim quis turpis blandit vehicula sed in
        ante. Nunc et leo nibh. Nulla eros enim, gravida sed hendrerit eu,
        rhoncus in orci. Nulla euismod posuere accumsan. Donec fringilla nulla
        in urna scelerisque, gravida luctus velit volutpat. Sed at commodo
        metus. Cras lobortis non nunc in pulvinar. Vivamus finibus molestie
        elementum. Nunc tincidunt dolor at tincidunt sollicitudin. Sed risus
        nulla, rhoncus eu mauris ac, tempus mollis mi.
      </p>
    </LayoutWrapper>
  )
}
