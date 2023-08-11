import styled from 'styled-components'
import { PrimaryButton } from '@globalStyles'

export const TaskBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    box-shadow: 0 0 10px 10px rgb(0 0 0 / 3%);
`

export const TaskContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.3rem;

    & > p {
        margin: 0;
        font-size: 0.77rem;
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

    &:hover {
        background: #e9e6e6;
        color: black;
    }
`
export const DoneBtn = styled.button`
    background: ${props => (props.done ? '#c8fcd4' : '#f5f5f5')};
    border: none;
    color: ${props => (props.done ? '#5ed454' : 'grey')};
    width: 30px;
    height: 30px;
    border-radius: 100%;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.1s ease-in;

    &:hover {
        background: ${props => (props.done ? '#f5f5f5' : '#c8fcd4')};
        color: ${props => (props.done ? 'grey' : '#5ed454')};
    }

    &:active {
        transform: scale(0.9);
    }
`
