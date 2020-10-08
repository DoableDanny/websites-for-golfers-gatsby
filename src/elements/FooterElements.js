import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.main1};
  width: 100%;
  position: absolute;
  bottom: 0;
  height: ${props => props.theme.spacings.footerHeight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: #eff8fc;
    margin-top: 8px;
  }
`
export const SocialMediaIcon = styled.img`
  width: 50px;
  height: 50px;
  transition: filter 0.3s ease;
  margin-top: 10px;

  :hover,
  :focus {
    filter: brightness(50%);
  }
`
