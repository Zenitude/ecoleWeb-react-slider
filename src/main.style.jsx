import styled, { createGlobalStyle } from "styled-components";
import colors from "./utils/styles/colors";

const GlobalStyle = createGlobalStyle`
    *, ::before, ::after {
        box-sizing = border-box;
        margin: 0;
        padding: 0;
        z-index: 1;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
        background: ${colors.primary};
        z-index: 1;
    }
`;

export default GlobalStyle;