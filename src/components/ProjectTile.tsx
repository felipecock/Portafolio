import React from "react"
import PropTypes from "prop-types"
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
        <iframe
          className={styles.gridPreviewImage}
          sandbox="allow-scripts allow-pointer-lock allow-same-origin"
          scrolling="no"
          src={props.image}
          frameBorder="0"></iframe>
        <img className={styles.gridPreviewImage} alt="" src={props.image} />
      </div>
      <p className={styles.project}> {props.description}</p>
      <a className="button" href="https://codepen.io/felipecock/full/zYqrrde" target="_blank">
        Ver
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
