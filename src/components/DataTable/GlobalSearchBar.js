import React from 'react'
import { useTranslation } from 'react-i18next'
import { ShowTotalRecords } from './Styles'

const GlobalSearchBar = ({
    searched = null
}) => {
    const { t } = useTranslation()
    return searched !== null && <ShowTotalRecords>{t('Searched Items')}: {searched}<br /></ShowTotalRecords>
}

export default GlobalSearchBar
