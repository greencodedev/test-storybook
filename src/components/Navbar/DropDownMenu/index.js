import React from 'react'
import {
    MobileMenuLink,
    MobileMenuWrapper,
    MobileMenuSection,
    MobileMenuFirstLevelLink,
} from './Styles'

const DropDownMenu = ({ closeMenu, isMenuExpanded, isLoggedIn, routes, RouterLink }) => {
    const firstLevelNode = routes
        .filter(
            (route) =>
                !route.parentId && (isLoggedIn ? route.showAfterLogin : route.showBeforeLogin)
        )
        .sort((a, b) => a.itemId - b.itemId)

    const arr = []

    for (let i = 0; i < firstLevelNode.length; i++) {
        const node = firstLevelNode[i]

        //if no path, means it's just category name.
        if (!node.path) {
            let arr_2 = []
            const children = routes
                .filter((route) => route.parentId === node.itemId)
                .sort((a, b) => a.itemId - b.itemId)
            for (let j = 0; j < children.length; j++) {
                const node = children[j]
                arr_2.push(
                    <RouterLink node={node} key={'Navbar' + node.itemId} onMouseUp={closeMenu}>
                        <MobileMenuLink node={node} closeMenu={closeMenu} />
                    </RouterLink>
                )
            }
            arr.push(
                <MobileMenuSection header={node.menuName} key={'Navbar' + node.itemId}>
                    {arr_2}
                </MobileMenuSection>
            )
        }
        //if have path, means it's a link.  Link should not have 2nd level menu
        else {
            arr.push(
                <RouterLink node={node} key={'Navbar' + node.itemId}>
                    <MobileMenuFirstLevelLink node={node} closeMenu={closeMenu} />
                </RouterLink>
            )
        }
    }

    return <MobileMenuWrapper isMenuExpanded={isMenuExpanded}>{arr}</MobileMenuWrapper>
}

export default DropDownMenu
