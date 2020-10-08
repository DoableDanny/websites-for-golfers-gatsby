import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

export default function Logo({ siteTitle }) {
  return (
    <StyledLink to="/">
      <StyledLogo>
        Tiger<span>l</span>ine Golf Sites
      </StyledLogo>
    </StyledLink>
  )
}

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
`

const StyledLogo = styled.h1`
  color: #c7d1d5;
  font-size: 1.6em;

  :hover {
    color: ${props => props.theme.colors.action};
  }

  span {
    color: ${props => props.theme.colors.action};
  }
`
