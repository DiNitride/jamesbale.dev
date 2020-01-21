import React from "react"
import contactStyles from "./contact.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function ContactMethod(props) {
    return <h2><FontAwesomeIcon icon={props.icon} /><a target="_blank" rel="noopener noreferrer" className={contactStyles.contactLink} href={props.link}>  {props.text}</a></h2>       
}

export default () => (
    <div className={contactStyles.container}>
        <a className="anchor" href="https://www.jamesbale.dev/#contact" id="contact">Contact</a>
        <h1 className={contactStyles.title}>Want to discuss developing an idea you have?</h1>
        <h2 className={contactStyles.splash}>Whether you have an opportunity that I may be interested in, an idea you want to see turned to reality, or simply want a website building, please get in touch, I'd love to hear from you!</h2>
        <h1 className={contactStyles.how}>How?</h1>
        <ContactMethod icon={faEnvelope} link="mailto:j.ptb.t.ca@gmail.com" text="Send me an email" />
        <ContactMethod icon={faDiscord} link="http://discord.gg" text="DiNitride#7899" />
        <ContactMethod icon={faGithub} link="https://www.github.com/DiNitride/" text="Github" /> 
    </div>
)
