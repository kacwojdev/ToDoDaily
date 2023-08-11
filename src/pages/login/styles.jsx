import styled from 'styled-components'
import { _Container } from '../../styledComponents'

export const HeaderContainer = styled(_Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const KettleImage = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;

    @media (max-width: 1250px) {
        width: 350px;
        height: 350px;
    }

    @media (max-width: 850px) {
        display: none;
    }
`

export const BasketballImage = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;

    @media (max-width: 1250px) {
        width: 350px;
        height: 350px;
    }

    @media (max-width: 850px) {
        display: none;
    }
`
