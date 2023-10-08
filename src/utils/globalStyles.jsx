import styled, { createGlobalStyle } from 'styled-components'
import RCBold from '@fonts/RadioCanada-Bold.ttf'
import RCBoldItalic from '@fonts/RadioCanada-BoldItalic.ttf'
import RCItalic from '@fonts/RadioCanada-Italic.ttf'
import RCLight from '@fonts/RadioCanada-Light.ttf'
import RCLightItalic from '@fonts/RadioCanada-LightItalic.ttf'
import RCMedium from '@fonts/RadioCanada-Medium.ttf'
import RCMediumItalic from '@fonts/RadioCanada-MediumItalic.ttf'
import RCRegular from '@fonts/RadioCanada-Regular.ttf'
import RCSemiBold from '@fonts/RadioCanada-SemiBold.ttf'
import RCSemiBoldItalic from '@fonts/RadioCanada-SemiBoldItalic.ttf'

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Radio Canada';
        src: url(${RCBold}) format('truetype');
        font-weight: 700;
    }

    @font-face {
        font-family: 'Radio Canada';
        src: url(${RCBoldItalic}) format('truetype');
        font-style: italic;
        font-weight: 700;
    }

    @font-face {
        font-family: 'Radio Canada';
        src: url(${RCItalic}) format('truetype');
        font-style: italic;
        font-weight: 400;
    }

    @font-face {
        font-family: 'Radio Canada';
        src: url(${RCLight}) format('truetype');
        font-weight: 300;
    }

    @font-face {
        font-family: 'Radio Canada';
        src: url(${RCLightItalic}) format('truetype');
        font-style: italic;
        font-weight: 300;
    }

    @font-face {
        font-family: 'Radio Canada';
        src: url(${RCMedium}) format('truetype');
        font-weight: 500;
    }

    @font-face {
        font-family: 'Radio Canada';
        src: url(${RCMediumItalic}) format('truetype');
        font-style: italic;
        font-weight: 500;
    }

    @font-face {
        font-family: 'Radio Canada';
        src: url(${RCRegular}) format('truetype');
        font-weight: 400;
    }

    @font-face {
        font-family: 'Radio Canada';
        src: url(${RCSemiBold}) format('truetype');
        font-weight: 600;
    }

    @font-face {
        font-family: 'Radio Canada';
        src: url(${RCSemiBoldItalic}) format('truetype');
        font-style: italic;
        font-weight: 600;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    body {
        position: relative;
        margin: 0;
        padding: 0;
        font-family: 'Radio Canada', sans-serif;
        color: black;
        background-color: #f9fafc;
    }

    button, input, textarea {
        font: inherit;
    }

    a {
        text-decoration: none;
        color: black;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }
`

const _Container = styled.div`
    max-width: 1180px;
    margin: auto;
`

const _Button = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 1rem;
    font-size: 0.7rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`

const PrimaryButton = styled(_Button)`
    background: white;
    color: black;
`

const DarkenButton = styled(_Button)`
    background: black;
    color: white;

    &:hover {
        box-shadow: 0 0 10px rgb(0, 0, 0, 0.6);
    }
`

const TaskOptionsButton = styled.button`
    min-height: 32px;
    min-width: 32px;
    border: none;
    border-radius: 50%;
    background: white;
    font-size: 0.8rem;
    color: grey;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: rgb(232 232 232);
    }
`

const HeaderBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgb(237 237 237);
    padding: 0.5rem 3rem;
`

const PageHeader = styled.h2`
    font-size: 1.2rem;
    font-weight: 700;
`

const HeaderBarGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 10px;
`

const GroupLabel = styled.span`
    font-size: 0.7rem;
    color: rgb(112 112 112);
`

const MainContentContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 3rem;
`

const _Card = styled.div`
    padding: 0.8rem 1rem;
    transition: 0.1s ease-in-out;
    cursor: pointer;
`

const CardGroup = styled(_Card)`
    display: flex;
    flex: 0 0 48px;
    justify-content: left;
    gap: 10px;
    border: 0.1rem solid rgb(237 237 237);
    border-radius: 10px;
    color: rgb(112 112 112);
    font-size: 1rem;
    transition: all 0.2s ease-in;

    &:hover {
        background-color: rgb(237 237 237);
    }
`

const CardTask = styled(_Card)`
    height: fit-content;
    display: flex;
    flex-direction: column;
    flex: 0 0 48px;
    justify-content: left;
    gap: 10px;
    border: 0.1rem solid rgb(237 237 237);
    border-radius: 10px;
    position: relative;
`

const TasksViewStyled = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin-top: 1rem;
    align-items: flex-start;
`

export {
    GlobalStyle,
    PrimaryButton,
    DarkenButton,
    TaskOptionsButton,
    HeaderBar,
    PageHeader,
    HeaderBarGroup,
    GroupLabel,
    MainContentContainer,
    CardGroup,
    CardTask,
    TasksViewStyled,
    _Container,
    _Button,
    _Card
}
