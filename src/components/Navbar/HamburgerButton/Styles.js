import styled from 'styled-components'

export const HamburgerButtonWrapper = styled.div`
    grid-area: hamburger;

    align-self: center;
    justify-self: right;

    color: ${({showMenu, theme: {navbar}}) =>
        showMenu ? navbar.activeHamburgerColor : navbar.color};

    cursor: pointer;
    padding-left: 1rem;
`

export const EmptyDiv = styled.div`
    width: 2.2rem;
`
