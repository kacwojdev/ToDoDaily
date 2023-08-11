import styled from 'styled-components'
import { RegisterSubmitBtn } from '../../components/form/SubmitButton/styles'
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
export const UserDataForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 575px) {
        grid-template-columns: 1fr;
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 3rem 10rem;

    @media (max-width: 880px) {
        padding: 1rem 3rem;
    }
`
export const UserDataInputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justiify-content: center;
    gap: 1rem;

    & > label {
        text-transform: uppercase;
        color: grey;
        font-size: 0.7rem;
    }

    & > input {
        padding: 1rem;
        border: none;
        box-shadow: 0 0 10px 10px rgb(0 0 0 / 3%);
        margin-right: 2rem;
        width: 100%;
        font: inherit;
    }
`

export const SaveDataBtn = styled(PrimaryButton)`
    width: max-content;
    border-radius: 0;
    font: inherit;
    padding: 1rem;
    background-color: ${props => (props.active ? '#C8FCD4' : '#c0c0c0')};
    color: ${props => (props.active ? '5ED454' : 'grey')};
    cursor: ${props => (props.active ? 'pointer' : 'default')};
`

export const Spacer = styled.div`
    width: 100%;
    height: 1px;
    margin: 3rem 0;
    background: #c0c0c0;
`
export const UserDataSubmitButton = styled(RegisterSubmitBtn)`
    grid-row-start: 3;

    @media (max-width: 575px) {
        grid-row-start: 4;
    }
`
