import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  IntroSectionWrapper,
  IntroTextContainer,
  IntroImage,
} from "../../elements/homePageElements/IntroSectionElements"
import { ActionBtn } from '../../elements/ActionButton'

export default function IntroSection() {
  const data = useStaticQuery(graphql`
  query {
   introImage: file(relativePath: { eq: "andrew-rice-waE_CT2q8Os-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }  
  `)


  return (
    <IntroSectionWrapper>
      <IntroTextContainer>
        <h2>Beautiful Fast Websites, SEO
        and Internet Marketing
for Golf Professionals</h2>
        <ActionBtn>Get a Quote</ActionBtn>
      </IntroTextContainer>
      <IntroImage fluid={data.introImage.childImageSharp.fluid} />
    </IntroSectionWrapper>
  )
}
