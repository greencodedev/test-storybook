import React, {useRef} from 'react'
import moment from 'moment'
import {FixedSizeGrid as Grid} from 'react-window'

import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

import {useTranslation} from 'react-i18next'

import {
    WrapperButtons,
    DatePickerWrapper,
    DayDiv,
    MonthDiv,
    YearDiv,
    DateHeader,
    DHBottom,
    IconWrapper,
    TimeSlotWrapper,
    WeekHeader,
    WeekHeaderUnit,
    Year,
} from './Styles'

/*const firstDay = moment()
    .date(1)
    .day(0)
    .startOf('date')*/

const WIDTH = 42.5,
    HEIGHT = 34

const DateTimePicker = ({
    showTimeslot = false,
    hidden = false,
    label = null,
    date = moment().toDate(),
    changeDate = () => {},
}) => {
    const {t} = useTranslation()
    const [scrollPos, setScrollPos] = React.useState(0)
    const calendarRef = useRef()

    const onGridScroll = ({scrollTop}) => {
        // console.log('scroll', scrollTop)
        setScrollPos(scrollTop)
    }

    const onUpArrowClick = () => {
        calendarRef.current.scrollTo({
            top: scrollPos - HEIGHT * 4,
            behavior: 'smooth',
        })
    }

    const onDownArrowClick = () => {
        // console.log('click', calendarRef.current)
        calendarRef.current.scrollTo({
            top: scrollPos + HEIGHT * 4,
            behavior: 'smooth',
        })
    }

    /*const changeTimeSlot = (e, i) => {
        e.preventDefault()
        this.setState({selectedTimeSlotIndex: i})
        this.props.onChange(
            moment(this.props.selectedDate)
                .startOf('day')
                .add(this.props.timeslot[i].value, 'h')
        )
    }*/

    const Day = ({columnIndex, rowIndex, style}) => {
        const dayOffset = rowIndex * 7 + columnIndex - 60
        const thisDate = moment().add(dayOffset, 'd')
        const selected = moment(date).isSame(moment(thisDate), 'day')
        // console.log(thisDate.format('MMM/D/YYYY'), 'date')
        return (
            <div style={style} onClick={() => changeDate(thisDate)}>
                {thisDate.date() === 1 ? (
                    thisDate.format('MMM') === 'Jan' ? (
                        <YearDiv selected={selected}>
                            <div>{thisDate.format('YYYY')}</div>
                            <span>{thisDate.format('MMM/D')}</span>
                        </YearDiv>
                    ) : (
                        <MonthDiv selected={selected}>
                            <div>{thisDate.format('MMM')}</div>
                            <span>1</span>
                        </MonthDiv>
                    )
                ) : (
                    <DayDiv selected={selected}>{thisDate.format('D')}</DayDiv>
                )}
            </div>
        )
    }

    if (hidden) return null
    return (
        <DatePickerWrapper>
            {label && <div>{label}</div>}
            <DateHeader>
                <Year>{moment(date).format('YYYY')}</Year>
                <DHBottom>{moment(date).format('MMMM D, dddd')} </DHBottom>
            </DateHeader>

            <WeekHeader>
                <WeekHeaderUnit color="red">{t('Sun')}</WeekHeaderUnit>
                <WeekHeaderUnit>{t('Mon')}</WeekHeaderUnit>
                <WeekHeaderUnit>{t('Tue')}</WeekHeaderUnit>
                <WeekHeaderUnit>{t('Wed')}</WeekHeaderUnit>
                <WeekHeaderUnit>{t('Thu')}</WeekHeaderUnit>
                <WeekHeaderUnit>{t('Fri')}</WeekHeaderUnit>
                <WeekHeaderUnit>{t('Sat')}</WeekHeaderUnit>
            </WeekHeader>
            <div>
                <Grid
                    outerRef={calendarRef}
                    columnCount={7}
                    columnWidth={WIDTH}
                    width={300}
                    height={245}
                    rowCount={1000}
                    rowHeight={HEIGHT}
                    onScroll={onGridScroll}
                    // style={{overflowY: 'hidden'}}
                >
                    {Day}
                </Grid>
            </div>
            {showTimeslot && <TimeSlotWrapper>aaa</TimeSlotWrapper>}
            <WrapperButtons>
                <IconWrapper onClick={onUpArrowClick}>
                    <MdKeyboardArrowUp size="1.5rem" onClick={onUpArrowClick} />
                </IconWrapper>
                <IconWrapper onClick={onDownArrowClick}>
                    <MdKeyboardArrowDown size="1.5rem" />
                </IconWrapper>
            </WrapperButtons>
        </DatePickerWrapper>
    )
}

export default DateTimePicker
