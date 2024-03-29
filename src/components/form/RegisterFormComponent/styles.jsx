import styled from 'styled-components'
import { _Container, PrimaryButton } from '@globalStyles'

export const RegisterContainer = styled(_Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 2rem;
    box-shadow: rgb(9 30 66 / 15%) 0px 0.5rem 1rem 0px;
    min-width: 400px;

    & > h2 {
        font-size: 1rem;
        color: #5e6c84;
    }

    @media (max-width: 550px) {
        padding: 1rem;
        min-width: 100%;
    }
`
export const RegisterInput = styled.input`
    padding: 0.5rem 1.5rem;
    background: rgb(250, 251, 252);
    border: 2px solid rgb(223, 225, 230);
    font: inherit;
    width: 100%;
    border-radius: 0.3rem;
`

export const RegisterSocial = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const SocailRegisterButton = styled(PrimaryButton)`
    -webkit-box-align: center;
    align-items: center;
    background: rgb(255, 255, 255);
    border: 0px;
    border-radius: 0.3rem;
    box-shadow: rgb(9 30 66 / 15%) 1px 1px 5px 0px;
    color: rgb(23, 43, 77);
    display: flex;
    font-size: 0.875rem;
    font-weight: 500;
    gap: 0.5rem;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0.5rem;
    text-align: left;
    width: 100%;

    & > img {
        max-width: 15px;
    }
`

export const ReturnBox = styled.div`
    display: flex;
    flex-direction: column;
`
export const Separator = styled.div`
    height: 1px;
    width: 100%;
    background: grey;
`
