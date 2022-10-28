import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationBox = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    border-bottom: 2px solid rgb(29, 48, 69);
    
    @media (max-width: 550px) {
        flex-direction: column;
    }
`

const StatusButtons = styled.button`
    background-color: ${props => props.done ? 'rgb(66, 245, 155)' : (props.todo ? 'rgb(245, 72, 66)' : 'rgb(242, 228, 24)')};

    padding: 5px 15px;
    border-radius: 10px;
    color: white;
    font-size: 1rem;
    font-family: 'Playfair Display', serif;
    cursor: pointer;
`

const SiteTitle = styled.h1`
    font-size: 2rem;
    cursor: pointer;
    margin-right: 1rem;
`
const SiteQuote = styled.p`
    color: rgb(75 97 102);
`

const BrandBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    @media (max-width: 550px) {
        flex-direction: column;
    }
`

const ButtonsBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const RegisterBtn = styled.button`
    border: none;
    border-radius: 15px;
    background: #3ca0f7;
    padding: 15px 20px;
    color: white;
    font-size: 1.2rem;
    box-shadow: 0 5px 0 white;
    transition: .1s ease-in;

    &:hover {
        transform: translateY(5px);
        box-shadow: 0 0 0 white;
        background: #148bf3;
    }
`
const LoginBtn = styled.button`
    margin-right: 20px; 
    border: none;
    background: none;
    color: white;
    font-size: 1.2rem;
    transition: .1s ease-in;

    &:hover {
        color: grey;
    }
`

const Nav = () => {
  return (
    <NavigationBox>
        <BrandBox>
            <SiteTitle>
                <Link to="/">TodoDaily</Link>
            </SiteTitle>
            <SiteQuote>Clean up your daily mess.</SiteQuote>
        </BrandBox>
        <ButtonsBox>
            <Link to="/user/login">
                <LoginBtn>Sign in</LoginBtn>
            </Link>
            <Link to="/user/register">
                <RegisterBtn>Register</RegisterBtn>
            </Link>
        </ButtonsBox>
    </NavigationBox>
  )
}

export default Nav