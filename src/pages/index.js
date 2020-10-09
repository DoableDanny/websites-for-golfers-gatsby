import React from "react"
import { Link } from "gatsby"
import { NavbarWrapper, Logo } from "../elements/HeaderElements"
import IntroSection from "../components/homePage/IntroSection"
import BlogShowcase from "../components/homePage/BlogShowcase"
import Services from '../components/homePage/Services'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <IntroSection />
    <BlogShowcase />
    <Services />
  </Layout>
)

export default IndexPage
