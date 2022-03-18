import React from "react"
import { ReactComponent as GithubIcon } from "../images/icons/github-icon.svg"
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer>
      <div className={styles.contactInfo}>
        <p className={styles.contactInfo}>
          <strong>Felipe Cock</strong>
        </p>
        <p className={styles.contactInfo}>Desarrollador Front-End</p>
        <p className={styles.contactInfo}>
          <a
            className={styles.contactInfo}
            href="mailto:felipecock@gmail.com?subject=Nuevo Proyecto&body=Buenos días Felipe.%0D%0AEstamos trabajando en un nuevo proyecto y queremos que seas parte de nuestro equipo de desarrollo.">
            felipecock@gmail.com
          </a>
        </p>
        <p className={styles.contactInfo}>Medellín, Colombia</p>
        <p className={styles.contactInfo}>
          <a className={styles.contactInfo} target="_blank" rel="noreferrer" href="https://github.com/felipecock">
            <GithubIcon /> GitHub @felipecock
          </a>
        </p>
        <p className="copyright">Copyright© 2022 Felipe Cock</p>
      </div>
    </footer>
  )
}
