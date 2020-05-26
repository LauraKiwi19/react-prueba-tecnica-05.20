import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }

    body, html{
        height:100%;
    }

    html {
        box-sizing: border-box;
    }


`
export default GlobalStyles;