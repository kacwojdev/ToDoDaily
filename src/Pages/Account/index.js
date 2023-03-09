// react deps
import React, { useState, useEffect } from 'react'
// react-router deps
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
// firebase
import {
    signOut,
    onAuthStateChanged,
    updatePassword,
    updateEmail,
    updateProfile
} from 'firebase/auth'
import { auth } from '../../firebase'
//formik
import { useFormik } from 'formik'
//components
import GridWrapper from '../../Components/GridWrapper'
import Loading from '../../Components/Loading'
import SubmitButton from '../../Components/form/SubmitButton'
import ErrorMessage from '../../Components/form/ErrorMessage'
import SuccessMessage from '../../Components/form/SuccessMessage'
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
//styles
import {
    AppHeader,
    UserDataForm,
    Main,
    UserDataInputBox,
    SaveDataBtn,
    Spacer,
    UserDataSubmitButton
} from './styles'

const Account = () => {
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [emailSuccess, setEmailSuccess] = useState(false)
    const [firstNameSuccess, setFirstNameSuccess] = useState(false)
    const [lastNameSuccess, setLastNameSuccess] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setEmail(auth.currentUser.email)
                setFirstName(auth.currentUser.displayName.split(' ')[0])
                setLastName(auth.currentUser.displayName.split(' ')[1])
                setLoading(false)
            } else {
                navigate('/login')
            }
        })
    }, [])

    const handleLogOut = () => {
        auth.signOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleNewUserDataSubmit = event => {
        event.preventDefault()

        clearMessages()
        console.log(auth.currentUser)
        if (email != auth.currentUser.email) {
            if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
                updateEmail(auth.currentUser, email)
                    .then(() => {
                        setEmailSuccess(true)
                    })
                    .catch(error => {
                        setEmailError(true)
                    })
            } else {
                setEmailError(true)
            }
        }

        const prevFirstName = auth.currentUser.displayName.split(' ')[0]
        const prevLastName = auth.currentUser.displayName.split(' ')[1]
        if (firstName != prevFirstName) {
            if (firstName) {
                setFirstNameSuccess(true)
                updateProfile(auth.currentUser, {
                    displayName: `${firstName} ${prevLastName}`
                })
                    .then(() => {
                        setFirstNameSuccess(true)
                    })
                    .catch(error => {
                        setFirstNameError(true)
                    })
            } else {
                setFirstNameError(true)
            }
        }

        if (lastName != prevLastName) {
            if (lastName) {
                updateProfile(auth.currentUser, {
                    displayName: `${prevFirstName} ${lastName}`
                })
                    .then(() => {
                        setLastNameSuccess(true)
                    })
                    .catch(error => {
                        setLastNameError(true)
                    })
            } else {
                setLastNameError(true)
            }
        }
    }

    const handleUserDataChange = event => {
        if (event.target.name == 'userFirstName') {
            setFirstName(event.target.value)
        } else if (event.target.name == 'userLastName') {
            setLastName(event.target.value)
        } else if (event.target.name == 'userEmailAddress') {
            setEmail(event.target.value)
        }
    }

    const validate = values => {
        const errors = {}
        if (!values.newUserPassword) {
            errors.newUserPassword = 'Musisz podać nowe hasło.'
        } else if (
            !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(values.newUserPassword)
        ) {
            errors.newUserPassword =
                'Musi zawierać 8 znaków (jedną wielką literę, jedną małą i jedną cyfrę).'
        }

        if (!values.reNewUserPassword) {
            errors.reNewUserPassword = 'Powtórz hasło'
        } else if (!(values.reNewUserPassword == values.newUserPassword)) {
            errors.reNewUserPassword = 'Hasła nie są takie same.'
        }
        return errors
    }

    const newPasswordFormik = useFormik({
        initialValues: {
            newUserPassword: '',
            reNewUserPassword: ''
        },
        validate,
        onSubmit: values => {
            updatePassword(auth.currentUser, values.newUserPassword)
                .then(() => {
                    alert('Pomyslnie zmieniono haslo')
                })
                .catch(error => {
                    alert('nie udało sie zmienic hasla...')
                })
        }
    })

    const clearMessages = () => {
        setEmailError(false)
        setEmailSuccess(false)
        setFirstNameError(false)
        setFirstNameSuccess(false)
        setLastNameError(false)
        setLastNameSuccess(false)
    }

    return loading ? (
        <Loading />
    ) : (
        <GridWrapper>
            <AppHeader>
                <div>
                    <h3>TodoDaily</h3>
                    <h2>
                        <span>Cześć,</span> {auth.currentUser.displayName}
                    </h2>
                </div>
                <nav>
                    <Link disabled={true} to="/lists">
                        <FontAwesomeIcon style={{ marginRight: '1rem' }} icon={faChevronLeft} />
                        Wróć
                    </Link>
                    <button onClick={handleLogOut}>Wyloguj</button>
                </nav>
            </AppHeader>
            <Main>
                <h3>Twoje Dane</h3>
                <UserDataForm onSubmit={handleNewUserDataSubmit}>
                    <UserDataInputBox>
                        <label>Imię</label>
                        <input
                            name="userFirstName"
                            value={firstName}
                            onChange={handleUserDataChange}
                        />
                        {firstNameSuccess && <SuccessMessage message="Udało się zmienić imię." />}
                        {firstNameError && (
                            <ErrorMessage message="Nie udało się zmienić imienia." />
                        )}
                    </UserDataInputBox>
                    <UserDataInputBox>
                        <label>Nazwisko</label>
                        <input
                            name="userLastName"
                            value={lastName}
                            onChange={handleUserDataChange}
                        />
                        {lastNameSuccess && (
                            <SuccessMessage message="Udało się zmienić nazwisko." />
                        )}
                        {lastNameError && (
                            <ErrorMessage message="Nie udało się zmienić nazwiska." />
                        )}
                    </UserDataInputBox>
                    <UserDataInputBox>
                        <label>Adres email</label>
                        <input
                            name="userEmailAddress"
                            value={email}
                            onChange={handleUserDataChange}
                        />
                        {emailSuccess && <SuccessMessage message="Udało się zmienić email." />}
                        {emailError && <ErrorMessage message="Nie udało się zmienić email." />}
                    </UserDataInputBox>

                    <UserDataSubmitButton active={false}>Zapisz dane</UserDataSubmitButton>
                </UserDataForm>
                <Spacer />
                <h3>Zmiana hasła</h3>
                <UserDataForm onSubmit={newPasswordFormik.handleSubmit}>
                    <UserDataInputBox>
                        <label>Nowe hasło</label>
                        <input
                            id="newUserPassword"
                            name="newUserPassword"
                            type="password"
                            value={newPasswordFormik.values.newUserPassword}
                            onChange={newPasswordFormik.handleChange}
                            onBlur={newPasswordFormik.handleBlur}
                        />
                        {newPasswordFormik.errors.newUserPassword &&
                        newPasswordFormik.touched.newUserPassword ? (
                            <ErrorMessage message={newPasswordFormik.errors.newUserPassword} />
                        ) : null}
                    </UserDataInputBox>
                    <UserDataInputBox>
                        <label>Powtórz nowe hasło</label>
                        <input
                            id="reNewUserPassword"
                            name="reNewUserPassword"
                            type="password"
                            value={newPasswordFormik.values.reNewUserPassword}
                            onChange={newPasswordFormik.handleChange}
                            onBlur={newPasswordFormik.handleBlur}
                        />
                        {newPasswordFormik.errors.reNewUserPassword &&
                        newPasswordFormik.touched.reNewUserPassword ? (
                            <ErrorMessage message={newPasswordFormik.errors.reNewUserPassword} />
                        ) : null}
                    </UserDataInputBox>
                    <SubmitButton
                        active={
                            newPasswordFormik.errors.newUserPassword ||
                            newPasswordFormik.errors.reNewUserPassword
                        }
                    >
                        Zmień hasło
                    </SubmitButton>
                </UserDataForm>
            </Main>
            <footer></footer>
        </GridWrapper>
    )
}

export default Account
