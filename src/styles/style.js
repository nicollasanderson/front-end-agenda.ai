import { createGlobalStyle } from "styled-components";

export const GlobaStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        height: 100vh;
    }
    body, input, button {
        font-size: 1rem;
    }
    h1, h2, h3, h4, p, span {
        font-weight: 700;
    }
    button {
        cursor: pointer;
    }
    figcaption {
        display: none;
    }
    ul{
        list-style: none;
    }
`;
