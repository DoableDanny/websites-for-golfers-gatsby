import styled from 'styled-components'

export const PortfolioWrapper = styled.section`
    background-color: ${props => props.theme.colors.main1};
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PortfolioItemsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width: 60rem) {
        flex-direction: column;
        align-items: center;
    }
`

export const PortfolioItemWrapper = styled.div`
    text-align: center;

    a {
      color: #EFF8FC;
      font-size: 1.2rem;
      margin-top: 20px;
    }

    @media only screen and (max-width: 60rem) {
        display: flex;
        flex-direction: column;
        margin-bottom: 70px;
    }
`