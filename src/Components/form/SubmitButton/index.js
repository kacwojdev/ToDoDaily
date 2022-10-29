import React from 'react'
import styled from 'styled-components'

const ValidBtn = styled.button`
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



const SubmitButton = ({label}) => {
  return (
      <ValidBtn type="submit">{label}</ValidBtn>
  )
}

export default SubmitButton