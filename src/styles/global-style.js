import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
    }

    body{
        font-family: 'Montserrat', sans-serif;
    }
    p{
        color: green;
        font-weight: bold;
        letter-spacing: 1px;
    }

    a{
        text-decoration: none;
    }

    b{
        color: blue;
    }

 

   
`