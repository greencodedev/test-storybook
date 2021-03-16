import React, {useState} from 'react'
import styled from 'styled-components'
import {up, down} from 'styled-breakpoints'

import {useTranslation} from 'react-i18next'

import {useSpring, animated as a, config} from 'react-spring'
import {MdExpandMore, MdExpandLess} from 'react-icons/md'
import {TiDocumentText, TiInfoLarge, TiTabsOutline} from 'react-icons/ti'

const SecondLevelLink = styled(a.div)`
    flex-flow: row wrap;
    justify-content: start;
    display: flex;
    flex-wrap: wrap;
    a {
        color: ${({theme: {navbar}}) => navbar.mobileMenuColor};
        display: flex;
        width: 33%;
        @media screen and (max-width: 767px) {
            width: 50%;
        }
        @media screen and (max-width: 467px) {
            width: 100%;
        }
    }
`

const SecondLvLinkWrapper = styled(a.div)`
    will-change: transform, opacity, height;

    overflow: hidden;
`

const WrapperDiv = styled.div`
    display: grid;
`

const Wrapper = styled.div`
    display: flex;
`

const ArrowWrapper = styled(a.div)`
    grid-column: 1;
    grid-row: 1;
`

const ExpandButton = ({menuOpen}) => {
    const {transform, opacity} = useSpring({
        opacity: menuOpen ? 1 : 0,
        transform: `perspective(600px) rotateX(${menuOpen ? 180 : 0}deg)`,
    })

    return (
        <WrapperDiv>
            <ArrowWrapper
                style={{
                    opacity: opacity.interpolate((o) => 1 - o),
                    transform,
                }}
            >
                <MdExpandLess size="23" />
            </ArrowWrapper>
            <ArrowWrapper
                style={{
                    opacity,
                    transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
                }}
            >
                <MdExpandMore size="23" />
            </ArrowWrapper>
        </WrapperDiv>
    )
}

const MobileMenuSectionHeader = styled(a.div)`
    display: flex;

    line-height: 1;

    padding: ${({theme: {navbar}}) =>
        `${navbar.fontSize * 0.5}rem ${navbar.fontSize * 0.5}rem ${navbar.fontSize * 0.25}rem 0`};

    cursor: pointer;

    ${up('tablet')} {
        justify-content: space-between;

        border-bottom: 1px solid ${({theme: {navbar}}) => navbar.mobileMenuBorderBottom};

        padding: 0.5rem;
        margin-bottom: 0.5rem;
        ${({theme: {navbar}}) => `${navbar.fontSize * 1}rem ${navbar.fontSize * 0.5}rem `};
    }
`

const RandomMenuIcon = ({itemId}) => {
    const iconsData = [TiDocumentText, TiInfoLarge, TiTabsOutline]
    const index = (itemId % 3) - 1

    const IconComponent = iconsData[index]
    return <IconComponent size="3rem" />
}
const MenuName = styled.span`
    margin: auto 0.5rem;
    ${down('tablet')} {
        margin-left: ${({theme: {navbar}}) => `${navbar.fontSize * 1}rem `};
    }
`

export const MobileMenuLink = styled(({node, closeMenu}) => {
    const {t} = useTranslation()
    const imgSize = 48
    return (
        <Wrapper onClick={closeMenu}>
            {node.icon ? (
                <img src={node.icon} width={imgSize} height={imgSize} alt={node.menuName} />
            ) : (
                <RandomMenuIcon itemId={node.itemId} />
            )}

            <MenuName> {t(node.menuName)}</MenuName>
        </Wrapper>
    )
})`
    display: flex;

    font-size: ${({theme: {navbar}}) => navbar.fontSize}rem;
    color: ${({color, theme: {navbar}}) => (color ? color : navbar.color)};
    text-align: center;

    padding: ${({theme: {navbar}}) => navbar.fontSize * 0.25}rem;

    width: 8rem;

    ${down('tablet')} {
        flex-direction: row;
        justify-content: end;

        width: 100%;

        padding-top: ${({theme: {navbar}}) => navbar.fontSize * 0.5}rem;
    }
`
export const MobileMenuWrapper = styled.div`
    grid-area: menu;

    will-change: height, opacity;

    padding: ${({theme: {navbar}}) => navbar.fontSize}rem 0;

    ${up('tablet')} {
        display: ${({isMenuExpanded}) => (isMenuExpanded ? 'grid' : 'none')};

        grid-template-columns: repeat(3, auto);
        justify-content: space-between;
        grid-column-gap: 4rem;
        grid-row-gap: 1rem;
    }

    ${down('tablet')} {
        display: ${({isMenuExpanded}) => (isMenuExpanded ? 'block' : 'none')};
    }
`

export const MobileMenuSection = ({header, children, ...props}) => {
    const {t} = useTranslation()
    const [menuOpen, setMenuOpen] = useState(false)
    const [hover, setHover] = useState(false)
    const ref = React.useRef('200px')

    const {height, opacity, transform} = useSpring({
        config: config.stiff,
        from: {height: 0, opacity: 0, transform: 'translate3d(0,-80px,0)'},
        to: {
            height: menuOpen ? ref.current.clientHeight : 0,
            opacity: menuOpen ? 1 : 0,
            transform: `translate3d(0,${menuOpen ? 0 : -80}px,0)`,
        },
    })
    const {color, fontSize} = useSpring({
        config: config.stiff,
        from: {color: 'black', fontSize: '1.1rem'},
        to: {
            color: hover ? '#fff' : '#ccc',
            fontSize: hover ? '1.25rem' : '1.1rem',
        },
    })

    return (
        <div {...props}>
            <MobileMenuSectionHeader
                onMouseUp={() => setMenuOpen(!menuOpen)}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onFocus={() => setHover(true)}
                onBlur={() => setHover(false)}
                style={{color, fontSize}}
            >
                {t(header)}
                <ExpandButton menuOpen={menuOpen} />
            </MobileMenuSectionHeader>
            <SecondLvLinkWrapper style={{height, opacity}}>
                <SecondLevelLink style={{transform}} ref={ref}>
                    {children}
                </SecondLevelLink>
            </SecondLvLinkWrapper>
        </div>
    )
}

export const MobileMenuFirstLevelLink = styled(({node, closeMenu}) => {
    const {t} = useTranslation()
    const [hover, setHover] = useState(false)
    const {color, fontSize} = useSpring({
        config: config.stiff,
        from: {color: '#ccc', fontSize: '1.1rem'},
        to: {
            color: hover ? '#fff' : '#ccc',
            fontSize: hover ? '1.25rem' : '1.1rem',
        },
    })

    return (
        <>
            <MobileMenuSectionHeader
                style={{color, fontSize}}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onFocus={() => setHover(true)}
                onBlur={() => setHover(false)}
                onClick={closeMenu}
            >
                {t(node.menuName)}
            </MobileMenuSectionHeader>
        </>
    )
})``
