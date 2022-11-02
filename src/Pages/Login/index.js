import React, {useState, useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import styled from 'styled-components';
import FormArea from '../../Components/form/FormArea';
import SubmitButton from '../../Components/form/SubmitButton';

const LoginContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
`

const LoginBox = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    max-width: 550px;
    width: 75%;
    height: max-cotntent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    border-radius: 10px;
    background: #222c3a;

    @media (max-width: 550px) {
      width: 100%;
    }
`

const LoginHeader = styled.h2`
    margin-top: 0;
    font-size: 3rem;
    font-weight: 700;
`

class Login extends React.Component  {
    constructor(props) {
        super(props)

        this.emailAddressRef = React.createRef()
        this.pswdRef = React.createRef()

        this.state = {
            isEmailValid: true,
            isPswdValid: true,
            user: null,
            error: null,
            isLoading: false,
        }
    }

   handleSubmit = (e) => {
        e.preventDefault()

        this.setState({isEmailValid: true, isPswdValid: true})

        if(!this.state.isLoading) {

            this.setState({isLoading: true})

            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.emailAddressRef.current.value, this.pswdRef.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                this.setState({user: user, isLoading: false})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode == 'auth/invalid-email' || errorCode == 'auth/user-not-found') {
                    this.setState({isEmailValid: false})
                } else if (errorCode == 'auth/wrong-password') {
                    this.setState({isPswdValid: false})
                }
                console.log("Error Code: ", errorCode, "Error Msg: ", errorMessage)
                this.setState({error: errorMessage, isLoading: false})
            });
            console.log('sign in submit')
        }
    }

    render () {
        const {error, user} = this.state
        const {isEmailValid, isPswdValid, isLoading} = this.state
        return (
            <LoginContainer>
                {error && (
                    <p>{error.message}</p>
                )}
                {user && (
                    <Navigate to="/" replace={true} />
                )}
                <LoginBox>
                    <Form onSubmit={this.handleSubmit}>
                        <LoginHeader>Sign in to your account</LoginHeader>

                        <FormArea dataType="email" ref={this.emailAddressRef} type="email" label="Email Address" isValid={isEmailValid} notValidMsg={"Icorrect email address!"} />
                        <FormArea dataType="pswd" ref={this.pswdRef} type="password" label="Password" isValid={isPswdValid} notValidMsg={"Incorrect password!"} />

                        <SubmitButton label="Sign in" isLoading={isLoading}/>
                    </Form>            
                </LoginBox>
            </LoginContainer>
        )
    }
}

export default Login