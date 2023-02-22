import styled from 'styled-components'
import { PrimaryButton } from '../../styledComponents'

export const ListBox = styled.div`
    position: relative;
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
