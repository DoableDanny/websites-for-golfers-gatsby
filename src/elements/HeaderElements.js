import styled from "styled-components"

export const NavbarWrapper = styled.header`
  background-color: ${props => props.theme.colors.main1};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 4px solid ${props => props.theme.colors.action};
  padding: 15px 120px;

  ul {
    display: flex;
  }

  ul li {
    list-style: none;
  }

  ul li a {
    text-decoration: none;
    color: #b6cad1;
    margin-right: 15px;
    transition: ${props => props.theme.animations.link};
  }

  ul li a:hover {
    color: ${props => props.theme.colors.action};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding-left: 10px;
    padding-right: 10px;
  }
`
