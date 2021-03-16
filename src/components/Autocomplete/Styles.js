import styled, { css } from 'styled-components'

export const AutosuggestWrapper = styled.div`
    padding: 0 0.2rem;
    position: relative;
    width: auto;
    display: flex;
    flex-wrap: nowrap;

    ${({ isMultiple }) => isMultiple && css`
    width: calc(100% - 1rem); // 0.5*2rem for padding
    padding: 0 0.5rem;
    display: flex;
    flex-wrap: wrap;
    `}

    background: ${({ theme: { autoComplete } }) => autoComplete.background};
    border-radius: ${({ theme: { autoComplete } }) => autoComplete.borderRadius}rem;
    border: ${({ theme: { autoComplete } }) =>
        `${autoComplete.borderWidth}px solid ${autoComplete.borderColorNotFocus}`};

    margin: ${({ theme: { autoComplete } }) => autoComplete.fontSize * 1.5}rem 0;

    &:focus-within {
        box-shadow: ${({ theme: { autoComplete } }) =>
        `${autoComplete.shadow[0]} 0px 0px 2px 1px, ${autoComplete.shadow[1]} 0px 0px 0px 3px`};
        border: ${({ theme: { autoComplete } }) =>
        `${autoComplete.borderWidth}px solid ${autoComplete.borderColorFocus}`};
    }

    .react-autosuggest__container {
        flex-grow: 1;
        max-width: 100%;
    }
    input {
        width: 100%;

        background: none;
        border: none;

        font-size: ${({ theme: { autoComplete } }) => autoComplete.fontSize * 0.9}rem;
        line-height: ${({ theme: { autoComplete } }) => autoComplete.fontSize * 1.5}rem;

        margin: 0;
        padding: ${({ theme: { autoComplete } }) => autoComplete.fontSize * 0.75}rem 0%;

        &:focus,
        &:active {
            outline: none;
        }
    }

    .react-autosuggest__suggestions-list {
        position: absolute;

        width: 100%;
        max-height: 200px;

        left: 0;
        z-index: 999;

        background: ${({ theme: { autoComplete } }) => autoComplete.background};
        font-size: ${({ theme: { autoComplete } }) => autoComplete.fontSize}rem;

        line-height: ${({ theme: { autoComplete } }) => autoComplete.fontSize * 1.5}rem;
        border: ${({ theme: { autoComplete } }) => autoComplete.borderWidth}px solid
            ${({ theme: { autoComplete } }) => autoComplete.borderColorFocus};

        overflow-y: auto;
        list-style: none;

        padding: 0;

        li {
            padding: 0 ${({ theme: { autoComplete } }) => autoComplete.fontSize * 0.5}rem;
            &:hover {
                background-color: ${({ theme: { autoComplete } }) => autoComplete.backgroundHover};
                cursor: pointer;
            }
        }
    }
`

export const Chip = styled.div`
    display: inline-flex;
    align-items: center;

    color: ${({ theme: { autoComplete } }) => autoComplete.chipColor};

    background-color: ${({ theme: { autoComplete } }) => autoComplete.chipBackground};
    border-radius: ${({ theme: { autoComplete } }) => autoComplete.chipBorderRadius}rem;

    margin: ${({ theme: { autoComplete } }) => autoComplete.fontSize * 0.5}rem;
    padding: ${({ theme: { autoComplete } }) => autoComplete.fontSize * 0.25}rem;

    span {
        padding: 0 ${({ theme: { autoComplete } }) => autoComplete.fontSize * 0.25}rem;
    }
    svg {
        cursor: pointer;
    }
`
