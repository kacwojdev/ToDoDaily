import React from 'react'
import styled from 'styled-components'
import {
    HeaderContainer,
    RegisterContainer,
    RegisterForm,
    RegisterInput,
    RegisterSubmitBtn,
    RegisterSocial,
    SocailRegisterButton,
    ReturnBox,
    Separator
} from './styles'
import { Link } from 'react-router-dom'
import { Kettle, Basketball, FacebookIcon, GoogleIcon } from '../../Assets'
import Footer from '../../Components/ui/Footer'
import AnimatedPage from '../../Components/AnimatedPage'

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
                <RegisterContainer>
                    <RegisterForm>
                        <h2>ZAREJESTRUJ SIĘ ABY ZAŁOŻYĆ KONTO</h2>

                        <RegisterInput placeholder="Podaj imię" />
                        <RegisterInput placeholder="Podaj nazwisko" />
                        <RegisterInput placeholder="Podaj adres email" />
                        <RegisterInput placeholder="Podaj hasło" />
                        <RegisterInput placeholder="Podaj hasło" />

                        <RegisterSubmitBtn type="submit">Załóż konto</RegisterSubmitBtn>
                    </RegisterForm>
                    LUB
                    <RegisterSocial>
                        <SocailRegisterButton>
                            <img src={GoogleIcon} alt={'Google icon'} />
                            Kontynuuj za pomocą konta Google
                        </SocailRegisterButton>
                        <SocailRegisterButton>
                            <img src={FacebookIcon} alt={'Facebook icon'} />
                            Kontynuuj za pomocą konta Facebook
                        </SocailRegisterButton>
                    </RegisterSocial>
                    <ReturnBox>
                        <Separator></Separator>
                        <p>
                            Masz już konto?{' '}
                            <Link style={{ color: 'blue' }} to="/login">
                                Zaloguj się
                            </Link>
                        </p>
                    </ReturnBox>
                </RegisterContainer>
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
