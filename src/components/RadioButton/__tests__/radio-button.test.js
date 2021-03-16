import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'

import {render, waitFor, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {theme} from '../../../const/theme'

import RadioButton from '../index'

let initialValue
let testValue
const mockSetValueFn = jest.fn(val => {
    testValue = val
})

const StandaloneRadio = props => {
    const [value, setValue] = useState(initialValue)

    return (
        <ThemeProvider theme={theme}>
            <RadioButton
                name="activities"
                value={value}
                options={[
                    {value: 1, text: 'Option 01'},
                    {value: 2, text: 'Option 02'},
                    {value: 3, text: 'Option 03'},
                    {value: 4, text: 'Option 04'},
                ]}
                onUpdate={val => {
                    setValue(val)
                    mockSetValueFn(val)
                }}
                {...props}
            />
        </ThemeProvider>
    )
}

const FormikRadio = ({value = null, isMultiple = false}) => {
    const [fieldValue, setValue] = useState(value)

    const form = {
        setFieldValue: (fieldName, newVal) => {
            setValue(newVal)
            mockSetValueFn(newVal)
        },
    }

    const field = {
        name: 'activities',
        value: fieldValue,
    }

    const options = [
        {value: 1, text: 'Option 01'},
        {value: 2, text: 'Option 02'},
        {value: 3, text: 'Option 03'},
        {value: 4, text: 'Option 04'},
    ]

    return (
        <ThemeProvider theme={theme}>
            <RadioButton
                options={options}
                form={form}
                field={field}
                value={fieldValue}
                isMultiple={isMultiple}
            />
        </ThemeProvider>
    )
}

describe('Standalone radio buttons should display and work correctly', () => {
    test('Single selection should work correctly', () => {
        const {getByText, queryAllByText} = render(<StandaloneRadio />)

        // Get all buttons, should have 3 buttons
        const buttons = queryAllByText(/Option /i, {exact: false})
        expect(buttons.length).toBe(4)

        // Get the last button by its text content
        const lastButton = getByText('Option 03')
        expect(lastButton).toBeTruthy()

        // Click the last radio button
        lastButton.click()
        expect(mockSetValueFn).toHaveBeenCalledTimes(1)
        // The mock fn should be called with an argument of 3
        expect(mockSetValueFn.mock.calls[0][0]).toBe(3)
    })

    test('Multiple selections should work correctly', () => {
        // Clean up mock fn
        mockSetValueFn.mockClear()
        // Set initial value
        initialValue = []

        const {getByText, queryAllByText} = render(
            <StandaloneRadio isMultiple={true} />
        )

        // Get some radio buttons
        const firstBtn = getByText('Option 01')
        const thirdBtn = getByText('Option 03')
        expect(firstBtn).toBeTruthy()
        expect(thirdBtn).toBeTruthy()

        // Click the two radio buttons
        firstBtn.click()
        thirdBtn.click()
        firstBtn.click()

        expect(mockSetValueFn).toHaveBeenCalledTimes(3)

        // The first call set form value to be [1]
        expect(mockSetValueFn.mock.calls[0][0]).toContain(1)
        // The second cal set form value to be [1, 3]
        expect(mockSetValueFn.mock.calls[1][0]).toContain(1)
        expect(mockSetValueFn.mock.calls[1][0]).toContain(3)
        // The second cal set form value to be [3]
        expect(mockSetValueFn.mock.calls[2][0]).not.toContain(1)
        expect(mockSetValueFn.mock.calls[2][0]).toContain(3)
    })

    test('Pre-defined values should be displayed correctly', () => {
        // Clean up mock fn
        mockSetValueFn.mockClear()
        // Set initial value
        initialValue = [2]

        const {getByText, queryAllByText} = render(
            <StandaloneRadio isMultiple={true} />
        )

        // Get some radio buttons
        const firstBtn = getByText('Option 01')
        const thirdBtn = getByText('Option 03')

        // Click the two radio buttons
        firstBtn.click()
        thirdBtn.click()

        expect(mockSetValueFn).toHaveBeenCalledTimes(2)

        // The first call set form value to be [1, 2]
        expect(mockSetValueFn.mock.calls[0][0]).toContain(1)
        expect(mockSetValueFn.mock.calls[0][0]).toContain(2)
        // The second cal set form value to be [1, 2, 3]
        expect(mockSetValueFn.mock.calls[1][0]).toContain(1)
        expect(mockSetValueFn.mock.calls[1][0]).toContain(2)
        expect(mockSetValueFn.mock.calls[1][0]).toContain(3)
    })

    test('Not-found error message should be displayed correctly', () => {
        // Clean up mock fn
        mockSetValueFn.mockClear()
        // Set invalid initial value
        initialValue = [20]

        const {queryByText} = render(<StandaloneRadio isMultiple={true} />)

        // An error message should be displayed
        const errorMsg = queryByText('Value not found!')
        expect(errorMsg).toBeTruthy()
    })
})

describe('Formik radio buttons should display and work correctly', () => {
    test('Single selection should work correctly', async () => {
        // Clean up mock fn
        mockSetValueFn.mockClear()

        const {debug, getByText, queryAllByText} = render(<FormikRadio />)

        // Get all buttons, should have 3 buttons
        const buttons = queryAllByText(/Option /i, {exact: false})
        expect(buttons.length).toBe(4)

        // Get the last button by its text content
        const thirdButton = getByText('Option 03')
        expect(thirdButton).toBeTruthy()

        // Click the last radio button
        fireEvent.click(thirdButton)

        await waitFor(() => {
            expect(mockSetValueFn).toHaveBeenCalledTimes(1)
            // The mock fn should be called with an argument of 3
            expect(mockSetValueFn.mock.calls[0][0]).toBe(3)
        })
    })

    test('Pre-defined, multiple values should be displayed correctly', async () => {
        // Clean up mock fn
        mockSetValueFn.mockClear()

        const {getByText, queryAllByText} = render(
            <FormikRadio isMultiple={true} value={[2]} />
        )

        // Get some radio buttons
        const firstBtn = getByText('Option 01')
        const thirdBtn = getByText('Option 03')

        // Click the two radio buttons
        firstBtn.click()
        thirdBtn.click()

        await waitFor(() => {
            expect(mockSetValueFn).toHaveBeenCalledTimes(2)

            // The first call set form value to be [1, 2]
            expect(mockSetValueFn.mock.calls[0][0]).toContain(1)
            expect(mockSetValueFn.mock.calls[0][0]).toContain(2)
            // The second cal set form value to be [1, 2, 3]
            expect(mockSetValueFn.mock.calls[1][0]).toContain(1)
            expect(mockSetValueFn.mock.calls[1][0]).toContain(2)
            expect(mockSetValueFn.mock.calls[1][0]).toContain(3)
        })
    })

    test('Not-found error message should be displayed correctly', () => {
        // Clean up mock fn
        mockSetValueFn.mockClear()

        const {queryByText} = render(
            <FormikRadio isMultiple={true} value={[20]} />
        )

        // An error message should be displayed
        waitFor(() => {
            const errorMsg = queryByText('Value not found!')
            expect(errorMsg).toBeTruthy()
        })
    })
})
