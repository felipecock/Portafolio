import React from "react"
import styles from "./ProjectTile.module.css"

export interface ProjectTileProps {
  id?: string
  title: string
  imageBaseName?: string
  imageSource?: string | Array<[source: string, maxWidth: number]>
  description: string
  link: string
}

const ProjectTile: React.FunctionComponent<ProjectTileProps> = (props) => {
  const altSentence = "Vista previa de "
  const imageSrcSet = Array.isArray(props.imageSource) ? props.imageSource.map((srcSet) => `${srcSet[0]} ${srcSet[1]}w`).join() : ""

  return (
    <div className={styles.projectTile}>
      <h2 className={styles.projectTitle}>{props.title}</h2>
      <div className={styles.gridPreviewImage}>
        {Array.isArray(props?.imageSource) ? (
          <>
            <img
              id={props.id}
              className={styles.gridPreviewImage}
              alt={altSentence + props.title}
              src={props.imageSource[0][0]}
              srcSet={imageSrcSet}
              sizes={"(max-width: 481px) 40vw, (min-width: 481px) 20vw, (min-width: 769px) 14vw"}
              width={213}
              height={120}
              loading={"lazy"}
            />
            <img
              id={props.id + "-large"}
              className={styles.gridPreviewImageLarge}
              alt={altSentence + props.title}
              src={props.imageSource[0][0]}
              srcSet={imageSrcSet}
              sizes={"(max-width: 481px) 90vw, (min-width: 481px) 40vw, (min-width: 769px) 30vw"}
              loading={"lazy"}
            />
          </>
        ) : (
          <img className={styles.gridPreviewImage} alt={altSentence + props.title} src={props.imageSource} />
        )}
      </div>
      <p className={styles.project}>{props.description}</p>
      <a className="button" href={props.link} target="_blank" rel="noreferrer">
        Visitar
      </a>
    </div>
  )
}

export default ProjectTile
