import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '@components/ui/Footer'
import GridWrapper from '@components/GridWrapper'
import AnimatedPage from '@components/AnimatedPage'
import LoginFormComponent from '@components/form/LoginFormComponent'
import { BasketballImage, HeaderContainer, KettleImage } from './styles'
import Kettle from '@icons/kettle.png'
import Basketball from '@icons/basketball.png'

const Login = () => {
    return (
        <AnimatedPage>
            <GridWrapper>
                <header>
                    <HeaderContainer>
                        <Link to="/">
                            <h1>TodoDaily</h1>
                        </Link>
                    </HeaderContainer>
                </header>
                <section style={{ position: 'relative' }}>
                    <LoginFormComponent />
                    <KettleImage
                        width="512px"
                        height="512px"
                        style={{ position: 'absolute', left: '0', bottom: '0' }}
                        src={Kettle}
                        alt={'Men with kettle image'}
                        draggable={false}
                    />
                    <BasketballImage
                        width="512px"
                        height="512px"
                        style={{ position: 'absolute', right: '0', bottom: '0' }}
                        src={Basketball}
                        alt={'Basketball player image'}
                        draggable={false}
                    />
                </section>
                <Footer />
            </GridWrapper>
        </AnimatedPage>
    )
}

export default Login
