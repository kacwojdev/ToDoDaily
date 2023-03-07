import styled from 'styled-components'
import { PrimaryButton } from '../../styledComponents'

export const AppHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 10rem;
    background: linear-gradient(90deg, #2730ff, #141875);
    color: white;

    & > div > h3 {
        margin: 0;
        font-weight: 400;
    }

    & > div > h2 {
        margin-top: 1rem;
        font-size: 2rem;
    }

    & > div > h2 > span {
        font-weight: 300;
    }

    & > nav > button {
        margin-left: 1.5rem;
        font: inherit;
        color: #d1d1d1;
        background: none;
        border: none;
        cursor: pointer;
        transition: 0.2s ease-in;

        &:hover {
            color: white;
        }
    }

    & > nav > a {
        color: #d1d1d1;
        transition: 0.2s ease-in;

        &:hover {
            color: white;
        }
    }

    @media (max-width: 880px) {
        flex-direction: column;
        align-items: baseline;
        gap: 1rem;
        padding: 1rem 3rem;
    }
`
export const AppMain = styled.main`
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: auto;
    gap: 1rem;
    padding: 3rem 10rem;
    background: #f5f4f4;

    @media (max-width: 880px) {
        padding: 1rem 1rem;
    }
`

export const AppSubHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const CreateNewListBtn = styled.button`
    height: max-content;
    padding: 1rem;
    border: none;
    background: none;
    color: #8e8e8e;
    cursor: pointer;
    transition: 0.1s ease-in;

    &:hover {
        background: #f5f4f4;
        color: blue;
    }
`
export const TaskList = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow-x: auto;
    padding: 1rem;
    height: 100%;
    gap: 1rem;

    &::-webkit-scrollbar {
        height: 5px;
    }

    &::-webkit-scrollbar-track {
        background: #c0c0c0;
    }

    &::-webkit-scrollbar-thumb {
        background-color: blue;
        border-radius: 20px;
    }
`
