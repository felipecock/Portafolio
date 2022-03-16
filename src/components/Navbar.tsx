import React from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav id="navbar" className={ styles.navbar }>
      <a href="#welcome-link">
        Sobre Mí
      </a>
      <a href="#projects-link">
        Proyectos
      </a>
      <a href="#contact-link">
        Contacto
      </a>
    </nav>
  )
}

