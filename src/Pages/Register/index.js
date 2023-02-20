import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Kettle, Basketball } from '../../Assets'
import Footer from '../../Components/ui/Footer'
import AnimatedPage from '../../Components/AnimatedPage'
import RegisterFormComponent from '../../Components/form/RegisterFormComponent'

const Register = () => {
    return (
        <AnimatedPage>
            <header>
                <HeaderContainer>
                    <Link to="/">
                        <h1>TodoDaily</h1>
                    </Link>
                </HeaderContainer>
            </header>
            <section style={{ position: 'relative' }}>
                <RegisterFormComponent />
                <img
                    style={{ position: 'absolute', left: '0', bottom: '0' }}
                    src={Kettle}
                    alt={'Men with kettle image'}
                    draggable={false}
                />
                <img
                    style={{ position: 'absolute', right: '0', bottom: '0' }}
                    src={Basketball}
                    alt={'Basketball player image'}
                    draggable={false}
                />
            </section>
            <footer>
                <Footer />
            </footer>
        </AnimatedPage>
    )
}

export default Register
