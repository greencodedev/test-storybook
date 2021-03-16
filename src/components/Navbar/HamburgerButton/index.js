import React from 'react'
import {MdMenu} from 'react-icons/md'

import {HamburgerButtonWrapper, EmptyDiv} from './Styles'

export const HamburgerButton = ({isMenuExpanded, toggleMenu}) => (
    <HamburgerButtonWrapper onMouseUp={() => toggleMenu()} isMenuExpanded={isMenuExpanded}>
        <MdMenu size="2.2rem" />
    </HamburgerButtonWrapper>
)

export const HamburgerButtonEmpty = () => (
    <HamburgerButtonWrapper>
        <EmptyDiv />
    </HamburgerButtonWrapper>
)

