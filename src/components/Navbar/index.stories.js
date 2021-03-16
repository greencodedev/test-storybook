import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { theme } from '../../const/theme'
import { routes } from '../../const/routes'
import GlobalStyles from '../../const/globalStyles'
import Navbar from './index'
import DefaultNavbarIcon from '../DefaultNavbarIcon'

const backgroundURL = '/icons/logo_white.png'

i18next.use(initReactI18next).init({
    // init launch for forcing preload translation file
    resources: {
        'zh-HK': {
            common: {
                Login: '登入',
                Logout: '登出',
                Hello: '你好',
            },
        },
        en: {
            common: {
                Login: 'Login',
                Logout: 'Logout',
                Hello: 'Hello',
            },
        },
    },
    lng: ['en', 'zh-HK'],
    fallbackLng: 'en',
    preload: ['zh-HK', 'en'],
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
})

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

export default { title: 'Navbar' }

export const defaultNav = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
    </ThemeProvider>
)

export const withIconsProp = () => {
    const [isLogin, setIsLogin] = React.useState(false)
    const [lang, changeLang] = React.useState({ value: 'en', text: 'ENG' })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Navbar
                icons={[
                    DefaultNavbarIcon.LangSelectorButton,
                    DefaultNavbarIcon.User,
                    DefaultNavbarIcon.LoginAndRegisterButton,
                ]}
                backgroundImg={backgroundURL}
                userName={'John'}
                onLogin={() => {
                    alert('Login')
                    setIsLogin(!isLogin)
                }}
                onRegister={() => {
                    alert('Register')
                }}
                onLogout={() => {
                    alert('Logout')
                    setIsLogin(!isLogin)
                }}
                isLoggedIn={isLogin}
                langList={langList}
                language={lang}
                changeLang={changeLang}
            />
        </ThemeProvider>
    )
}

export const withLoggedIn = () => {
    const RouterLink = (props) => <a>{props.children}</a>
    const [isLogin, setIsLogin] = React.useState(true)
    const [lang, changeLang] = React.useState({ value: 'en', text: 'ENG' })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Navbar
                onLogin={() => {
                    alert('Login')
                    setIsLogin(!isLogin)
                }}
                onRegister={() => {
                    alert('Register')
                }}
                onLogout={() => {
                    alert('Logout')
                    setIsLogin(!isLogin)
                }}
                isLoggedIn={isLogin}
                userName="Gatsby"
                icons={[
                    DefaultNavbarIcon.LangSelectorButton,
                    DefaultNavbarIcon.User,
                    DefaultNavbarIcon.LoginAndRegisterButton,
                ]}
                backgroundImg={backgroundURL}
                routes={routes}
                RouterLink={RouterLink}
                langList={langList}
                language={lang}
                changeLang={changeLang}
            />
        </ThemeProvider>
    )
}

export const withHighPriorityIcons = () => {
    const RouterLink = (props) => <a>{props.children}</a>
    const [isLogin, setIsLogin] = React.useState(false)
    const [lang, changeLang] = React.useState({ value: 'en', text: 'ENG' })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Navbar
                onLogin={() => {
                    alert('Login')
                    setIsLogin(!isLogin)
                }}
                onRegister={() => {
                    alert('Register')
                }}
                onLogout={() => {
                    alert('Logout')
                    setIsLogin(!isLogin)
                }}
                isLoggedIn={isLogin}
                userName="Gatsby"
                icons={[
                    DefaultNavbarIcon.LangSelectorButton,
                    DefaultNavbarIcon.User,
                    DefaultNavbarIcon.LoginAndRegisterButton
                ]}
                backgroundImg={backgroundURL}
                highPriorityIcons={[DefaultNavbarIcon.CartButton]}
                routes={routes}
                RouterLink={RouterLink}
                langList={langList}
                language={lang}
                changeLang={changeLang}
            />
        </ThemeProvider>
    )
}
