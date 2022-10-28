import React from 'react'
import styled from 'styled-components';
import {RegisterBg} from '../../Assets/index';

const RegisterContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
`

const RegisterBox = styled.div`
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

const RegisterBtn = styled.button`
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

const RegisterHeader = styled.h2`
    margin-top: 0;
    font-size: 3rem;
    font-weight: 700;
`

const Register = () => {
  return (
    <RegisterContainer>
        <RegisterBox>
            <Form>
                <RegisterHeader>Register</RegisterHeader>

                <FormLabel>Username</FormLabel>
                <FormInput type="name" placeholder=""  />

                <FormLabel>Email Address</FormLabel>
                <FormInput type="email" placeholder=""  />

                <FormLabel>Password</FormLabel>
                <FormInput type="password" placeholder=""  />

                <FormLabel>Re-Password</FormLabel>
                <FormInput type="password" placeholder=""  />

                <RegisterBtn type="submit">Register</RegisterBtn>
            </Form>            
        </RegisterBox>
    </RegisterContainer>
  )
}

export default Register