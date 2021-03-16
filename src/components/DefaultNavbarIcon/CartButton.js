import React from 'react'
import {MdShoppingCart} from 'react-icons/md'
import {NavbarIconContainer, NavbarIconToggle} from './Styles'

const CartButton = ({showCart}) => {
    return (
        <NavbarIconContainer key="CartButton">
            <NavbarIconToggle onClick={showCart}>
                <MdShoppingCart />
            </NavbarIconToggle>
        </NavbarIconContainer>
    )
}

export default CartButton
