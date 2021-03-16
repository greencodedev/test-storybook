import styled from 'styled-components'

const WIDTH_REM = 2

export const DatePickerWrapper = styled.div`
    display: block;

    width: min-content;

    text-align: center;

    box-shadow: 0 1px 6px ${({theme: {dateTimePicker}}) => dateTimePicker.shadowBox};
`

export const DateHeader = styled.div`
    display: grid;
    place-items: center;

    color: ${({theme: {dateTimePicker}}) => dateTimePicker.headerColor};

    padding: ${({theme: {dateTimePicker}}) => dateTimePicker.fontSize * 1.4}rem 0;

    background: ${({theme: {dateTimePicker}}) => dateTimePicker.backgroundColor};
`

export const Year = styled.div`
    font-size: ${({theme: {dateTimePicker}}) => dateTimePicker.fontSize}rem;

    margin: 0 auto ${({theme: {dateTimePicker}}) => dateTimePicker.fontSize * 1.1}rem;
`
export const DayItem = styled.div`
    font-size: ${({theme: {dateTimePicker}}) => dateTimePicker.fontSize}rem;
    font-weight: ${({theme: {dateTimePicker}}) => dateTimePicker.fontWeight};
`

export const DayDiv = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: ${({theme: {dateTimePicker}}) => dateTimePicker.borderRadius}rem;

    font-size: ${({theme: {dateTimePicker}}) => dateTimePicker.fontSize * 1.2}rem;

    cursor: ${({disable}) => (disable ? 'no-drop' : 'pointer')};

    ${({selected}) => selected && 'background-color: #f0c14b; color: white; font-weight: bold;'}
`

export const MonthDiv = styled(DayDiv)`
    background-color: ${({selected}) => (selected ? ' #0f4c81;' : '#607d8b;')}
    
    color: ${({theme: {dateTimePicker}}) => dateTimePicker.headerColor};
    
    
`

export const YearDiv = styled(DayDiv)`
    ${({selected}) => (selected ? 'background-color: #0f4c81;' : 'background-color: #691a3b;')}
    color: white;
    font-weight: ${({theme: {dateTimePicker}}) => dateTimePicker.fontWeight};
    height: 115%;

    border: 1px solid #607d8b;
`

export const DHBottom = styled.div`
    font-size: ${({theme: {dateTimePicker}}) => dateTimePicker.titleFontSize * 1.2}rem;
    font-weight: ${({theme: {dateTimePicker}}) => dateTimePicker.fontWeight};
`

export const WrapperButtons = styled.div`
    height: 65px;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0 ${({theme: {dateTimePicker}}) => dateTimePicker.fontSize * 1.1}rem;

    box-shadow: 0 1px 6px ${({theme: {dateTimePicker}}) => dateTimePicker.shadowBox};
`

export const IconWrapper = styled.div`
    cursor: pointer;

    width: 46%;
    height: 35px;

    color: #37475a;

    border: 1px solid ${({theme: {dateTimePicker}}) => dateTimePicker.borderColor};

    border-radius: ${({theme: {dateTimePicker}}) => dateTimePicker.borderRadius}rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: 0 0px 6px ${({theme: {dateTimePicker}}) => dateTimePicker.shadowBox};
    }
`

export const TimeSlotWrapper = styled.div`
    margin: ${({theme: {dateTimePicker}}) => dateTimePicker.fontSize * 1.1}rem 0rem;
`

export const WeekHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center;
    justify-items: center;

    padding: ${({theme: {dateTimePicker}}) => dateTimePicker.fontSize * 1.1}rem 0;

    cursor: default;

    font-weight: ${({theme: {dateTimePicker}}) => dateTimePicker.fontWeight};
    font-size: ${({theme: {dateTimePicker}}) => dateTimePicker.fontSize * 1.3}rem;

    box-shadow: 0 0px 6px ${({theme: {dateTimePicker}}) => dateTimePicker.shadowBox};
`

export const WeekHeaderUnit = styled.div`
    ${({color}) => (color ? 'color: ' + color + ';' : '')}
    
    
    width: ${WIDTH_REM}rem;
    
	text-align: center;
	
`
