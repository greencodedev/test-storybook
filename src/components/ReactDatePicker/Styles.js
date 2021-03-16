import styled from 'styled-components'

export const DatePickerWrapper = styled.div`
    .react-datepicker {
        border-radius: ${({theme: {datePicker}}) => datePicker.borderRadius}rem;
        border: none;
        box-shadow: 0 0px 6px ${({theme: {datePicker}}) => datePicker.boxShadow};

        .react-datepicker__time-container {
            border-left: ${({theme: {datePicker}}) => datePicker.borderSize}px solid #e1e4e8;

            .react-datepicker__time
                .react-datepicker__time-box
                ul.react-datepicker__time-list
                li.react-datepicker__time-list-item--selected {
                background: ${({theme: {datePicker}}) => datePicker.clickedColor};
            }
        }

        .react-datepicker__triangle {
            border-bottom-color: ${({theme: {datePicker}}) => datePicker.headerBackground};
        }

        .react-datepicker__day--selected {
            background: ${({theme: {datePicker}}) => datePicker.clickedColor};
        }

        .react-datepicker__navigation--next--with-time {
            right: 95px;
        }

        .react-datepicker__header {
            border-radius: ${({theme: {datePicker}}) => datePicker.borderRadius}rem;
            border-bottom: 0.5px solid #e1e4e8;
            background: ${({theme: {datePicker}}) => datePicker.headerBackground};

            .react-datepicker__current-month {
                color: ${({theme: {datePicker}}) => datePicker.headerColor};
            }

            .react-datepicker__day-name {
                color: ${({theme: {datePicker}}) => datePicker.headerColor};
            }

            .react-datepicker-time__header {
                color: ${({theme: {datePicker}}) => datePicker.headerColor};
            }
        }
    }
`
export const CustomInput = styled.input`
    padding: ${({theme: {datePicker}}) => datePicker.fontSize * 0.7}rem
        ${({theme: {datePicker}}) => datePicker.fontSize * 0.9}rem;
    border-radius: ${({theme: {datePicker}}) => datePicker.borderRadius}rem;
    border: 1px solid ${({theme: {datePicker}}) => datePicker.borderColor};
    color: ${({theme: {datePicker}}) => datePicker.fontColor};
`
