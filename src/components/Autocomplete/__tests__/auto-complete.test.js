import React from 'react'
import ReactDOM from 'react-dom'
import {Field, Formik} from 'formik'
import {ThemeProvider} from 'styled-components'

import {act} from 'react-dom/test-utils'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import AutoComplete from '../index'
import {theme} from '../../../const/theme'

// Fake data list
const fakeData = [
    {
        id: 'tire',
        value: 'tire',
        name: 'Tire Test',
    },
    {
        id: 'wheel',
        value: 'wheel',
        name: 'Wheel Test',
    },
    {
        id: 'light',
        value: 'light',
        name: 'Light Test',
    },
]

const TestedAutoComplete = () => {
    let [selectedValue, setSelectedValue] = React.useState({})

    return (
        <ThemeProvider theme={theme}>
            <AutoComplete
                data={fakeData}
                multiple={false}
                value={selectedValue}
                placeholder={'Car part'}
                itemDisplay={(v) => {
                    return v.name
                }}
                dataDescriptor={{
                    id: 'id',
                    field: ['value', 'name'],
                }}
                onSelect={(v) => {
                    const newVal = v ? v : {}
                    setSelectedValue(newVal)
                }}
            />
        </ThemeProvider>
    )
}

const TestedAutoCompleteMultiple = () => {
    let [selectedValues, setSelectedValues] = React.useState([])

    return (
        <ThemeProvider theme={theme}>
            <AutoComplete
                data={fakeData}
                multiple={true}
                value={selectedValues}
                placeholder={'Car part'}
                itemDisplay={(v) => {
                    return v.name
                }}
                dataDescriptor={{
                    id: 'id',
                    field: ['value', 'name'],
                }}
                onSelect={(v) => {
                    const newVal = v && v.length ? v : []
                    setSelectedValues([...newVal])
                }}
            />
        </ThemeProvider>
    )
}

describe('Autocomplete should work as a standalone component', () => {
    test('displays single suggested item correctly', () => {
        // Render the <Autocomplete> component
        const {getByText, container} = render(<TestedAutoComplete />)

        // Expect that there's an input with a placeholder of "Car part"
        const inputElm = screen.getByPlaceholderText('Car part')
        expect(inputElm).toBeTruthy()

        // There should be no suggested items yet
        let suggestList = container.querySelector('.react-autosuggest__suggestions-list')
        expect(suggestList).toBeFalsy()

        // Focus on the input
        fireEvent.focus(inputElm)
        // Add something to the input
        // If it's shorter than 2 characters, nothing is suggested
        fireEvent.change(inputElm, {target: {value: 'w'}})
        suggestList = container.querySelector('.react-autosuggest__suggestions-list')
        expect(suggestList).toBeFalsy()

        // If there are more than 1 character, expect that there's a suggested value
        fireEvent.change(inputElm, {target: {value: 'wheel'}})
        expect(inputElm.value).toEqual('wheel')
        // There should be a suggested "Wheel Test" value
        const suggestedElm1 = getByText('Wheel Test')
        expect(suggestedElm1).toBeTruthy()

        fireEvent.change(inputElm, {target: {value: 'light'}})
        // There should be a suggested "Light Test" value
        const suggestedElm2 = getByText('Light Test')
        expect(suggestedElm2).toBeTruthy()

        // Select a suggested item
        fireEvent.click(suggestedElm2)
        // There should be a selected item
        const selectedItems = container.querySelectorAll('span')
        expect(selectedItems.length).toBe(1)
        // And the input should be cleared
        expect(inputElm.value).toEqual('')

        // Add more text to the input
        // The action should do nothing
        fireEvent.keyDown(inputElm, {
            key: 'b',
            code: 'KeyB',
            keyCode: 66,
            charCode: 66,
        })
        expect(inputElm.value).toEqual('')

        // Remove the selected item
        // It should be removed
        const deleteIcon = container.querySelector('svg')
        fireEvent.click(deleteIcon)
        const selectedItemsAfterDeleted = container.querySelectorAll('span')
        expect(selectedItemsAfterDeleted.length).toBe(0)
    })

    test('displays multiple suggested items correctly', () => {
        // Render the <Autocomplete> component
        const {getByText, container} = render(<TestedAutoCompleteMultiple />)

        // Expect that there's an input with a placeholder of "Car part"
        const inputElm = screen.getByPlaceholderText('Car part')
        expect(inputElm).toBeTruthy()

        // There should be no suggested items yet
        const suggestList = container.querySelector('.react-autosuggest__suggestions-list')
        expect(suggestList).toBeFalsy()

        fireEvent.focus(inputElm)
        // Add something to the input and expect that there's a suggested value
        fireEvent.change(inputElm, {target: {value: 'wheel'}})
        expect(inputElm.value).toEqual('wheel')
        // There should be a suggested "Wheel Test" value
        const suggestedElm1 = getByText('Wheel Test')
        expect(suggestedElm1).toBeTruthy()

        // Select it
        // Should have one item selected listed
        fireEvent.click(suggestedElm1)
        let selectedItems = container.querySelectorAll('span')
        expect(selectedItems.length).toBe(1)
        // And the input should has no value
        expect(inputElm.value).toEqual('')

        // Change input value to another one
        fireEvent.change(inputElm, {target: {value: 'light'}})
        // There should be a suggested "Light Test" value
        const suggestedElm2 = getByText('Light Test')
        expect(suggestedElm2).toBeTruthy()

        // Select it
        fireEvent.click(suggestedElm2)
        // There should be 2 selected items
        selectedItems = container.querySelectorAll('span')
        expect(selectedItems.length).toBe(2)

        // Remove one selected item
        // It should be removed, there's one item left
        const deleteIcons = container.querySelectorAll('svg')
        const iconLast = deleteIcons[deleteIcons.length - 1]
        fireEvent.click(iconLast)
        let selectedItemsAfterDeleted = container.querySelectorAll('span')
        expect(selectedItemsAfterDeleted.length).toBe(1)

        // Remove the last selected item
        // There should be no listed item left
        fireEvent.click(deleteIcons[0])
        selectedItemsAfterDeleted = container.querySelectorAll('span')
        expect(selectedItemsAfterDeleted.length).toBe(0)
    })
})

