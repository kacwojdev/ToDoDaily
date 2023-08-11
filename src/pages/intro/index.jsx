import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, MobileNav } from '@components/ui/Nav'
import GridWrapper from '@components/GridWrapper'
import Footer from '@components/ui/Footer'
import AnimatedPage from '@components/AnimatedPage'
import { PrimaryButton } from '../../styledComponents'
import {
    FeaturesBackgroundContainer,
    FeaturesContainer,
    FeaturesList,
    FeaturesMainDesc,
    FeatureCard,
    SubHeaderFeatures,
    IntroBackgroundContainer,
    IntroContainer,
    IntroImg,
    IntroTexts
} from './styles'
//assets
import Dart from '@icons/dart.png'
import Loudspeaker from '@icons/loudspeaker.png'
import Calendar from '@icons/calendar.png'
import Paints from '@icons/paints.png'

const Intro = () => {
    const [burgerOpened, setBurgerOpened] = useState(false)

    const handleBurgerOpen = () => {
        setBurgerOpened(!burgerOpened)
    }

    return (
        <AnimatedPage
            style={{
                position: 'relative'
            }}
        >
            <GridWrapper>
                <Nav handleBurgerOpen={handleBurgerOpen} />
                <MobileNav burgerOpened={burgerOpened} />
                <main>
                    <IntroBackgroundContainer>
                        <IntroContainer>
                            <IntroTexts>
                                <h1>
                                    TodoDaily aplikacja do zarządzania zadaniami pozwala na łatwe
                                    organizowanie codziennych obowiązków
                                </h1>
                                <p>
                                    Zarządzaj swoimi zadaniami z dowolnego urządzenia, w każdej
                                    chwili i w każdym miejscu.
                                </p>
                                <Link to="/register">
                                    <PrimaryButton
                                        aria-label="Rozpocznij korzystanie z aplikacji"
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
                            <IntroImg
                                width="512px"
                                height="512px"
                                alt={'Dart image'}
                                draggable={false}
                                src={Dart}
                            />
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
                                    <img
                                        draggable={false}
                                        height="150px"
                                        width="150px"
                                        src={Paints}
                                        alt={'Paints image'}
                                    />
                                    <p>
                                        Dodaj to swojego zadania kolor tła jaki chcesz aby lepiej o
                                        nim pamiętać
                                    </p>
                                </FeatureCard>
                                <FeatureCard>
                                    <h3>Nie zapomnij</h3>
                                    <img
                                        draggable={false}
                                        height="150px"
                                        width="150px"
                                        src={Loudspeaker}
                                        alt={'Loudspeaker image'}
                                    />
                                    <p>
                                        Dodaj to swojego zadania przypomnienie w formie sms lub
                                        maila, albo poprostu powiadomienia na telefonie.
                                    </p>
                                </FeatureCard>
                                <FeatureCard>
                                    <h3>Deadline</h3>
                                    <img
                                        draggable={false}
                                        height="150px"
                                        width="150px"
                                        src={Calendar}
                                        alt={'Calendar image'}
                                    />
                                    <p>Ustaw deadline do kiedy masz zamiar uporać się z zdaniem.</p>
                                </FeatureCard>
                            </FeaturesList>
                        </FeaturesContainer>
                    </FeaturesBackgroundContainer>
                </main>
                <Footer />
            </GridWrapper>
        </AnimatedPage>
    )
}

export default Intro
