import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { NavbarWrapper } from "../elements/HeaderElements"
import Logo from "./Logo"

const Header = ({ siteTitle }) => (
  <NavbarWrapper>
    <Logo />
    <ul>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Our Work</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <GatsbyLink to="/page-2/">About</GatsbyLink>
      </li>
      <li>
        {" "}
        <GatsbyLink to="/page-2/">Pricing</GatsbyLink>
      </li>
    </ul>
  </NavbarWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
