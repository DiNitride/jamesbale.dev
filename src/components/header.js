import React from "react"
import { graphql, StaticQuery } from "gatsby"
import HeaderStyles from "./header.module.css"

export default () => (
  <StaticQuery query={graphql`
    query HeaderQuery {
      file(relativePath: { eq: "pfp.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `}
  render={data => (
    <div className={HeaderStyles.header}>
      {/* <Img className={HeaderStyles.profileImage} fixed={data.file.childImageSharp.fixed} /> */}
      <p className={HeaderStyles.splashText}>
        HI, I'M <span className={HeaderStyles.name}>JAMES BALE</span>, AN UNDERGRADUATE STUDENT AND DEVELOPER FROM THE UK
      </p>
      <a href="#portfolio" className={HeaderStyles.navButton}>PORTFOLIO</a>
      <a href="#contact" className={HeaderStyles.navButton}>CONTACT</a>
      <a href="James_Bale_CV.pdf" className={HeaderStyles.navButton}>VIEW CV</a>
    </div>
    
  )}
  />
)