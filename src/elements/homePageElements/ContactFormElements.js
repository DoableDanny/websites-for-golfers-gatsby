import styled from 'styled-components'


export const FormSection = styled.section`
    background-color: ${props => props.theme.colors.main2};
    padding-top: 40px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-bottom: 10px;
    }

    span {
        color: #EFF8FC;
        font-size: 1.2rem;
        margin-bottom: 90px;
        text-align: center;
    }
`

export const Form = styled.form`
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${props => props.theme.breakpoints.mobile} {
        width: 90%;
    }
`

export const LabelAndInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    width: 100%;
`

export const Label = styled.label`
    color: #D0EBF6;
    margin-bottom: 5px;
`

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 1rem;
`
export const TextArea = styled.textarea`
    width: 100%;
    font-size: 1.2rem;
    height: 300px;
`
export const SubmitInput = styled.input.attrs({
    type: 'submit',
    value: 'Submit'
})`
    width: 100%;
    background-color: ${props => props.theme.colors.action};
    padding: 12px;
    border-radius: 20px;
    border: none;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;

    :hover {
        background-color: #D2AA16;
    }

    :focus {
        border: 2px solid #4C3E08;
        outline: 0;
    }
  `

