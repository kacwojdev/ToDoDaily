import React from 'react'
import styled from 'styled-components'
import Footer from '../../Components/ui/Footer'
import { PrimaryButton, _Container } from '../../styledComponents'
import { Kettle, Basketball, FacebookIcon, GoogleIcon } from '../../Assets'

const HeaderContainer = styled(_Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const RegisterContainer = styled(_Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

const RegisterForm = styled.form`
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
const RegisterInput = styled.input`
    padding: 0.5rem 1.5rem;
    background: rgb(250, 251, 252);
    border: 2px solid rgb(223, 225, 230);
    font: inherit;
    width: 100%;
    border-radius: 0.3rem;
`

const RegisterSubmitBtn = styled(PrimaryButton)`
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    background: rgb(54, 179, 126);
    color: white;
    border-radius: 0;
`

const RegisterSocial = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

const SocailRegisterButton = styled(PrimaryButton)`
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

const Register = () => {
    return (
        <>
            <header>
                <HeaderContainer>
                    <h1>TodoDaily</h1>
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
                </RegisterContainer>
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

export default Register
