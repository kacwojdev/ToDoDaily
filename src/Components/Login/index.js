import React from 'react'
import styled from 'styled-components';
import {RegisterBg} from '../../Assets/index';

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


const FormInput = styled.input`
    margin-bottom: 30px;
    padding: 15px 20px;
    border-radius: 15px;
    border: none;
`

const FormLabel = styled.label`
    margin-bottom: 5px;
    color: rgb(199 199 199);
`

const LoginBtn = styled.button`
    padding: 15px 20px;
    border-radius: 15px;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    background: #8842c1;
    box-shadow: 0 5px 0 #161c25;
    transition: .1s ease-in;

    &:hover {
        transform: translateY(5px);
        box-shadow: 0 0 0 #161c25;
    }
`

const LoginHeader = styled.h2`
    margin-top: 0;
    font-size: 3rem;
    font-weight: 700;
`

const Login = () => {
  return (
    <LoginContainer>
        <LoginBox>
            <Form>
                <LoginHeader>Sign in to your account</LoginHeader>

                <FormLabel>Email Address</FormLabel>
                <FormInput type="email" placeholder=""  />

                <FormLabel>Password</FormLabel>
                <FormInput type="password" placeholder=""  />

                <LoginBtn type="submit">Sign in</LoginBtn>
            </Form>            
        </LoginBox>
    </LoginContainer>
  )
}

export default Login