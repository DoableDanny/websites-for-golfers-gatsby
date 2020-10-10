import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { PortfolioWrapper, PortfolioItemsContainer, PortfolioItemWrapper } from '../../elements/homePageElements/PortfolioElements'
import { H2 } from '../../elements/homePageElements/H2'


export default function Portfolio() {
  const data = useStaticQuery(graphql`
    query {
     img1: file(relativePath: { eq: "portfolio1.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 210) {
            ...GatsbyImageSharpFixed
          }
        }
      }
     img2: file(relativePath: { eq: "portfolio2.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 210) {
            ...GatsbyImageSharpFixed
          }
        }
      }
     img3: file(relativePath: { eq: "portfolio3.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 210) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }  
    `)

  console.log(data);
  return (
    <PortfolioWrapper>
      <H2>Some of my Work</H2>
      <PortfolioItemsContainer>
        <PortfolioItem image={data.img1.childImageSharp.fixed} title="ChrisLongGolf.com" />
        <PortfolioItem image={data.img2.childImageSharp.fixed} title="LightwoodDrivingRange.co.uk" />
        <PortfolioItem image={data.img3.childImageSharp.fixed} title="ButchHarmon.com" />
      </PortfolioItemsContainer>
    </PortfolioWrapper>
  )
}

const PortfolioItem = ({ image, title }) => (
  <PortfolioItemWrapper>
    <Img fixed={image} />
    <a href="#">{title}</a>
  </PortfolioItemWrapper>
)