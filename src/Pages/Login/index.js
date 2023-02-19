import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Footer from '../../Components/ui/Footer'
import { PrimaryButton, _Container } from '../../styledComponents'
import { Kettle, Basketball, FacebookIcon, GoogleIcon } from '../../Assets'

const HeaderContainer = styled(_Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginContainer = styled(_Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 2rem;
    box-shadow: rgb(9 30 66 / 15%) 0px 0.5rem 1rem 0px;

    & > h2 {
        font-size: 1rem;
        color: #5e6c84;
    }
`
const LoginInput = styled.input`
    padding: 0.5rem 1.5rem;
    background: rgb(250, 251, 252);
    border: 2px solid rgb(223, 225, 230);
    font: inherit;
    width: 100%;
    border-radius: 0.3rem;
`

const LoginSubmitBtn = styled(PrimaryButton)`
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    background: rgb(54, 179, 126);
    color: white;
    border-radius: 0;
`

const LoginSocial = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

const SocailLoginButton = styled(PrimaryButton)`
    -webkit-box-align: center;
    align-items: center;
    background: rgb(255, 255, 255);
    border: 0px;
    border-radius: 0.3rem;
    box-shadow: rgb(9 30 66 / 15%) 1px 1px 5px 0px;
    color: rgb(23, 43, 77);
    display: flex;
    font-size: 0.875rem;
    font-weight: 500;
    gap: 0.5rem;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0.5rem;
    text-align: left;
    width: 100%;

    & > img {
        max-width: 15px;
    }
`

const ReturnBox = styled.div`
    display: flex;
    flex-direction: column;
`
const Separator = styled.div`
    height: 1px;
    width: 100%;
    background: grey;
`

const Login = () => {
    return (
        <>
            <header>
                <HeaderContainer>
                    <h1>TodoDaily</h1>
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
                />
                <img
                    style={{ position: 'absolute', right: '0', bottom: '0' }}
                    src={Basketball}
                    alt={'Basketball player image'}
                />
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Login
