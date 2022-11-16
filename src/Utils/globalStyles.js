import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        width: 100%;
        height: 100%;
    }

    body {
        position: relative;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        color: white;
        background-color: rgb(22, 28, 37);
    }

    textarea, input {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
    }

    button {
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: white;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }
`

export default GlobalStyle