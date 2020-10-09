import styled from 'styled-components'

export const ActionBtn = styled.button`
    background-color: #EBC53B;
    border-radius: 40px;
    border: none;
    padding: 17px 55px;
    color: #130F02;
    font-size: 1.3rem;
    transition: background-color 0.3s ease;

    :hover {
        background-color: #D2AA16;
    }

    :focus {
        border: 2px solid #4C3E08;
        outline: 0;
    }
`