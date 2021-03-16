import styled from 'styled-components'
import NavbarIcon from '../NavbarIcon'

export const NavbarIconContainer = styled(NavbarIcon)``

export const NavbarIconToggle = styled(NavbarIcon.Toggle)`
    display: flex;
    padding: 4px 8px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    height: 100%;

    &:hover {
        // background-color: #f3f5f7;
        cursor: pointer;
    }

    & > svg {
        margin: auto;
    }
`

export const NavbarIconOpen = styled(NavbarIcon.Open)``

export const NavbarIconClose = styled(NavbarIcon.Close)``

export const NavbarIconCSSTransitionMenu = styled(NavbarIcon.CSSTransitionMenu)`
    z-index: 1;
    display: flex;
    flex-direction: column;
    top: 28px;
    right: 0;
    padding: 8px 0px;
    background-color: #fff;
    box-shadow: 0px 0px 5px #c3c5c7;
    &.enter {
        opacity: 0;
    }

    &.enter-active {
        opacity: 1;
        transition: 0.2s ease-in;
    }

    &.exit {
        opacity: 1;
    }

    &.exit-active {
        opacity: 0;
        transition: 0.2s ease-in;
    }
`

export const NavbarIconItem = styled(NavbarIcon.Item)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 26px;
    font-size: 12px;
    color: #333537;

    &:hover {
        background-color: #f3f5f7;
    }
`

export const ItemSpacer = styled.div`
    width: 6px;
`

export const ItemText = styled.div`
    font-size: 0.9rem;
    padding: 0px 2px;
    font-weight: ${({active}) => (active ? 700 : 500)};
`
