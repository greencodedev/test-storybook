import React from 'react'
import {useTranslation} from 'react-i18next'
import {LoginLink, Center} from './LoginAndRegisterButton.style'

const LoginAndRegisterButton = ({
    closeMenu,
    isLoggedIn,
    onRegister,
    onLogin,
    onLogout,
    RouterLink,
}) => {
    const {t} = useTranslation()

    return (
        <React.Fragment key="LoginAndRegisterButton">
            {isLoggedIn ? (
                <LoginLink onClick={() => onLogout()}>{t('Logout')}</LoginLink>
            ) : (
                <Center>
                    <LoginLink
                        onClick={() => {
                            closeMenu()
                            onLogin()
                        }}
                    >
                        {t('Login')}
                    </LoginLink>
                    {'  /  '}
                    <LoginLink
                        onClick={() => {
                            closeMenu()
                            onRegister()
                        }}
                    >
                        {t('Register')}
                    </LoginLink>
                </Center>
            )}
        </React.Fragment>
    )
}

export default LoginAndRegisterButton
