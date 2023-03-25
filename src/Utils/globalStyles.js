import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
