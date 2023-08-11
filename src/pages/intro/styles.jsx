import styled from 'styled-components'
import { _Container } from '@globalStyles'

export const FeaturesBackgroundContainer = styled.section`
    width: 100%;
    color: #363636;

    @media (max-width: 880px) {
        padding: 50px;
    }
`

export const FeaturesContainer = styled(_Container)`
    display: flex;
    flex-flow: column;
    margin: 50px auto;
`

export const FeaturesList = styled.div`
    display: flex;
    flex-flow: row;
    gap: 50px;

    @media (max-width: 880px) {
        flex-flow: column;
    }
`

export const FeaturesMainDesc = styled.p`
    font-size: 2rem;
`

export const FeatureCard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 1.5rem;
    box-shadow: 0 0 10px #e3e3e3;
`

export const SubHeaderFeatures = styled.h4`
    color: grey;
    font-size: 1rem;
`

export const IntroBackgroundContainer = styled.section`
    widht: 100%;
    background: linear-gradient(45deg, #2730ff, #141875);
    color: white;

    @media (max-width: 880px) {
        padding: 50px;
    }
`

export const IntroContainer = styled(_Container)`
    height: fit-content;
    display: flex;
    align-items: center;
    padding: auto 50px;

    @media (max-width: 880px) {
        flex-direction: column-reverse;
    }
`

export const IntroImg = styled.img`
    flex-grow: 1;

    @media (max-width: 880px) {
        width: 80%;
        height: auto;
        aspect-ratio: auto;
    }
`

export const IntroTexts = styled.div`
    flex-grow: 4;

    & > h1 {
        font-size: 2rem;
    }

    @media (max-width: 880px) {
        & > h1 {
            font-size: 1.5rem;
        }
    }
`
