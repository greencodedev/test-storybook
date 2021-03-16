import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {theme} from '../../const/theme'
import DateTimePicker from './index'
import GlobalStyles from '../../const/globalStyles'

export default {
    title: 'Date Time Picker',
}

export const DefaultDateTimePicker = () => {
    const [date, setDate] = useState(new Date())
    const changeDate = (date) => {
        setDate(date)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <DateTimePicker date={date} changeDate={changeDate} />
        </ThemeProvider>
    )
}
