import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationBox = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 3rem;
    
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
            <BrandBox>
                <h1>
                    <Link to="/">
                        <SiteTitle>TodoDaily</SiteTitle>
                    </Link>
                </h1>
                <SiteQuote>Clean up your daily mess.</SiteQuote>
            </BrandBox>
        </NavigationBox>
    )
}

export default Nav