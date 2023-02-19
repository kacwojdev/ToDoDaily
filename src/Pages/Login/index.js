import React from 'react'
import {
    HeaderContainer,
    LoginContainer,
    LoginForm,
    LoginInput,
    LoginSubmitBtn,
    LoginSocial,
    SocailLoginButton,
    ReturnBox,
    Separator
} from './styles'
import { Link } from 'react-router-dom'
import { Kettle, Basketball, FacebookIcon, GoogleIcon } from '../../Assets'
import Footer from '../../Components/ui/Footer'
import AnimatedPage from '../../Components/AnimatedPage'

const Login = () => {
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
                <LoginContainer>
                    <LoginForm>
                        <h2>ZALOGUJ SIĘ DO TODODAILY</h2>

                        <LoginInput placeholder="Podaj adres email" />
                        <LoginInput placeholder="Podaj hasło" />

                        <LoginSubmitBtn type="submit">Zaloguj się</LoginSubmitBtn>
                    </LoginForm>
                    LUB
                    <LoginSocial>
                        <SocailLoginButton>
                            <img src={GoogleIcon} alt={'Google icon'} />
                            Kontynuuj za pomocą konta Google
                        </SocailLoginButton>
                        <SocailLoginButton>
                            <img src={FacebookIcon} alt={'Facebook icon'} />
                            Kontynuuj za pomocą konta Facebook
                        </SocailLoginButton>
                    </LoginSocial>
                    <ReturnBox>
                        <Separator></Separator>
                        <p>
                            Nie masz konta?{' '}
                            <Link style={{ color: 'blue' }} to="/register">
                                Zarejestruj się
                            </Link>
                        </p>
                    </ReturnBox>
                </LoginContainer>
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

export default Login
