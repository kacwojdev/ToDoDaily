import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'

import FormArea from '../../Components/form/FormArea'
import SubmitButton from '../../Components/form/SubmitButton'

import { emailValidator, pswdValidator, nameValidator } from '../../Utils/helpers'

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

const RegisterHeader = styled.h2`
    margin-top: 0;
    font-size: 3rem;
    font-weight: 700;
`

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.fullNameRef = React.createRef()
        this.emailAddressRef = React.createRef()
        this.pswdRef = React.createRef()
        this.rePswdRef = React.createRef()

        this.state = {
            isEmailValid: true,
            isPswdValid: true,
            isRePswdValid: true,
            isNameValid: true
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        await this.setState({
            isNameValid: nameValidator(this.fullNameRef.current.value),
            isEmailValid: emailValidator(this.emailAddressRef.current.value),
            isPswdValid: pswdValidator(this.pswdRef.current.value),
            isRePswdValid: this.pswdRef.current.value === this.rePswdRef.current.value,
        })

        console.log('RESULTS')
        console.log('name', this.fullNameRef.current.value, this.state.isNameValid)
        console.log('email', this.emailAddressRef.current.value, this.state.isEmailValid)
        console.log('pswd', this.pswdRef.current.value, this.state.isPswdValid)
        console.log('rePswd', this.rePswdRef.current.value, this.state.isRePswdValid)
    }

    render() {
        return (
            <RegisterContainer>
                <RegisterBox>
                    <Form onSubmit={this.handleSubmit}>
                        <RegisterHeader>Register</RegisterHeader>

                        <FormArea dataType="fullName" ref={this.fullNameRef} type="name" label="Full name" isValid={this.state.isNameValid} notValidMsg={"Incorrect name!"} />
                        <FormArea dataType="email" ref={this.emailAddressRef} type="email" label="Email Address" isValid={this.state.isEmailValid} notValidMsg={"Incorrect email address!"} />
                        <FormArea dataType="pswd" ref={this.pswdRef}  type="password" label="Password" isValid={this.state.isPswdValid} notValidMsg={"Password must contain small, capital, 8 letters and special character!"} />
                        <FormArea dataType="repswd" ref={this.rePswdRef} type="password" label="Repeat your password" isValid={this.state.isRePswdValid} notValidMsg={"Passwords are not identical!"} />

                        <SubmitButton label="Register"/>
                    </Form>            
                </RegisterBox>
            </RegisterContainer>
        )
    }
}

export default Register