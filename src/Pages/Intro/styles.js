import styled from 'styled-components'
import { PrimaryButton, _Container } from '../../styledComponents'

export const FeaturesBackgroundContainer = styled.section`
    width: 100%;
    color: #363636;
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
`

export const FeaturesMainDesc = styled.p`
    font-size: 2rem;
`

export const FeatureCard = styled.div`
    padding: 1.5rem;
    box-shadow: 0 0 10px #e3e3e3;
`

export const SubHeaderFeatures = styled.h4`
    color: grey;
    font-size: 1rem;
`

export const IntroBackgroundContainer = styled.section`
    widht: 100%;
    background: linear-gradient(45deg, #3e09ae, #b758e4);
    color: white;
`

export const IntroContainer = styled(_Container)`
    height: fit-content;
    display: flex;
    align-items: center;
    padding: auto 50px;
`

export const IntroImg = styled.img`
    flex-grow: 1;
`

export const IntroTexts = styled.div`
    flex-grow: 4;
`