const TestedAutoCompleteFormik = () => (
    <ThemeProvider theme={theme}>
        <Formik
            initialValues={{
                name: [],
            }}
            onSubmit={(values, actions) => {
                actions.setStatus('')
            }}
        >
            <div>
                <Field
                    component={AutoComplete}
                    name="name"
                    data={fakeData}
                    placeholder={'Car part'}
                    itemDisplay={(v) => {
                        return v.name
                    }}
                    dataDescriptor={{
                        id: 'id',
                        field: ['value', 'name'],
                    }}
                />
            </div>
        </Formik>
    </ThemeProvider>
)

const TestedAutoCompleteFormikMultiple = () => (
    <ThemeProvider theme={theme}>
        <Formik
            initialValues={{
                name: [],
            }}
            onSubmit={(values, actions) => {
                actions.setStatus('')
            }}
        >
            <div>
                <Field
                    component={AutoComplete}
                    name="name"
                    data={fakeData}
                    multiple={true}
                    placeholder={'Car part'}
                    itemDisplay={(v) => {
                        return v.name
                    }}
                    dataDescriptor={{
                        id: 'id',
                        field: ['value', 'name'],
                    }}
                />
            </div>
        </Formik>
    </ThemeProvider>
)

// Formik requires to use "act" API so we will use it here
describe('Autocomplete should work as a child component of Formik', () => {
    test('displays single suggested item correctly', async () => {
        const container = document.createElement('div')
        document.body.appendChild(container)

        // Render the component
        act(() => {
            ReactDOM.render(<TestedAutoCompleteFormik />, container)
        })

        // Expect that there's an input with a placeholder of "Car part"
        const inputElm = container.querySelector('input')
        expect(inputElm).toBeTruthy()

        // There should be no suggested items yet
        let suggestList = container.querySelector('.react-autosuggest__suggestions-list')
        expect(suggestList).toBeFalsy()

        // Focus on the input
        fireEvent.focus(inputElm)
        // Add something to the input
        // If it's shorter than 2 characters, nothing is suggested
        act(() => {
            fireEvent.change(inputElm, {target: {value: 'w'}})
        })
        suggestList = container.querySelector('.react-autosuggest__suggestions-list')
        expect(suggestList).toBeFalsy()

        // If there are more than 1 character, expect that there's a suggested value
        act(() => {
            fireEvent.change(inputElm, {target: {value: 'wheel'}})
        })
        expect(inputElm.value).toEqual('wheel')
        // There should be a suggested "Wheel Test" value
        const suggestedElm1 = screen.getByText('Wheel Test')
        expect(suggestedElm1).toBeTruthy()

        act(() => {
            fireEvent.change(inputElm, {target: {value: 'light'}})
        })
        // There should be a suggested "Light Test" value
        const suggestedElm2 = screen.getByText('Light Test')
        expect(suggestedElm2).toBeTruthy()

        // Select an suggested item
        act(() => {
            fireEvent.click(suggestedElm2)
        })
        // Wait for "useEffect" to finish running
        // There should be a selected item
        waitFor(() => {
            const selectedItems = container.querySelectorAll('span')
            expect(selectedItems.length).toBe(1)
        })
        // And the input should be cleared
        expect(inputElm.value).toEqual('')

        // Add more text to the input
        // The action should do nothing
        fireEvent.keyDown(inputElm, {
            key: 'b',
            code: 'KeyB',
            keyCode: 66,
            charCode: 66,
        })
        expect(inputElm.value).toEqual('')

        // Remove the selected item
        // It should be removed
        const deleteIcon = container.querySelector('svg')
        act(() => {
            fireEvent.click(deleteIcon)
        })
        const selectedItemsAfterDeleted = container.querySelectorAll('span')
        expect(selectedItemsAfterDeleted.length).toBe(0)
    })

    test('displays multiple suggested items correctly', async () => {
        const container = document.createElement('div')
        document.body.appendChild(container)

        // Render the component
        act(() => {
            ReactDOM.render(<TestedAutoCompleteFormikMultiple />, container)
        })

        // Expect that there's an input with a placeholder of "Car part"
        const inputElm = container.querySelector('input')
        expect(inputElm).toBeTruthy()

        // There should be no suggested items yet
        const suggestList = container.querySelector('.react-autosuggest__suggestions-list')
        expect(suggestList).toBeFalsy()

        fireEvent.focus(inputElm)
        // Add something to the input and expect that there's a suggested value
        act(() => {
            fireEvent.change(inputElm, {target: {value: 'wheel'}})
        })
        expect(inputElm.value).toEqual('wheel')
        // There should be a suggested "Wheel Test" value
        const suggestedElm1 = screen.getByText('Wheel Test')
        expect(suggestedElm1).toBeTruthy()

        // Select it
        // Should have one item selected listed
        act(() => {
            fireEvent.click(suggestedElm1)
        })
        // Wait for "useEffect" to finish running
        // There should be a selected item
        await waitFor(() => {
            const selectedItems = container.querySelectorAll('span')
            expect(selectedItems.length).toBe(1)
        })
        // And the input should has no value
        expect(inputElm.value).toEqual('')

        // Change input value to another one
        act(() => {
            fireEvent.change(inputElm, {target: {value: 'light'}})
        })
        // There should be a suggested "Light Test" value
        const suggestedElm2 = screen.getByText('Light Test')
        expect(suggestedElm2).toBeTruthy()

        // Select it
        act(() => {
            fireEvent.click(suggestedElm2)
        })
        await waitFor(() => {
            // Wait for "useEffect" to finish running
            // There should be 2 selected items
            const selectedItems = container.querySelectorAll('span')
            expect(selectedItems.length).toBe(2)
        })

        // Remove one selected item
        // It should be removed, there's one item left
        const deleteIcons = container.querySelectorAll('svg')
        const iconLast = deleteIcons[deleteIcons.length - 1]
        act(() => {
            fireEvent.click(iconLast)
        })
        await waitFor(() => {
            // Wait for "useEffect" to finish running
            const selectedItems = container.querySelectorAll('span')
            expect(selectedItems.length).toBe(1)
        })

        // Remove the last selected item
        // There should be no listed item left
        act(() => {
            fireEvent.click(deleteIcons[0])
        })
        await waitFor(() => {
            // Wait for "useEffect" to finish running
            const selectedItems = container.querySelectorAll('span')
            expect(selectedItems.length).toBe(0)
        })
    })
})
