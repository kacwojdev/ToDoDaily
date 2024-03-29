import styled from 'styled-components'

export const _Container = styled.div`
    max-width: 1180px;
    margin: auto;
`

const _Button = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 1rem;
    font-size: 0.7rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`

export const PrimaryButton = styled(_Button)`
    background: white;
    color: black;
`

export const DarkenButton = styled(_Button)`
    background: black;
    color: white;

    &:hover {
        box-shadow: 0 0 10px rgb(0, 0, 0, 0.6);
    }
`
export const TaskOptionsButton = styled.button`
    min-height: 32px;
    min-width: 32px;
    border: none;
    border-radius: 50%;
    background: white;
    font-size: 0.8rem;
    color: grey;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: rgb(232 232 232);
    }
`

export const HeaderBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgb(237 237 237);
    padding: 0.5rem 3rem;
`

export const PageHeader = styled.h2`
    font-size: 1.2rem;
    font-weight: 700;
`

export const HeaderBarGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 10px;
`

export const GroupLabel = styled.span`
    font-size: 0.7rem;
    color: rgb(112 112 112);
`

export const MainContentContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 3rem;
`

const _Card = styled.div`
    padding: 0.8rem 1rem;
    transition: 0.1s ease-in-out;
    cursor: pointer;
`

export const CardGroup = styled(_Card)`
    display: flex;
    flex: 0 0 48px;
    justify-content: left;
    gap: 10px;
    border: 0.1rem solid rgb(237 237 237);
    border-radius: 10px;
    color: rgb(112 112 112);
    font-size: 1rem;
    transition: all 0.2s ease-in;

    &:hover {
        background-color: rgb(237 237 237);
    }
`

export const CardTask = styled(_Card)`
    height: fit-content;
    display: flex;
    flex-direction: column;
    flex: 0 0 48px;
    justify-content: left;
    gap: 10px;
    border: 0.1rem solid rgb(237 237 237);
    border-radius: 10px;
    position: relative;
`

export const TasksViewStyled = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin-top: 1rem;
    aling-items: flex-start;
`
