import React from 'react'
import {ThemeProvider} from 'styled-components'

import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {theme} from '../../../const/theme'
import {SubmitButton, LangSelectButton} from '../index.js'

const onClick = jest.fn()
const DefaultSubmitButton = () => {
    return (
        <ThemeProvider theme={theme}>
            <SubmitButton text={'Submit'} onSubmit={onClick} />
        </ThemeProvider>
    )
}

const DefaultLanguageSelectButton = () => {
    return (
        <ThemeProvider theme={theme}>
            <LangSelectButton>English</LangSelectButton>
        </ThemeProvider>
    )
}

describe('Button components should render properly', () => {
    test('Submit button should render properly', () => {
        const {getByText} = render(<DefaultSubmitButton />)

        const submitBtnElm = getByText('Submit')
        expect(submitBtnElm).toBeTruthy()

        fireEvent.click(submitBtnElm)
        expect(onClick).toHaveBeenCalled()
    })

    test('Language Button should render properly', () => {
        const {getByText} = render(<DefaultLanguageSelectButton />)

        const langBtnElm = getByText('English')
        expect(langBtnElm).toBeTruthy()
    })
})
