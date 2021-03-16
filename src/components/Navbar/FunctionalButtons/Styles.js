import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const AlwaysShowSpan = styled.span`
    align-self: center;

    cursor: pointer;
    white-space: nowrap;

    font-weight: ${({ theme: { navbar } }) => navbar.fontWeight};

    padding-left: ${({ theme: { navbar } }) => navbar.fontSize * 0.3125}rem;
`

export const ShowUserName = styled.div`
    align-self: center;

    color: ${({ theme: { navbar } }) => navbar.userNameColor};

    white-space: nowrap;
`
export const FunctionButtonDiv = styled.div`
    grid-area: control;

    display: grid;
    grid-template-columns: auto;
    grid-auto-flow: column;
    grid-template-rows: auto;
    grid-column-gap: 1.5rem;
    align-items: center;

    line-height: ${({ theme: { navbar } }) => navbar.fontSize}rem;
    color: ${({ theme: { navbar } }) => navbar.color};

    ${down('tablet')} {
        display: ${({ isMenuExpanded }) => (isMenuExpanded ? 'grid' : 'none')};
        justify-self: start;
    }
`
