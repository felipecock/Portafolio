import React, { lazy, MouseEventHandler, useState } from "react"
import styles from "./ProjectTile.module.css"

export interface ProjectTileProps {
  id?: string
  title: string
  image: string | Array<[source: string, maxWidth: number]>
  description: string
  link: string
}

const ProjectTile: React.FunctionComponent<ProjectTileProps> = (props) => {
  const altSentence = "Vista previa de "
  const imageSrcSet = Array.isArray(props.image) ? props.image.map((srcSet) => `${srcSet[0]} ${srcSet[1]}w`).join() : ""

  return (
    <div className={styles.projectTile}>
      <h2 className={styles.projectTitle}>{props.title}</h2>
      <div className={styles.gridPreviewImage}>
        {Array.isArray(props.image) ? (
          <>
            <img
              id={props.id}
              className={styles.gridPreviewImage}
              alt={altSentence + props.title}
              src={props.image[0][0]}
              srcSet={imageSrcSet}
              sizes={"(max-width: 481px) 40vw, (min-width: 481px) 20vw, (min-width: 769px) 14vw"}
              width={213}
              height={120}
              loading={"eager"}
            />
            <img
              id={props.id + "-large"}
              className={styles.gridPreviewImageLarge}
              alt={altSentence + props.title}
              src={props.image[0][0]}
              srcSet={imageSrcSet}
              sizes={"(max-width: 481px) 90vw, (min-width: 481px) 40vw, (min-width: 769px) 30vw"}
              loading={"lazy"}
            />
          </>
        ) : (
          <img className={styles.gridPreviewImage} alt={altSentence + props.title} src={props.image} />
        )}
      </div>
      <p className={styles.project}>{props.description}</p>
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
