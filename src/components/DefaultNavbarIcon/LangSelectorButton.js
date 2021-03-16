import React from 'react'
import {MdLanguage} from 'react-icons/md'
import {RiCloseLine} from 'react-icons/ri'
import {
    NavbarIconContainer,
    NavbarIconOpen,
    NavbarIconClose,
    NavbarIconToggle,
    NavbarIconCSSTransitionMenu,
    NavbarIconItem,
    ItemSpacer,
    ItemText,
} from './Styles'

import {useTranslation} from 'react-i18next'

/**
 * 
 * @param {Array} langList: array of {text, value}.  Text will be displayed and value will be provided to changeLang
 * @param {Function} changeLang: Called when a Language is selected.  Will be provided a single value lang = langList.value
 * @param {String} language: Current selected language 
 */
const LangSelectorButton = ({ langList, changeLang, language }) => {

    return (
        <NavbarIconContainer key="LangSelectorButton">
            <NavbarIconToggle>
                <NavbarIconOpen>
                    <MdLanguage />
                </NavbarIconOpen>
                <NavbarIconClose>
                    <RiCloseLine />
                </NavbarIconClose>
            </NavbarIconToggle>
            <NavbarIconCSSTransitionMenu timeout={200}>
            {
                langList && langList.map((lang, index) => 
                    <NavbarIconItem onClick={() => changeLang(lang)} key={'lang_'+index}>
                        <ItemSpacer />
                        <ItemText active={language == lang.value}>{lang.text}</ItemText>
                    </NavbarIconItem>
                )
            }
            </NavbarIconCSSTransitionMenu>
        </NavbarIconContainer>
    )
}

export default LangSelectorButton
