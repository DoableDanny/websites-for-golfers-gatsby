import styled from 'styled-components'

export const BlogShowcaseWrapper = styled.section`
    background-color: ${props => props.theme.colors.main1};
    padding-left: 125px;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;

    @media ${props => props.theme.breakpoints.tablet} {
        padding-left: 10px;
        padding-right: 10px;
        flex-direction: column;
        align-items: center;
    }

`
export const TitleAndBtnWrapper = styled.div`
    margin-left: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #EFF8FC;
        margin-top: 30px;
        max-width: 400px;
        font-size: 1.4em;
        line-height: 1.5em;
        margin-bottom: 40px;
        text-align: center;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        margin-left: 0px;
        width: 350px;
    }
   
   
`
