import React from 'react'
import {ShowUserName} from './User.style'
import {useTranslation} from 'react-i18next'

const User = ({userName, isLoggedIn}) => {
    const {t} = useTranslation()
    return (
        <ShowUserName key="User">
            {t('Hello') + (isLoggedIn ? `! ${userName ? userName : ''}` : `, ${t('Please')} `)}
        </ShowUserName>
    )
}

export default User
