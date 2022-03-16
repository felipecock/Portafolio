import React from "react"
import styles from "./ProjectTile.module.css"

export interface ProjectTileProps {
  title: string
  image: string | Array<[source: string, maxWidth: number]>
  description: string
  link: string
}

const ProjectTile: React.FunctionComponent<ProjectTileProps> = (props) => {
  return (
    <div className={styles.projectTile}>
      <h2 className={styles.projectTitle}>{props.title}</h2>
      <div className={styles.gridPreviewImage}>
        {Array.isArray(props.image) ? (
          <img
            className={styles.gridPreviewImage}
            alt={`Vista previa de ${props.title}`}
            src={props.image[0][0]}
            srcSet={props.image.map((srcSet) => `${srcSet[0]} ${srcSet[1]}w`).join()}
          />
        ) : (
          <img className={styles.gridPreviewImage} alt={`Vista previa de ${props.title}`} src={props.image} />
        )}
      </div>
      <p className={styles.project}> {props.description}</p>
      <a className="button" href={props.link} target="_blank" rel="noreferrer">
        Visitar
      </a>
    </div>
  )
}

ProjectTile.defaultProps = {
  title: "Project",
  image: "",
  description: "It is a new project",
  link: "",
}

export default ProjectTile
