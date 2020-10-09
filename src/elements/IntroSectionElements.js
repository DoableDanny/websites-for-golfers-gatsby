import styled from "styled-components"
import Img from "gatsby-image"

export const IntroSectionWrapper = styled.section`
 height: 600px;
 position: relative;
 
`
export const IntroTextContainer = styled.div`
   position: absolute;
   top: 80px;
   left: 125px;
   z-index: 10;
   max-width: 600px;
   margin-right: 20px;
   font-size: 1.4em;


   h2 {
   color: #D3DADC;

   line-height: 1.4em;
   font-size: 2em;
 }

 @media ${props => props.theme.breakpoints.tablet} {
  left: 25px;
 }

 @media ${props => props.theme.breakpoints.mobile} {
  left: 15px;
  top: 65px;

 h2 {
  font-size: 1.7em;
 }
 }

 @media ${props => props.theme.breakpoints.smallMobile} {
  h2 {
  font-size: 1.4em;
  }
 }
`
// Gatsby fluid images fill 100% of the width of their containers up until the query maxWidth.
export const IntroImage = styled(Img)`
 height: 100%;
`
