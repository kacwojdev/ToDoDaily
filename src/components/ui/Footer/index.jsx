import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    max-width: 1180px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;

    @media (max-width: 550px) {
        flex-direction: column;
    }

    @media (max-width: 880px) {
        padding: 0 50px;
    }
`

const FooterBox = styled.footer`
    background: #141875;
    color: white;
`

const Footer = () => {
    return (
        <FooterBox>
            <FooterContainer>
                <p>TodoDaily &copy; </p>
                <p>
                    site created by
                    <a style={{ color: 'grey' }} href="https://github.com/kacwojdev">
                        {' '}
                        Kacper Wojnowski
                    </a>
                </p>
            </FooterContainer>
        </FooterBox>
    )
}

export default Footer
