import React from "react"
import styles from "./Projects.module.css"
import ProjectTile, { ProjectTileProps } from "./ProjectTile"

const projectList: Array<ProjectTileProps> = [
  {
    title: "Proyecto ASILOS",
    image: [
      ["./images/screenshots/optimized/asilos-project-120.png", 213],
      ["./images/screenshots/optimized/asilos-project-240.png", 426],
      ["./images/screenshots/optimized/asilos-project-360.png", 640],
      ["./images/screenshots/optimized/asilos-project-480.png", 854],
    ],
    description: "Proyecto ASILOS: Archivo de Soluciones a Inconvenientes en Linux u Otro Software",
    link: "https://felipecock.github.io/ASILOS/main.html",
  },
  {
    title: "Sitio Web de GENCORE S.A.S.",
    image: [
      ["./images/screenshots/optimized/gencore-page-120.png", 213],
      ["./images/screenshots/optimized/gencore-page-240.png", 426],
      ["./images/screenshots/optimized/gencore-page-360.png", 640],
      ["./images/screenshots/optimized/gencore-page-480.png", 854],
    ],
    description:
      "Sitio web en HTML5 y CSS puro, con diseño web adaptable e interfaz de usuario limpia, intuitiva y amigable",
    link: "https://codepen.io/felipecock/full/QWNEPOE",
  },
  {
    title: "Formulario Web Adaptativo",
    image: [
      ["./images/screenshots/optimized/adaptive-web-form-120.png", 213],
      ["./images/screenshots/optimized/adaptive-web-form-240.png", 426],
      ["./images/screenshots/optimized/adaptive-web-form-360.png", 640],
      ["./images/screenshots/optimized/adaptive-web-form-480.png", 854],
    ],
    description:
      "Formulario en HTML5 y CSS con diseño web adaptativo, con opciones de accesibilidad, interfaz limpia, agradable e intuitiva",
    link: "https://codepen.io/felipecock/full/zYqqqMr",
  },
  {
    title: "Python Arduino Control GUI",
    image: [
      ["./images/screenshots/optimized/gui-monitor-python-120.png", 213],
      ["./images/screenshots/optimized/gui-monitor-python-240.png", 426],
      ["./images/screenshots/optimized/gui-monitor-python-360.png", 640],
      ["./images/screenshots/optimized/gui-monitor-python-480.png", 854],
    ],
    description:
      "Software en Python2.7 y Arduino con interfaz de usuario para monitorear y controlar en tiempo real un Arduino UNO",
    link: "https://github.com/felipecock/Python-Arduino-Control-GUI",
  },
  {
    title: "Página Biográfica en HTML5 y CSS",
    image: [
      ["./images/screenshots/optimized/memorial-120.png", 213],
      ["./images/screenshots/optimized/memorial-240.png", 426],
      ["./images/screenshots/optimized/memorial-360.png", 640],
      ["./images/screenshots/optimized/memorial-480.png", 854],
    ],
    description: "Página Tributo a San Ignacio de Loyola destacando los principales aspectos de su vida",
    link: "https://codepen.io/felipecock/full/zYqrrde",
  },
  {
    title: "Sitio Web de Writeduca",
    image: [
      ["./images/screenshots/optimized/writeduca-120.png", 213],
      ["./images/screenshots/optimized/writeduca-240.png", 426],
      ["./images/screenshots/optimized/writeduca-360.png", 640],
      ["./images/screenshots/optimized/writeduca-480.png", 854],
    ],
    description: "Sitio web responsive desarrollado en Google Sites con componentes personalizados.",
    link: "https://www.writeduca.com/",
  },
]

export const Projects = () => {
  const generateTiles = () =>
    projectList.map((project, index) => {
      const tile_id = !project.id ? `project-${index.toString()}` : project.id
      return (
        <ProjectTile
          key={tile_id}
          id={tile_id}
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
