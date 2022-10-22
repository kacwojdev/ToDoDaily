import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        width: 100%;
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Playfair Display', serif;
        color: white;
        background-color: rgb(22, 28, 37);
    }

    textarea, input {
        font-family: 'Playfair Display', serif;
        font-size: 1rem;
    }

    button {
        font-family: 'Playfair Display', serif;
        cursor: pointer;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }
`

export default GlobalStyle