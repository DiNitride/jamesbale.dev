import React from "react"
import { StaticQuery, graphql } from "gatsby"
import projectStyles from "./projects.module.css"

let catgories = {
  "freelance": "Freelance Project",
  "university": "University Project",
  "personal": "Personal Project",
  "school": "School Project"
}

export default () => (
  <StaticQuery query={graphql`
    query ProjectQuery {
      allStrapiProject {
          edges {
              node {
                  id
                  name
                  description
                  LinkString
                  Link
                  Technologies
                  Category
                  weight
              }
          }
      }
    }
  `
  } 
  render={
    data => (
      <div className={projectStyles.container}>
        <a id="portfolio"></a>
        <h1 className={projectStyles.title}>Portfolio</h1>
        {data.allStrapiProject.edges.sort((a, b) => (a.node.weight - b.node.weight) ).map(document => (
          <div className={projectStyles.project}>
            <h3 className={projectStyles.projectName}>{document.node.name}</h3>
            <p className={projectStyles.category}>{catgories[document.node.Category]}</p>
            <p className={projectStyles.projectDescription}>{document.node.description}</p>
            <p className={projectStyles.technologies}>
              Technologies --- {document.node.Technologies.split(',').join("  -  ")}
            </p>
            <a href={document.node.Link}><button className={projectStyles.githubButton}>{document.node.LinkString}</button></a>
          </div>
        ))}
        <h1>Like what you see? <a href="#contact" className={projectStyles.contactButton}>Contact me</a> below to discuss the development of your idea</h1>
      </div>
    )}
  />
)
