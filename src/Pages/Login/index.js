import React, {useState, useEffect} from 'react'
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

        this.state = {
            isEmailValid: true,
            isPswdValid: true,
        }
    }

   handleSubmit = (e) => {
        e.preventDefault()

        console.log('sign in submit')
    }

    render () {
        return (
            <LoginContainer>
                <LoginBox>
                    <Form onSubmit={this.handleSubmit}>
                        <LoginHeader>Sign in to your account</LoginHeader>

                        <FormArea dataType="email" type="email" label="Email Address" isValid={true} notValidMsg={"Icorrect email address!"} />
                        <FormArea dataType="pswd" type="password" label="Password" isValid={true} notValidMsg={"Incorrect password!"} />

                        <SubmitButton label="Sign in"/>
                    </Form>            
                </LoginBox>
            </LoginContainer>
        )
    }
}

export default Login