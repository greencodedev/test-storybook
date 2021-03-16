import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from '../../const/globalStyles'
import ReactDatePicker from './index'
import {theme} from '../../const/theme'

export default {title: 'React Date Picker'}

export const DefaultReactDatePicker = () => {
    const [r_date, setR_date] = useState(new Date())
    const changeR_date = (date) => {
        setR_date(date)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ReactDatePicker date={r_date} changeDate={changeR_date} />
        </ThemeProvider>
    )
}
