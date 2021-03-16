import React from 'react'
import {useTranslation} from 'react-i18next'
import {LoginLink, Center} from './LoginAndRegisterButton.style'

const LoginButton = ({isLoggedIn, onLogin, onLogout}) => {
    const {t} = useTranslation()

    return (
        <React.Fragment key="LoginButton">
            {isLoggedIn ? (
                <LoginLink onClick={() => onLogout()}>{t('Logout')}</LoginLink>
            ) : (
                <Center>
                    <LoginLink
                        onClick={() => {
                            onLogin()
                        }}
                    >
                        {t('Login')}
                    </LoginLink>
                </Center>
            )}
        </React.Fragment>
    )
}

export default LoginButton
