import React, { useState } from 'react'
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
import { Dart, Loudspeaker, Calendar, Paints } from '../../Assets'
import { Link } from 'react-router-dom'
import { Nav, MobileNav } from '../../Components/ui/Nav'
import Footer from '../../Components/ui/Footer'
import AnimatedPage from '../../Components/AnimatedPage'

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
                                Zarządzaj swoimi zadaniami z dowolnego urządzenia, w każdej chwili i
                                w każdym miejscu.
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
                        <IntroImg draggable={false} src={Dart} />
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
                                    src={Paints}
                                    alt={'Paints image'}
                                />
                                <p>
                                    Dodaj to swojego zadania kolor tła jaki chcesz aby lepiej o nim
                                    pamiętać
                                </p>
                            </FeatureCard>
                            <FeatureCard>
                                <h3>Nie zapomnij</h3>
                                <img
                                    draggable={false}
                                    height="150px"
                                    src={Loudspeaker}
                                    alt={'Loudspeaker image'}
                                />
                                <p>
                                    Dodaj to swojego zadania przypomnienie w formie sms lub maila,
                                    albo poprostu powiadomienia na telefonie.
                                </p>
                            </FeatureCard>
                            <FeatureCard>
                                <h3>Deadline</h3>
                                <img
                                    draggable={false}
                                    height="150px"
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
        </AnimatedPage>
    )
}

export default Intro
