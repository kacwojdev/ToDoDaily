import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '@components/ui/Footer'
import GridWrapper from '@components/GridWrapper'
import AnimatedPage from '@components/AnimatedPage'
import RegisterFormComponent from '@components/form/RegisterFormComponent'
import { HeaderContainer, KettleImage, BasketballImage } from './styles'
import Kettle from '@icons/kettle.png'
import Basketball from '@icons/basketball.png'

const Register = () => {
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
                <section
                    style={{
                        position: 'relative'
                    }}
                >
                    <RegisterFormComponent />
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

export default Register
