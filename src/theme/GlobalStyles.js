import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@700&display=swap');

    *{
        margin: 0;
        padding: 0;
    }

    body, html{
        height:100%;
    }

    html {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }


`
export default GlobalStyles;