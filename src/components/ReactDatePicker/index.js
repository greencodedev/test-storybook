import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import {DatePickerWrapper, CustomInput} from './Styles'
import {withTheme} from 'styled-components'

const ReactDatePicker = ({
    showTimeslot = true,
    hidden = false,
    date = new Date(),
    label = 'time',
    changeDate = () => {},
}) => {
    if (hidden) return null

    return (
        <DatePickerWrapper>
            <DatePicker
                selected={date}
                onChange={(date) => changeDate(date)}
                showTimeSelect={showTimeslot}
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption={label}
                dateFormat={`MMMM d, yyyy ${showTimeslot ? 'h:mm aa' : ''}`}
                placeholderText="YYY-M-D"
                customInput={<CustomInput />}
            />
        </DatePickerWrapper>
    )
}

export default ReactDatePicker
