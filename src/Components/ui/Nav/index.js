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


const Nav = () => {

    return (
        <NavigationBox>
            <BrandBox>
                <SiteTitle>
                    <Link to="/">TodoDaily</Link>
                </SiteTitle>
                <SiteQuote>Clean up your daily mess.</SiteQuote>
            </BrandBox>
        </NavigationBox>
    )
}

export default Nav