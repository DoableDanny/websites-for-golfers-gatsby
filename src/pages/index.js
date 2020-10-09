import React from "react"
import { Link } from "gatsby"
import { NavbarWrapper, Logo } from "../elements/HeaderElements"
import IntroSection from "../components/IntroSection"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <IntroSection />
  </Layout>
)

export default IndexPage
