import styled from 'styled-components'

export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: row-reversed;
    justify-content: space-between;
    align-items: baseline;

    & span {
        font-size: 0.7em;
    }
`

export const BgModalStyled = styled.div`
    z-index: 999;
    position: absolute;
    max-width: ${({ parentWidth }) => parentWidth + 'px'};
    display: ${({ opened }) => (opened ? 'flex' : 'none')};
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 10px;
    padding: 0.5rem;
    gap: 10px;
    background: white;
    box-shadow: 0 0 10px rgb(0 0 0 / 26%);
`

export const OptionsModalStyled = styled.div`
    z-index: 999;
    position: absolute;
    display: ${({ opened }) => (opened ? 'flex' : 'none')};
    flex-direction: column;
    border-radius: 10px;
    padding: 0.5rem 0;
    background: white;
    box-shadow: 0 0 10px rgb(0 0 0 / 26%);

    button {
        border: none;
        padding: 0.5rem 1rem;
        background: white;
        cursor: pointer;
        color: grey;
        transition: all 0.2s ease-in;
    }

    button:hover {
        color: black;
        background: rgb(241 241 241);
    }
`

export const ReminderModalStyled = styled.div`
    z-index: 999;
    position: absolute;
    display: ${({ opened }) => (opened ? 'flex' : 'none')};
`

export const ColorCircle = styled.div`
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background: ${props => props.color || 'white'};

    &:hover {
        border: 2px solid black;
    }
`

export const NoColorCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    border-radius: 50%;

    &:hover {
        border: 2px solid black;
    }
`
export const OptionsModalBtn = styled.button`
    width: 100%;
    display: flex;
    flexdirection: row;
    justifycontent: space-between;
    alignitems: center;
    gap: 10px;
`
export const DueTimeLabel = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 0.4rem 0.6rem;
    background: #dfdfdf;
    color: #5e5e5e;
    font-size: 0.7rem;
`
