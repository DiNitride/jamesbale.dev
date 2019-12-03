import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Header from "../components/header"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = ({ data }) => (
    <Layout>
        <Header />
        <Projects />
        <Contact />
        <Footer />
    </Layout>
)

export default IndexPage