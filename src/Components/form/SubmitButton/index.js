import React from 'react'
import styled, {keyframes} from 'styled-components'
import {LoadingIcon} from '../../../Assets/index'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const ValidBtn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

    &.disabled {
        color: #161c25;
        background: #47305a;
        box-shadow: 0 0 0 #161c25;
        transform: none;
        cursor: progress;
    }
`

const LoadingIconImg = styled.img`
    margin-right: 15px;
    animation: ${rotate} 1s linear infinite;
`



const SubmitButton = ({isLoading, label}) => {

    return (
        <>
            {isLoading ? (
                <ValidBtn className="disabled" type="submit">
                    <LoadingIconImg src={LoadingIcon}></LoadingIconImg>
                    Loading...
                </ValidBtn>
            ) : (
                <ValidBtn type="submit">{label}</ValidBtn>
            )}
        </>
    )
}

export default SubmitButton