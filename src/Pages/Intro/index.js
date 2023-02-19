import React from 'react'
import styled from 'styled-components'
import { PrimaryButton, _Container } from '../../styledComponents'
import { Dart, Loudspeaker, Calendar, Paints } from '../../Assets'
import { Link } from 'react-router-dom'
import Nav from '../../Components/ui/Nav'

const FeaturesBackgroundContainer = styled.section`
    width: 100%;
    background: white;
    color: #363636;
`

const FeaturesContainer = styled(_Container)`
    display: flex;
    flex-flow: column;
    margin: 50px auto;
`

const FeaturesList = styled.div`
    display: flex;
    flex-flow: row;
    gap: 50px;
`

const FeaturesMainDesc = styled.p`
    font-size: 2rem;
`

const FeatureCard = styled.div`
    padding: 1.5rem;
    box-shadow: 0 0 10px #e3e3e3;
`

const SubHeaderFeatures = styled.h4`
    color: grey;
    font-size: 1rem;
`

const IntroBackgroundContainer = styled.section`
    widht: 100%;
    background: linear-gradient(45deg, #3e09ae, #b758e4);
    color: white;
`

const IntroContainer = styled(_Container)`
    height: fit-content;
    display: flex;
    align-items: center;
    padding: auto 50px;
`

const IntroImg = styled.img`
    flex-grow: 1;
`

const IntroTexts = styled.div`
    flex-grow: 4;
`

const Intro = () => {
    return (
        <>
            <Nav />
            <IntroBackgroundContainer>
                <IntroContainer>
                    <IntroTexts>
                        <h1 style={{ fontSize: '2rem' }}>
                            TodoDaily aplikacja do zarządzania zadaniami pozwala na łatwe
                            organizowanie codziennych obowiązków
                        </h1>
                        <p>
                            Zarządzaj swoimi zadaniami z dowolnego urządzenia, w każdej chwili i w
                            każdym miejscu.
                        </p>
                        <Link to="/register">
                            <PrimaryButton
                                style={{
                                    fontSize: '1rem',
                                    backgroundColor: 'rgb(0, 101, 255)',
                                    color: 'white',
                                    marginTop: '2rem',
                                    padding: '1rem 2rem'
                                }}
                            >
                                Rozpocznij już teraz
                            </PrimaryButton>
                        </Link>
                    </IntroTexts>
                    <IntroImg src={Dart} />
                </IntroContainer>
            </IntroBackgroundContainer>
            <FeaturesBackgroundContainer>
                <FeaturesContainer>
                    <div>
                        <SubHeaderFeatures>TODODAILY W AKCJI</SubHeaderFeatures>
                        <FeaturesMainDesc>
                            Łatwo dodasz nowe zadania, <br />
                            przypiszesz je do odpowiednich kategorii, <br />
                            określisz priorytety i terminy ich realizacji. <br />
                        </FeaturesMainDesc>
                    </div>
                    <FeaturesList>
                        <FeatureCard>
                            <h3>Oznacz task</h3>
                            <img height="150px" src={Paints} alt={'Paints image'} />
                            <p>
                                Dodaj to swojego zadania kolor tła jaki chcesz aby lepiej o nim
                                pamiętać
                            </p>
                        </FeatureCard>
                        <FeatureCard>
                            <h3>Nie zapomnij</h3>
                            <img height="150px" src={Loudspeaker} alt={'Loudspeaker image'} />
                            <p>
                                Dodaj to swojego zadania przypomnienie w formie sms lub maila, albo
                                poprostu powiadomienia na telefonie.
                            </p>
                        </FeatureCard>
                        <FeatureCard>
                            <h3>Deadline</h3>
                            <img height="150px" src={Calendar} alt={'Calendar image'} />
                            <p>Ustaw deadline do kiedy masz zamiar uporać się z zdaniem.</p>
                        </FeatureCard>
                    </FeaturesList>
                </FeaturesContainer>
            </FeaturesBackgroundContainer>
        </>
    )
}

export default Intro
