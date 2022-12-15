import styled from 'styled-components'

const _Button = styled.button`
    padding: 0.1rem 1rem;
    border: none;
    border-radius: 1rem;
    font-size: 0.66rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`

export const PrimaryButton = styled(_Button)`
    background: white;
    color: black;
    border: 0.2rem solid black;
`

export const DarkenButton = styled(_Button)`
    background: black;
    color: white;

    &:hover {
        box-shadow: 0 0 10px rgb(0,0,0,0.6);
    }
`

export const HeaderBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
`

export const PageHeader = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
`

const _Card = styled.div`
    margin: 0 .5rem .7rem 0;
    border-radius: 1rem;
    padding: 0.5rem 0.5rem;
    border: .2rem solid black;
    transition: .1s ease-in-out;
    cursor: pointer;    
`

export const CardGroup = styled(_Card)`

`