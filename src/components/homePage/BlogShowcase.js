import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { BlogShowcaseWrapper, TitleAndBtnWrapper } from '../../elements/homePageElements/BlogShowcaseElements'
import { ActionBtn } from '../../elements/ActionButton'


export default function BlogShowcase() {
  const data = useStaticQuery(graphql`
    query {
     blogPostImage: file(relativePath: { eq: "cristina-anne-costello-ZnBBDPO2mbQ-unsplash.jpg" }) {
        childImageSharp {
          fixed(width: 310, height: 220) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }  
    `)

  return (
    <BlogShowcaseWrapper>
      <Img fixed={data.blogPostImage.childImageSharp.fixed} />
      <TitleAndBtnWrapper>
        <p>How to grow you Golf Business
online in 5 easy steps</p>
        <ActionBtn>Read Article</ActionBtn>
      </TitleAndBtnWrapper>
    </BlogShowcaseWrapper>
  )
}
