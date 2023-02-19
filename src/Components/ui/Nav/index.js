import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PrimaryButton } from '../../../styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

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

    @media (max-width: 550px) {
        flex-direction: column;
    }
`

const SiteTitle = styled.span`
    margin-right: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
`
const SiteQuote = styled.p`
    color: inherit;
`

const BrandBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    @media (max-width: 550px) {
        flex-direction: column;
    }
`

const Nav = () => {
    return (
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
                <div>
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
            </NavigationBoxContainer>
        </NavigationBox>
    )
}

export default Nav
