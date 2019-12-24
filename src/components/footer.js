import React from "react"
import footerStyles from "./footer.module.css"

export default () => (
    <div className={footerStyles.footer}>
        <p>&copy; James Bale 2019</p>
        <p>
          This site is built using Gatsby and the Netlify CMS
          <br/>
          <a className={footerStyles.githubLink} href='https://www.github.com/DiNitride/jamesbale.dev'>View source code on Github</a>
        </p>
    </div>
)