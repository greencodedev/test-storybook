import React, { useState } from 'react'
import FunctionalButtons from './FunctionalButtons/index'
import HighPriorityButtons from './HighPriorityButtons/index'
import DropDownMenu from './DropDownMenu'
import { HamburgerButton, HamburgerButtonEmpty } from './HamburgerButton'
// import SearchBar from './SearchBar/index'

import { StickyDiv, Logo, PrimaryMenuDiv } from './Styles'
import { useSpring } from 'react-spring'
import useWindowDimensions from '../../util/useWindowDimensions'

const Navbar = ({
    searchBar = <></>,
    onLogoClick = () => {},
    routes,
    RouterLink = (props) => <a>{props.children}</a>,
    backgroundImg,
    icons = [], // Each component in the list should have a 'key' attribute,
    highPriorityIcons = [], // Each component in the list should have a 'key' attribute,
    ...rest
}) => {
    // if showMenu == true, the big menu will be expanded
    const [isMenuExpanded, setIsMenuExpanded] = useState(false)
    const closeMenu = () => setIsMenuExpanded(false)
    const openMenu = () => setIsMenuExpanded(true)
    const toggleMenu = () => setIsMenuExpanded(!isMenuExpanded)
    const { width: windowWidth, height: windowHeight } = useWindowDimensions()

    // React-spring config, for the animation of show/hide of menu
    const height = useSpring({
        config: { tension: 500, friction: 37 },
        from: { height: windowWidth > 768 ? 64 : 48 },
        to: { height: isMenuExpanded ? windowHeight : windowWidth > 768 ? 64 : 48 },
    })

    return (
        <StickyDiv>
            <PrimaryMenuDiv isMenuExpanded={isMenuExpanded} style={height}>
                <Logo onClick={onLogoClick} backgroundImg={backgroundImg} />
                {searchBar}
                {/* <SearchBar {...rest} isMenuExpanded={isMenuExpanded} /> */}
                {highPriorityIcons.length > 0 && (
                    <HighPriorityButtons
                        isMenuExpanded={isMenuExpanded}
                        toggleMenu={toggleMenu}
                        openMenu={openMenu}
                        closeMenu={closeMenu}
                        icons={highPriorityIcons}
                        {...rest}
                    />
                )}
                <FunctionalButtons
                    isMenuExpanded={isMenuExpanded}
                    toggleMenu={toggleMenu}
                    openMenu={openMenu}
                    closeMenu={closeMenu}
                    icons={icons}
                    {...rest}
                />
                {!!routes ? (
                    <HamburgerButton
                        isMenuExpanded={isMenuExpanded}
                        toggleMenu={toggleMenu}
                        openMenu={openMenu}
                        closeMenu={closeMenu}
                    />
                ) : (
                    <HamburgerButtonEmpty />
                )}
                {!!routes && (
                    <DropDownMenu
                        isMenuExpanded={isMenuExpanded}
                        toggleMenu={toggleMenu}
                        openMenu={openMenu}
                        closeMenu={closeMenu}
                        routes={routes}
                        RouterLink={RouterLink}
                        {...rest}
                    />
                )}
            </PrimaryMenuDiv>
        </StickyDiv>
    )
}

export default Navbar
