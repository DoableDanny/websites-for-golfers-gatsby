import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import { ServicesWrapper, ServicesModule, ServiceModulesContainer } from '../../elements/homePageElements/ServicesElements'
import { H2 } from '../../elements/homePageElements/H2'

export default function Services() {
  const data = useStaticQuery(graphql`
    query {
     webDesignImg: file(relativePath: { eq: "christopher-gower-m_HRfLhgABo-unsplash.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 210) {
            ...GatsbyImageSharpFixed
          }
        }
      }
     SEOImg: file(relativePath: { eq: "nathana-reboucas-c4aT8MfEzdw-unsplash.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 210) {
            ...GatsbyImageSharpFixed
          }
        }
      }
     googleAdsImg: file(relativePath: { eq: "matt-walsh-bPNGcFbEQMI-unsplash.jpg" }) {
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
    <ServicesWrapper>
      <H2>How I can help you get more customers</H2>
      <ServiceModulesContainer>
        <ServicesModule>
          <Img fixed={data.webDesignImg.childImageSharp.fixed} />
          <h3>Web Design</h3>
          <p>Sleek and modern web sites that make you look professional</p>
        </ServicesModule>
        <ServicesModule>
          <Img fixed={data.SEOImg.childImageSharp.fixed} />
          <h3>SEO</h3>
          <p>Search Engine Optimisation so you rank high on Google</p>
        </ServicesModule>
        <ServicesModule>
          <Img fixed={data.googleAdsImg.childImageSharp.fixed} />
          <h3>Google Ads</h3>
          <p>Advertise your products and services for targeted Google searches</p>
        </ServicesModule>
      </ServiceModulesContainer>
    </ServicesWrapper>
  )
}
