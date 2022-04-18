import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import { media, theme } from './theme'

export const GlobalStyle = createGlobalStyle`
    ${reset};
    html,body {
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	line-height: 1.6;
	font-size: 18px;
    }
    * {
        box-sizing: border-box;
        letter-spacing: -0.05em;
    }
    h1 {
        ${theme.font.headline};
    }
    h2 {
        ${theme.font.subTitle_1};
    }
    h3 {
        ${theme.font.subTitle_2};
    }
    h4 {
        ${theme.font.subTitle_3};
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
        color : ${theme.color.purple};
        &:hover {
            text-decoration: underline;
        }
    }
    img {
        max-width: 100%;
	    display: block;
	    border: 10px solid #ececec;
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
