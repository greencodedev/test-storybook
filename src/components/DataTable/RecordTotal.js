import React from 'react'
import { useTranslation } from 'react-i18next'
import { TotalRecordsSpan, TotalRecordWrapper } from './Styles'

const RecordTotal = ({
    total = null,
    filtered = null,
    selected = null
}) => {
    const { t } = useTranslation()
    console.log(total, filtered, selected)
    return (
        <TotalRecordWrapper>
            {total && <TotalRecordsSpan>{t('Total Items')}: {total}</TotalRecordsSpan>}
            {filtered !== null && <TotalRecordsSpan>{t('Filtered Items')}: {filtered}</TotalRecordsSpan>}
            {selected && <TotalRecordsSpan>{t('Selected Items')}: {selected}</TotalRecordsSpan>}
        </TotalRecordWrapper>
    )
}

export default RecordTotal
