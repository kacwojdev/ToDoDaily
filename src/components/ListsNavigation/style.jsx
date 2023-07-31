import styled from 'styled-components'

export const ListsNavigationWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: max-content;
    bottom: 2rem;
    left: 0;
    display: ${props => (props.show ? 'flex' : 'none')};
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    color: grey;
    pointer-events: none;
`

export const ArrowButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    color: white;
    background: linear-gradient(90deg, #2730ff, #141875);
    cursor: pointer;
    pointer-events: all;

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
`
