import styled from 'styled-components'

export const AppHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 10rem;
    background: linear-gradient(90deg, #2730ff, #141875);
    color: white;

    & > div > h2 {
        margin: 0;
        font-weight: 400;
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
export const WelcomeBox = styled.div`
    margin-top: 1rem;
    font-size: 2rem;

    & > span {
        font-weight: 300;
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
    display: flex;
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

    @media (max-width: 880px) {
        display: none;
    }
`
export const CreateNewListBtnMobile = styled.button`
    display: none;
    background: linear-gradient(90deg, #2730ff, #141875);
    color: white;
    border-radius: 50%;
    border: none;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.1s ease-in;

    & > svg {
        margin-right: 0 !important;
    }

    &:hover {
        transform: scale(1.05);
        filter: brightness(1.5);
    }

    &:active {
        transform: scale(1);
    }

    @media (max-width: 880px) {
        display: flex;
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
