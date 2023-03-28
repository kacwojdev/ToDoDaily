import { createGlobalStyle } from 'styled-components'
import RCBold from '../Fonts/RadioCanada/RadioCanada-Bold.ttf'
import RCBoldItalic from '../Fonts/RadioCanada/RadioCanada-BoldItalic.ttf'
import RCItalic from '../Fonts/RadioCanada/RadioCanada-Italic.ttf'
import RCLight from '../Fonts/RadioCanada/RadioCanada-Light.ttf'
import RCLightItalic from '../Fonts/RadioCanada/RadioCanada-LightItalic.ttf'
import RCMedium from '../Fonts/RadioCanada/RadioCanada-Medium.ttf'
import RCMediumItalic from '../Fonts/RadioCanada/RadioCanada-MediumItalic.ttf'
import RCRegular from '../Fonts/RadioCanada/RadioCanada-Regular.ttf'
import RCSemiBold from '../Fonts/RadioCanada/RadioCanada-SemiBold.ttf'
import RCSemiBoldItalic from '../Fonts/RadioCanada/RadioCanada-SemiBoldItalic.ttf'

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
        overflow-x: hidden:
    }

    body {
        position: relative;
        margin: 0;
        padding: 0;
        font-family: 'Radio Canada', sans-serif;
        color: black;
        background-color: #f9fafc;
    }

    button, inout, textarea {
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

export default GlobalStyle
