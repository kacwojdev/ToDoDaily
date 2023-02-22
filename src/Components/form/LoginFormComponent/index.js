import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase'
import {
    browserSessionPersistence,
    setPersistence,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { useFormik } from 'formik'
import ErrorMessage from '../ErrorMessage'
import SubmitButton from '../SubmitButton'
import { FacebookIcon, GoogleIcon } from '../../../Assets'
import {
    LoginContainer,
    LoginForm,
    LoginInput,
    LoginSubmitBtn,
    LoginSocial,
    SocailLoginButton,
    ReturnBox,
    Separator
} from './styles'
import { useState } from 'react'

const LoginFormComponent = () => {
    const navigate = useNavigate()

    const [isFormLoading, setFormLoading] = useState(null)
    const [authError, setAuthError] = useState(null)

    const validate = values => {
        const errors = {}
        if (!values.loginEmail) {
            errors.loginEmail = 'Nie podałeś adresu email!'
        }

        if (!values.loginPassword) {
            errors.loginPassword = 'Nie podałeś hasła!'
        }

        return errors
    }

    const loginFormik = useFormik({
        initialValues: {
            loginEmail: '',
            loginPassword: ''
        },
        validate,
        onSubmit: values => {
            setFormLoading(true)
            signInWithEmailAndPassword(auth, values.loginEmail, values.loginPassword)
                .then(() => {
                    navigate('/lists')
                })
                .catch(error => {
                    setFormLoading(false)
                    setAuthError(error)
                })
        }
    })

    return (
        <LoginContainer>
            <LoginForm onSubmit={loginFormik.handleSubmit}>
                <h2>ZALOGUJ SIĘ DO TODODAILY</h2>

                <LoginInput
                    id="loginEmail"
                    name="loginEmail"
                    type="email"
                    placeholder="Podaj adres email"
                    value={loginFormik.values.loginEmail}
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                />
                {loginFormik.touched.loginEmail && loginFormik.errors.loginEmail ? (
                    <ErrorMessage message={loginFormik.errors.loginEmail} />
                ) : null}

                <LoginInput
                    id="loginPassword"
                    name="loginPassword"
                    type="password"
                    placeholder="Podaj hasło"
                    value={loginFormik.values.loginPassword}
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                />
                {loginFormik.touched.loginPassword && loginFormik.errors.loginPassword ? (
                    <ErrorMessage message={loginFormik.errors.loginPassword} />
                ) : null}
                {authError && <ErrorMessage message="Adres email lub hasło nie zgadzają się." />}

                <SubmitButton
                    active={loginFormik.errors.loginEmail || loginFormik.errors.loginPassword}
                    loading={isFormLoading}
                >
                    Zaloguj się
                </SubmitButton>
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
    )
}

export default LoginFormComponent
