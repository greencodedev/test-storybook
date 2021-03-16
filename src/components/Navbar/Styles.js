import styled, { css } from 'styled-components'
import { down } from 'styled-breakpoints'

import { animated } from 'react-spring'

export const StickyDiv = styled.header`
    position: sticky;
    top: 0;
    z-index: 5;
`

export const Logo = styled.a`
    grid-area: logo;

    width: 130px;
    cursor: pointer;
    ${({ backgroundImg }) =>
        css`
            background: url(${backgroundImg});
        `}
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export const PrimaryMenuDiv = styled(animated.nav)`
    ${({ isMenuExpanded }) =>
        css`
            overflow: ${!isMenuExpanded ? 'visible' : 'auto'};
        `}

    background: ${({ theme: { navbar } }) => navbar.background};
    padding: 0 ${({ theme: { navbar } }) => navbar.fontSize * 2}rem;

    display: grid;
    grid-template-columns: min-content 1fr auto minmax(3rem, min-content) min-content;
    grid-template-rows: 64px auto;
    grid-template-areas:
        'logo searchbar highpriority control hamburger'
        'menu menu menu menu menu';
    grid-column-gap: 0.75rem;

    ${down('tablet')} {
        grid-template-columns: 1fr min-content auto;
        grid-template-rows: 48px repeat(2, minmax(auto, 60px)) auto;

        grid-row-gap: 0.2rem;
        grid-template-areas:
            'logo highpriority hamburger'
            'control control control '
            'searchbar searchbar searchbar'
            'menu menu menu';
    }
`
