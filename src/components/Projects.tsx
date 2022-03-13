import React from "react"
import styles from "./Projects.module.css"
import ProjectTile, { ProjectTileProps } from "./ProjectTile"

const projectList: Array<ProjectTileProps> = [
  {
    title: "Página Biográfica en HTML5 y CSS",
    image:
      "https://assets.codepen.io/4896740/internal/screenshots/pens/zYqrrde.default.png?fit=cover&format=auto&ha=true&height=180&quality=75&v=2&width=320",
    description: "Página Tributo a San Ignacio de Loyola destacando los principales aspectos de su vida",
    link: "https://codepen.io/felipecock/full/zYqrrde",
  },
  {
    title: "Bitácora de Soluciones HTML5 y CSS",
    image:
      "https://assets.codepen.io/4896740/internal/screenshots/pens/vYGgbZP.default.png?fit=cover&format=auto&ha=true&height=180&quality=75&v=2&width=320",
    description: "Proyecto ASILOS: Archivo de Soluciones a Inconvenientes en Linux u Otro Software",
    link: "https://codepen.io/felipecock/details/vYGgbZP",
  },
  {
    title: "Página Web para GENCORE S.A.S.",
    image:
      "https://assets.codepen.io/4896740/internal/screenshots/pens/QWNEPOE.default.png?fit=cover&format=auto&ha=true&height=180&quality=75&v=2&width=320",
    description:
      "Sitio web en HTML5 y CSS puro, con diseño web adaptable e interfaz de usuario limpia, intuitiva y amigable",
    link: "https://codepen.io/felipecock/full/QWNEPOE",
  },
  {
    title: "Formulario Web Adaptativo",
    image:
      "https://assets.codepen.io/4896740/internal/screenshots/pens/zYqqqMr.default.png?fit=cover&format=auto&ha=true&height=180&quality=75&v=2&width=320",
    description:
      "Formulario en HTML5 y CSS con diseño web adaptativo, con opciones de accesibilidad, interfaz limpia, agradable e intuitiva",
    link: "https://codepen.io/felipecock/full/zYqqqMr",
  },
  {
    title: "Python Arduino Control GUI",
    image: "https://raw.githubusercontent.com/felipecock/Python-Arduino-Control-GUI/master/Screenshots/GUI_Monitor.png",
    description:
      "Software en Python2.7 y Arduino con interfaz de usuario para monitorear y controlar en tiempo real un Arduino UNO",
    link: "https://github.com/felipecock/Python-Arduino-Control-GUI",
  },
  {
    title: "Python",
    image:
      "https://raw.githubusercontent.com/felipecock/Python-Arduino-Control-GUI/master/Screenshots/GUI_Monitor_Social_16.9.png",
    description: "Proyecto",
    link: "",
  },
]

export const Projects = () => {
  console.log(projectList)

  const generateTiles = () =>
    projectList.map((project) => {
      console.log(project)

      return (
        <ProjectTile
          title={project.title}
          image={project.image}
          description={project.description}
          link={project.link}></ProjectTile>
      )
    })

  return (
    <section id="projects" className={styles.projects}>
      {generateTiles()}
    </section>
  )
}
