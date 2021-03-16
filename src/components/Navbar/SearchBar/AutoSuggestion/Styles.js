import styled, {css} from 'styled-components'
import {down} from 'styled-breakpoints'

const baseStyle = css`
    color: ${({theme: {navbar}}) => navbar.autosuggestColor};
    font-size: ${({theme: {navbar}}) => navbar.fontSize}rem;

    border: ${({theme: {navbar}}) => `${navbar.borderWidth}px solid ${navbar.background}`};
    background: ${({theme: {navbar}}) => navbar.autosuggestBackground};
`

export const AutosuggestWrapper = styled.div`
    border-radius: ${({theme: {navbar}}) => navbar.borderRadius}rem;
    background-color: ${({theme: {navbar}}) => navbar.backgroundSearchField};

    display: flex;
    width: 100%;

    .react-autosuggest__container {
        flex-grow: 1;
    }

    input {
        position: relative;

        padding-left: 5%;
        font-size: ${({theme: {navbar}}) => navbar.autosuggestFontSize}rem;

        border-radius: ${({theme: {navbar}}) => navbar.borderRadius}rem 0 0
            ${({theme: {navbar}}) => navbar.borderRadius}rem;
        border-style: none;

        height: 100%;
        width: 100%;
        outline: none;
    }

    .react-autosuggest__suggestions-list {
        ${baseStyle}

        max-height: 200px;

        width: 222px;
        z-index: 10;
        position: absolute;
        padding: 0 ${({theme: {navbar}}) => navbar.fontSize * 0.5}rem;

        overflow-y: auto;
        list-style: none;
        box-shadow: 3px 4px 23px -8px rgba(0, 0, 0, 0.75);

        li {
            padding: 0;
            &:hover {
                background-color: ${({theme: {navbar}}) => navbar.autosuggestHoverBackground};
                cursor: pointer;
            }
        }
    }
`
