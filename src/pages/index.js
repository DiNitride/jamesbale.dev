import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Header from "../components/header"
import Contact from "../components/contact"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

const IndexPage = ({ data }) => (
    <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>James Bale</title>
          <link rel="canonical" href="https://www.jamesbale.dev" />
          <script data-ad-client="ca-pub-1353600250187126" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Helmet>
        <Header />
        <Projects />
        <Contact />
        <Footer />
    </Layout>
)

export default IndexPage