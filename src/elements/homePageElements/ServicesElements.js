import styled from 'styled-components'

export const ServicesWrapper = styled.section`
    background-color: ${props => props.theme.colors.main2};
    padding-top: 40px;
    padding-bottom: 40px;
    /* padding-left: 125px;
    padding-right: 125px; */
    display: flex;
    flex-direction: column;
    align-items: center;


    h2 {
        color: #EFF8FC;
        text-align: center;
        font-size: 1.8rem;
        margin-bottom: 100px;
    }
`

export const ServiceModulesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width: 60rem) {
        flex-direction: column;
    }
`

export const ServicesModule = styled.div`
   text-align: center;

   h3 {
       color: #D0EBF6;
       margin-top: 30px;
       margin-bottom: 30px;
       font-size: 1.3rem;
   }

   p {
       color: #B3DEF1;
       line-height: 1.8rem;
       font-size: 1.1rem;
       padding-right: 30px;
       padding-left: 30px;
   }


   @media only screen and (max-width: 60rem) {
       display: flex;
       border:3px solid black;
       margin-left: 20px;
    }
`