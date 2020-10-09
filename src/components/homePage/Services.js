import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import { ServicesWrapper, ServicesModule, ServiceModulesContainer } from '../../elements/homePageElements/ServicesElements'

export default function Services() {
    const data = useStaticQuery(graphql`
    query {
     webDesignImg: file(relativePath: { eq: "christopher-gower-m_HRfLhgABo-unsplash.jpg" }) {
        childImageSharp {
          fixed(width: 290, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
     SEOImg: file(relativePath: { eq: "nathana-reboucas-c4aT8MfEzdw-unsplash.jpg" }) {
        childImageSharp {
          fixed(width: 290, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
     googleAdsImg: file(relativePath: { eq: "matt-walsh-bPNGcFbEQMI-unsplash.jpg" }) {
        childImageSharp {
          fixed(width: 290, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }  
    `)

    console.log(data);

    return (
        <ServicesWrapper>
            <h2>How I can help you get more customers</h2>
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
