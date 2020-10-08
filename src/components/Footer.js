import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FooterWrapper, SocialMediaIcon } from "../elements/FooterElements"
import Logo from "../components/Logo"

function Footer({ siteTitle }) {
  const data = useStaticQuery(graphql`
    query {
      twitter: file(relativePath: { eq: "twitter.png" }) {
        id
        publicURL
      }
    }
  `)

  console.log(data.twitter.publicURL)

  return (
    <FooterWrapper>
      <span>Email: myemail@tigerlines.com</span>
      <span>Number: 000 0202 2020</span>
      <a href="https://twitter.com/DoableDanny" target="_blank">
        <SocialMediaIcon src={data.twitter.publicURL} alt="Twitter logo" />
      </a>
      <span>{siteTitle}</span>
    </FooterWrapper>
  )
}

export default Footer
