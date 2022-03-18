import React from "react"
import styles from "./Projects.module.css"
import ProjectTile, { ProjectTileProps } from "./ProjectTile"
import ProjectList from "../json/projectList.json"

const projectList: Array<ProjectTileProps> = ProjectList

const imagesPath = `${process.env.PUBLIC_URL}/images/screenshots/optimized/`
const resolutions = [120, 240, 360, 480, 600, 720, 800]
const imageFormat = ".png"

projectList.forEach((project) => {
  if (!project?.imageSource && !!project.imageBaseName) {
    project.imageSource = resolutions.map((resolution) => [
      imagesPath + project.imageBaseName + "-" + resolution.toString() + imageFormat,
      resolution,
    ])
  }
})

export const Projects = () => {
  const generateTiles = () =>
    projectList.map((project, index) => {
      const tile_id = !project.id ? `project-${index.toString()}` : project.id
      return (
        <ProjectTile
          key={tile_id}
          id={tile_id}
          title={project.title}
          imageSource={project.imageSource}
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
