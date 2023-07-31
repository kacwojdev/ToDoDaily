import { motion } from 'framer-motion'
import styled from 'styled-components'
import { PrimaryButton } from '../../styledComponents'

export const ListBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: max-content;
    padding: 2rem;
    border: 2px solid #e7e7e7;
    background: white;

    & > h4 {
        margin: 0;
        font-size: 1.5rem;
    }
`

export const AddBtn = styled(PrimaryButton)`
    font-size: 1rem;
    color: black;
    background: #f1f1f1;
    border-radius: 0;

    &:hover {
        filter: brightness(0.9);
    }
`

export const ListWrapper = styled.div`
    width: 300px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 0;
    box-shadow: 0 0 10px 10px rgb(0 0 0 / 0.03);
    transition: 0.2s ease-in;

    & > h4 {
        margin: 0;
    }

    & > button {
    }
`

export const ListContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const AddNewTaskBtn = styled(PrimaryButton)`
    border-radius: 0;
    font-size: 1rem;
    color: grey;
    background: none;
    transition: 0.2s ease-in;

    &:hover {
        color: black;
        background: rgb(250 250 250);
    }
`

export const EditBtn = styled(PrimaryButton)`
    position: relative;
    font-size: 1rem;
    color: black;
    background: #f1f1f1;
    border-radius: 0;
    transition: 0.1s ease-in;
    border-radius: 100%;
    color: grey;

    & > svg {
        pointer-events: none;
    }

    &:hover {
        background: #e9e6e6;
        color: black;
    }
`

export const ListTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
