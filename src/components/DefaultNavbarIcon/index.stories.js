import React, {useState, useEffect} from 'react'
import {ThemeProvider} from 'styled-components'

import DefaultNavbarIcon from './index'

import {theme} from '../../const/theme'
import GlobalStyles from '../../const/globalStyles'

export default {title: 'Default Navbar Icons'}

export const defaultLangSelectorButton = () => {
    const [language, setLang] = useState({ value: 'en', text: 'ENG' })
    const langList = [
        {
            value: 'en',
            text: 'ENG',
        },
        {
            value: 'zh-HK',
            text: '中',
        },
    ]

    return (
        <div
            style={{
                height: 64,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                background: '#232F3E',
            }}
        >
            <DefaultNavbarIcon.LangSelectorButton
                langList={langList}
                changeLang={setLang}
                language={language}
                i18n={{language: language.value, changeLanguage: (value) => {
                    const lang = value == 'en' ? { value: 'en', text: 'ENG' } : { value: 'zh-HK', text: '中' };
                    setLang(lang)}}}
            />
        </div>
    )
}

export const defaultCartButton = () => {
    return (
        <div
            style={{
                height: 64,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                background: '#232F3E',
            }}
        >
            <DefaultNavbarIcon.CartButton
                showCart={() => {
                    console.log('Toggle show cart.')
                }}
            />
        </div>
    )
}

export const defaultLoginButton = () => {
    const [isLogin, setIsLogin] = React.useState(false)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div
                style={{
                    height: 64,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    background: '#232F3E',
                    padding: '0 1rem'
                }}
            >
                <DefaultNavbarIcon.LoginButton
                    isLoggedIn={isLogin}
                    onLogin={() => {
                        alert('Login')
                        setIsLogin(!isLogin)
                    }}
                    onLogout={() => {
                        alert('Logout')
                        setIsLogin(!isLogin)
                    }}
                />
            </div>
        </ThemeProvider>
    )
}
