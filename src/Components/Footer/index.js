import React from 'react'
import styled from 'styled-components';

const FooterBox = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 50px;
`


const Footer = () => {
  return (
    <FooterBox>
        <p>TodoDaily &copy; </p>
        <p>site created by<a href="https://github.com/kacwojdev"> Kacper Wojnowski</a></p> 
    </FooterBox>
  )
}

export default Footer