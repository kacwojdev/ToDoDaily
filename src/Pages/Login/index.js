// react deps
import React from 'react'
//react-router deps
import { Link } from 'react-router-dom'
//components
import Footer from '../../Components/ui/Footer'
import GridWrapper from '../../Components/GridWrapper'
import AnimatedPage from '../../Components/AnimatedPage'
import LoginFormComponent from '../../Components/form/LoginFormComponent'
//styles
import { BasketballImage, HeaderContainer, KettleImage } from './styles'
//assets
import { Kettle, Basketball } from '../../Assets'

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
                        style={{ position: 'absolute', left: '0', bottom: '0' }}
                        src={Kettle}
                        alt={'Men with kettle image'}
                        draggable={false}
                    />
                    <BasketballImage
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
