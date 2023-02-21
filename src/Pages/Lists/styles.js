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
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 3rem 1rem;
    background: #f5f4f4;
`

export const ListBox = styled.div`
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

export const TaskBox = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    box-shadow: 0 0 10px 10px rgb(0 0 0 / 3%);

    & > button {
        background: #f5f5f5;
        border: none;
        color: grey;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.1s ease-in;

        &:hover {
            background: #c8fcd4;
            color: #5ed454;
        }

        &:active {
            transform: scale(0.9);
        }
    }
`

export const TaskContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    & > h6 {
        margin: 0;
        font-size: 1rem;
    }

    & > p {
        margin: 0;
        font-size: 0.77rem;
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

export const EditBtn = styled(PrimaryButton)`
    font-size: 1rem;
    color: black;
    background: #f1f1f1;
    border-radius: 0;
    transition: 0.1s ease-in;

    &:hover {
        filter: brightness(0.9);
    }
`

export const CreateNewListBtn = styled.button`
    height: max-content;
    padding: 1rem;
    border: 2px dashed #8e8e8e;
    background: #c0c0c0;
    color: #8e8e8e;
    cursor: pointer;
    transition: 0.1s ease-in;

    &:hover {
        background: #f5f4f4;
        color: blue;
        border-color: blue;
    }
`
