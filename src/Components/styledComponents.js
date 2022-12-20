import styled from 'styled-components'
import { FolderBg } from '../Assets'

const _Button = styled.button`
    padding: .5rem 1rem;
    border: none;
    border-radius: 1rem;
    font-size: .7rem;
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
        box-shadow: 0 0 10px rgb(0,0,0,0.6);
    }
`

export const HeaderBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;   
    background: rgb(237 237 237);
    padding: .5rem 3rem;
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
    font-size: .7rem;
    color: rgb(112 112 112);
`

export const MainContentContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 3rem;
`

const _Card = styled.div`
    padding: 0.8rem 1rem;
    transition: .1s ease-in-out;
    cursor: pointer;  
`

export const CardGroup = styled(_Card)`
    display: flex;
    flex: 0 0 48px;
    justify-content: left;
    gap: 10px;
    border: .1rem solid rgb(237 237 237);
    border-radius: 10px;
    color: rgb(112 112 112);
    font-size: 1rem;
    transition: all .2s ease-in;

    &:hover {
        background-color: rgb(237 237 237);
    }
`

export const CardTask = styled(_Card)`
    min-width: 18vw;
    display: flex;
    flex-direction: column;
    flex: 0 0 48px;
    justify-content: left;
    gap: 10px;
    border: .1rem solid rgb(237 237 237);
    border-radius: 10px;
`