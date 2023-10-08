import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase'
import {
    createUserWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    getRedirectResult,
    signInWithRedirect,
    FacebookAuthProvider
} from 'firebase/auth'
import { useFormik } from 'formik'
import ErrorMessage from '../ErrorMessage'
import SubmitButton from '../SubmitButton'
import FacebookIcon from '@icons/facebook.png'
import GoogleIcon from '@icons/google.png'
import {
    RegisterContainer,
    RegisterForm,
    RegisterInput,
    RegisterSocial,
    SocailRegisterButton,
    ReturnBox,
    Separator
} from './styles'

const RegisterFormComponent = () => {
    const navigate = useNavigate()

    const [isFormLoading, setFormLoading] = useState(null)
    const [authError, setAuthError] = useState(null)
    const [loadingPage, setLoadingPage] = useState(true)

    useEffect(() => {
        getRedirectResult(auth)
            .then(result => {
                // TODO: this needs to be refactored
                // eslint-disable-next-line
                const credential = GoogleAuthProvider.credentialFromResult(result)
                // eslint-disable-next-line
                const token = credential.accessToken
                // eslint-disable-next-line
                const user = result.user

                setLoadingPage(false)
                navigate('/lists')
            })
            .catch(error => {
                // TODO: this needs to be refactored
                // eslint-disable-next-line
                const errorCode = error.code
                // eslint-disable-next-line
                const errorMessage = error.message
                // eslint-disable-next-line
                const credential = GoogleAuthProvider.credentialFromError(error)

                setLoadingPage(false)
            })
    }, [])

    const validate = values => {
        const errors = {}
        if (!values.firstName) {
            errors.firstName = 'Imię jest wymagane!'
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Maksymalnie 15 znaków.'
        }

        if (!values.lastName) {
            errors.lastName = 'Nazwisko jest wymagane!'
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Maksymalnie 20 znaków.'
        }

        if (!values.registerEmail) {
            errors.registerEmail = 'Email jest wymagany!'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.registerEmail)) {
            errors.registerEmail = 'Niepoprawny adres email.'
        }

        if (!values.registerPassword) {
            errors.registerPassword = 'Hasło jest wymagane'
        } else if (
            !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(values.registerPassword)
        ) {
            errors.registerPassword =
                'Musi zawierać 8 znaków (jedną wielką literę, jedną małą i jedną cyfrę).'
        }

        if (!values.rePassword) {
            errors.rePassword = 'Powtórz hasło'
        } else if (!(values.registerPassword === values.rePassword)) {
            errors.rePassword = 'Hasła nie są takie same.'
        }

        return errors
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            registerEmail: '',
            registerPassword: '',
            rePassword: ''
        },
        validate,
        onSubmit: values => {
            setFormLoading(true)
            createUserWithEmailAndPassword(auth, values.registerEmail, values.registerPassword)
                .then(() => {
                    updateProfile(auth.currentUser, {
                        displayName: `${values.firstName} ${values.lastName}`
                    }).then(() => {
                        navigate('/lists')
                    })
                })
                .catch(() => {
                    setFormLoading(false)
                    setAuthError(true)
                })
        }
    })

    const handleSignUpWithFacebook = () => {
        setLoadingPage(true)
        const provider = new FacebookAuthProvider()
        signInWithRedirect(auth, provider)
    }

    const handleSignUpWithGoogle = () => {
        setLoadingPage(true)
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }
    return loadingPage ? (
        <div>Ładowanie</div>
    ) : (
        <RegisterContainer>
            <RegisterForm onSubmit={formik.handleSubmit}>
                <h2>ZAREJESTRUJ SIĘ ABY ZAŁOŻYĆ KONTO</h2>

                <RegisterInput
                    id="firstName"
                    name="firstName"
                    type="name"
                    placeholder="Podaj imię"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <ErrorMessage message={formik.errors.firstName} />
                ) : null}

                <RegisterInput
                    id="lastName"
                    name="lastName"
                    type="name"
                    placeholder="Podaj nazwisko"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <ErrorMessage message={formik.errors.lastName} />
                ) : null}

                <RegisterInput
                    id="registerEmail"
                    name="registerEmail"
                    type="email"
                    placeholder="Podaj adres email"
                    value={formik.values.registerEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.registerEmail && formik.errors.registerEmail ? (
                    <ErrorMessage message={formik.errors.registerEmail} />
                ) : null}

                <RegisterInput
                    id="registerPassword"
                    name="registerPassword"
                    type="password"
                    placeholder="Podaj hasło"
                    value={formik.values.registerPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.registerPassword && formik.errors.registerPassword ? (
                    <ErrorMessage message={formik.errors.registerPassword} />
                ) : null}

                <RegisterInput
                    id="rePassword"
                    name="rePassword"
                    type="password"
                    placeholder="Podaj hasło"
                    value={formik.values.rePassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.rePassword && formik.errors.rePassword ? (
                    <ErrorMessage message={formik.errors.rePassword} />
                ) : null}

                {authError && <ErrorMessage message="Nie możemy utworzyć takiego konta." />}

                <SubmitButton
                    aria-label="Zarejestruj się"
                    active={
                        formik.errors.firstName ||
                        formik.errors.lastName ||
                        formik.errors.registerEmail ||
                        formik.errors.registerPassword ||
                        formik.errors.rePassword
                    }
                    loading={isFormLoading}
                >
                    Załóż konto
                </SubmitButton>
            </RegisterForm>
            LUB
            <RegisterSocial>
                <SocailRegisterButton
                    onClick={handleSignUpWithGoogle}
                    aria-label="Zarejestruj się używając konta Google"
                >
                    <img src={GoogleIcon} alt={'Google icon'} />
                    Kontynuuj za pomocą konta Google
                </SocailRegisterButton>
                <SocailRegisterButton
                    onClick={handleSignUpWithFacebook}
                    aria-label="Zarejestruj się używając Konta Facebook"
                >
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
    )
}

export default RegisterFormComponent
