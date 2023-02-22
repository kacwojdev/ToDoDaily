import styled from 'styled-components'

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
