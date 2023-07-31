// react deps
import { useState, useEffect } from 'react'
// react-router deps
import { Link, useNavigate } from 'react-router-dom'
//firebase
import { auth } from '../../../firebase'
import {
    browserSessionPersistence,
    setPersistence,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    getRedirectResult,
    signInWithRedirect
} from 'firebase/auth'
//formik
import { useFormik } from 'formik'
//icons
import FacebookIcon from '@img/facebook.png'
import GoogleIcon from '@img/google.png'
// styles
import ErrorMessage from '../ErrorMessage'
import SubmitButton from '../SubmitButton'
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

const LoginFormComponent = () => {
    const navigate = useNavigate()

    const [isFormLoading, setFormLoading] = useState(null)
    const [authError, setAuthError] = useState(null)
    const [loadingPage, setLoadingPage] = useState(true)

    useEffect(() => {
        getRedirectResult(auth)
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken

                const user = result.user
                setLoadingPage(false)
                navigate('/lists')
            })
            .catch(error => {
                const errorCode = error.code
                const errorMessage = error.message
                // const email = error.customData.email

                const credential = GoogleAuthProvider.credentialFromError(error)
                setLoadingPage(false)
            })
    }, [])

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

    const handleSignInWithFacebook = () => {
        setLoadingPage(true)
        const provider = new FacebookAuthProvider()
        signInWithRedirect(auth, provider)
    }

    const handleSignInWithGoogle = () => {
        setLoadingPage(true)
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }

    return loadingPage ? (
        <div>Ładowanie</div>
    ) : (
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
                    aria-label="Zaloguj się"
                    active={loginFormik.errors.loginEmail || loginFormik.errors.loginPassword}
                    loading={isFormLoading}
                >
                    Zaloguj się
                </SubmitButton>
            </LoginForm>
            LUB
            <LoginSocial>
                <SocailLoginButton
                    onClick={handleSignInWithGoogle}
                    aria-label="Zaloguj się używając konta Google"
                >
                    <img src={GoogleIcon} alt={'Google icon'} />
                    Kontynuuj za pomocą konta Google
                </SocailLoginButton>
                <SocailLoginButton
                    onClick={handleSignInWithFacebook}
                    aria-label="Zaloguj się używając konta Facebook"
                >
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
