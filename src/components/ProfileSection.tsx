import React from "react"
import styles from "./ProfileSection.module.css"

export const ProfileSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <div id="Bienvenido" className={styles.bienvenido}>
        <div id="header-img" className={styles.headerImg}>
          <img id="Foto" className={styles.foto} src={"./images/profile-picture.jpeg"} alt="Foto" />
        </div>
        <h1>Felipe Cock</h1>
        <p className={styles.subtitle}>
          <strong>Desarrollador Front-End</strong>
        </p>
        <div className={styles.buttonsContainer}>
          <a
            className={`button ${styles.largeButton}`}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/felipecock/">
            Perfil de GitHub
          </a>
          <a
            className={`button ${styles.largeButton}`}
            target="_blank"
            rel="noreferrer"
            href="https://www.freecodecamp.org/felipecock">
            Portafolio en freeCodeCamp.org
          </a>
        </div>
      </div>
    </section>
  )
}
