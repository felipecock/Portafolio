import React from "react"
import styles from "./ProjectTile.module.css"

export interface ProjectTileProps {
  title: string
  image: string
  description: string
  link: string
}

const ProjectTile:React.FunctionComponent<ProjectTileProps> = (props) => {
  return (
    <div className={styles.projectTile}>
      <h2 className={styles.projectTitle}>{props.title}</h2>
      <div className={styles.gridPreviewImage}>
        <img className={styles.gridPreviewImage} alt={`Vista previa de ${props.title}`} src={props.image} />
      </div>
      <p className={styles.project}> {props.description}</p>
      <a className="button" href="https://codepen.io/felipecock/full/zYqrrde" target="_blank">
        Visitar
      </a>
    </div>
  )
}

ProjectTile.defaultProps = {
  title: "Project",
  image: "../images/profile-picture.jpeg",
  description: "It is a new project",
  link: "",
}

export default ProjectTile
