import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { PrimaryButton } from '../../../styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'

const UserManagementBox = styled.div`
    @media (max-width: 880px) {
        display: none;
    }
`

const MobileUserManagementBox = styled.div`
    display: none;
    color: black;

    @media (max-width: 879px) {
        display: flex;
    }
`

const NavigationBox = styled.nav`
    width: 100%;
    background: white;
`

const NavigationBoxContainer = styled.div`
    max-width: 1180px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    margin: auto;

    @media (max-width: 879px) {
        margin-left: 50px;
        align-items: center;
    }
`

const SiteTitle = styled.span`
    margin-right: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
`
const SiteQuote = styled.p`
    color: inherit;

    @media (max-width: 550px) {
        display: none;
    }
`

const BrandBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`

const Nav = ({ handleBurgerOpen }) => {
    return (
        <header>
            <NavigationBox>
                <NavigationBoxContainer>
                    <BrandBox>
                        <h1>
                            <Link to="/">
                                <SiteTitle>TodoDaily</SiteTitle>
                            </Link>
                        </h1>
                        <SiteQuote>Clean up your daily mess.</SiteQuote>
                    </BrandBox>
                    <UserManagementBox>
                        <Link to="/login">
                            <PrimaryButton
                                aria-label="Zaloguj się do aplikacji"
                                style={{
                                    fontSize: '1.2rem',
                                    padding: '1rem 2rem'
                                }}
                            >
                                Zaloguj
                            </PrimaryButton>
                        </Link>
                        <Link to="/register">
                            <PrimaryButton
                                aria-label="Zacznij korzystać z aplikacji"
                                style={{
                                    background: 'rgb(0, 101, 255)',
                                    height: '100%',
                                    color: 'white',
                                    fontSize: '1.2rem',
                                    borderRadius: '0'
                                }}
                            >
                                Zacznij korzystać z TodoDaily
                            </PrimaryButton>
                        </Link>
                    </UserManagementBox>
                    <MobileUserManagementBox>
                        <motion.button
                            style={{
                                padding: '1.5rem',
                                border: 'none',
                                background: 'none',
                                fontSize: '2rem',
                                cursor: 'pointer'
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            transition={{
                                duration: 0.1
                            }}
                            onClick={() => handleBurgerOpen()}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </motion.button>
                    </MobileUserManagementBox>
                </NavigationBoxContainer>
            </NavigationBox>
        </header>
    )
}

const MobileNav = ({ burgerOpened }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: '86px',
                left: 0,
                width: '100%',
                background: 'white',
                display: burgerOpened ? 'flex' : 'none',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '50px',
                borderTop: '2px solid black'
            }}
        >
            <Link to="/login">
                <PrimaryButton
                    style={{
                        fontSize: '1.2rem',
                        padding: '1rem 2rem'
                    }}
                >
                    Zaloguj
                </PrimaryButton>
            </Link>
            <Link to="/register">
                <PrimaryButton
                    style={{
                        background: 'rgb(0, 101, 255)',
                        height: '100%',
                        color: 'white',
                        fontSize: '1.2rem',
                        borderRadius: '0'
                    }}
                >
                    Zacznij korzystać z TodoDaily
                </PrimaryButton>
            </Link>
        </div>
    )
}

export { MobileNav, Nav }
