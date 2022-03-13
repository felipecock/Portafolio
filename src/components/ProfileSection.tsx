import React from "react"
import profilePicture from "../images/profile-picture.jpeg"
import styles from "./ProfileSection.module.css"

export const ProfileSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <div id="Bienvenido" className={styles.bienvenido}>
        <div id="header-img" className={styles.headerImg}>
          <img id="Foto" className={styles.foto} src={profilePicture} alt="Foto" />
        </div>
        <h1>Felipe Cock</h1>
        <p className={styles.subtitle}>
          <strong>Desarrollador Front-End</strong>
          <br />
          Ingeniero Mecatrónico
        </p>
        <a id="profile-link" className={`button ${styles.profileLink}`}  target="_blank" href="https://www.freecodecamp.org/felipecock">
          Portafolio en freeCodeCamp.org
        </a>
      </div>
    </section>
  )
}
