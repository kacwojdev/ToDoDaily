import styled from 'styled-components'

const _Button = styled.button`
    padding: 2rem 0.5rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
`

export const PrimaryButton = styled(_Button)`
    background: white;
    color: black;
    border: 0.2rem solid black;
    border-radius: 25%;
`

export const DarkenButton = styled(_Button)`
    background: black;
    color: white;
`
