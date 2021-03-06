import React from "react"
import { StaticQuery, graphql } from "gatsby"
import projectStyles from "./projects.module.css"


export default () => (
  <StaticQuery query={graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              description
              link
              linkString
              technologies
              title
              type
              weight
            }
          }
        }
      }
    }
  `
  } 
  render={
    data => (
      <div className={projectStyles.container}>
        <a className="anchor" href="https://www.jamesbale.dev/#portfolio" id="portfolio">Portfolio</a>
        <h1 className={projectStyles.title}>Portfolio</h1>
        {data.allMarkdownRemark.edges.sort((a, b) => (a.node.frontmatter.weight - b.node.frontmatter.weight) ).map(document => (
          <div className={projectStyles.project}>
            <h3 className={projectStyles.projectName}>{document.node.frontmatter.title}</h3>
            <p className={projectStyles.category}>{document.node.frontmatter.type}</p>
            <p className={projectStyles.projectDescription}>{document.node.frontmatter.description}</p>
            <p className={projectStyles.technologies}>
              Technologies --- {document.node.frontmatter.technologies.split(',').join("  -  ")}
            </p>
            <a target="_blank" rel="noopener noreferrer" href={document.node.frontmatter.link}><button className={projectStyles.projectButton}>{document.node.frontmatter.linkString}</button></a>
          </div>
        ))}
        <h1>Like what you see? <a href="#contact" className={projectStyles.contactButton}>Contact me</a> below to discuss the development of your idea</h1>
      </div>
    )}
  />
)
