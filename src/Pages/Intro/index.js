import React from 'react'
import {Navigate, Link} from 'react-router-dom'
import {WorkerImg} from '../../Assets/index'


import styled from 'styled-components'

const IntroBox = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: auto 15vw;

  @media (max-width: 1500px) {
    margin: auto 50px;
  }

  @media (max-width: 1180px) {
    flex-direction: column;
    margin: 50px auto;
  }
`
const TextsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;

`

const SiteTitle = styled.h1`
  margin: 0 0 50px 0;
  font-size: 3rem;
  font-weight: bold;
`

const SiteDescription = styled.p`
  margin: 0 0 50px 0;
  font-size: 2rem;
  font-weight: 300;
  color: #4B6166;
`

const GetStartedBtn = styled.button`
  margin: 0 0 25px 0;
  width: max-content;
  border: none;
  border-radius: 15px;
  background: #3ca0f7;
  padding: 15px 30px;
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

const HaveAccountLabel = styled.p`
  font-size: 1rem;
  color: #6C6C6C;
`

const SignInBtn = styled.button`
  border: none;
  background: none;
  color: white;
`

const WorkerIcon = styled.img`
  @media (max-width: 550px) {
    width: 80%;
  }
`

const Intro = (props) => {

  console.log(props)

  return (
    <IntroBox>
        {props.signedUser && (
            <Navigate to="/groups" replace={true} />
        )}
        <TextsBox>
            <SiteTitle>ToDoDaily</SiteTitle>
            <SiteDescription>Your helping hand to <br></br> control the daily chaos</SiteDescription>
            <GetStartedBtn>
              <Link to="/user/register">Get Started</Link>
            </GetStartedBtn>
            <HaveAccountLabel>
              I have an account and want to 
              <SignInBtn>
                <Link to="/user/login">Log in.</Link>
              </SignInBtn>
            </HaveAccountLabel>
        </TextsBox>
        <WorkerIcon src={WorkerImg} alt={"Worker icon"} />
    </IntroBox>
  )
}

export default Intro