import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import { media } from './theme'

export const GlobalStyle = createGlobalStyle`
    ${reset};
    @font-face {
        font-family: 'NotoSansKR';
        src: url('/fonts/NotoSans/NotoSansKR-Black.woff2') format(('woff2'));
        font-display: swap;
    }
    @font-face {
        font-family: "DOSGothic";
        src: url("/fonts/DosGothic/DOSGothic.woff2") format("woff2");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    * {
        box-sizing: border-box;
        letter-spacing: -0.05em;
    }
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html{
        font-family: 'NotoSansKR';
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        -webkit-text-size-adjust: none;
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }
    input {
        border: none;
    }
    a {
        text-decoration: none;
        color : #000;
        &:hover {
            text-decoration: underline;
        }
    }
    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
`