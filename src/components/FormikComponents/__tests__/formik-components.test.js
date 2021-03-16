import React from 'react'
import {ThemeProvider} from 'styled-components'
import {Formik, Form, Field} from 'formik'

import {render, fireEvent, waitFor, waitForElementToBeRemoved, act} from '@testing-library/react'

import {theme} from '../../../const/theme'
import formikValidator from '../../../util/formikValidator'

import {Title, FormikForm, FastFieldInput, InputErrorMessage, Checkbox} from '../index'

const onSubmit = jest.fn((values, actions) => {
    jest.useFakeTimers()
    setTimeout(() => {
        act(() => {
            actions.setSubmitting(false)
        })
    }, 1000)
})

const DefaultFormikForm = () => {
    const validator = {
        username: ({username}) => {
            return !username || username.length <= 3
                ? '* User name is too short. Please try again.'
                : undefined
        },
        password: ({password}) => {
            if (!password || password.length <= 5) {
                return '* Password is too short. Please try again.'
            }

            const passwordChars = password.split('')
            let hasUpperChar = false

            passwordChars.forEach(char => {
                if (char === char.toUpperCase()) {
                    hasUpperChar = true
                }
            })

            if (!hasUpperChar) {
                return 'Password should have at uppercase characters'
            }

            return undefined
        },
    }

    return (
        <ThemeProvider theme={theme}>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validate={async values => {
                    return await formikValidator(validator, values)
                }}
                onSubmit={onSubmit}
            >
                {formik => (
                    <FormikForm>
                        <Title>Sample Login Form</Title>
                        <InputErrorMessage
                            data-testid="name-error"
                            name="username"
                            component="div"
                        />
                        <FastFieldInput name="username" type="text" placeholder="Username" />
                        <InputErrorMessage
                            data-testid="password-error"
                            name="password"
                            component="div"
                        />
                        <FastFieldInput name="password" type="password" placeholder="Password" />

                        <input
                            type="submit"
                            value="Login"
                            style={{
                                width: 150,
                                height: 43,
                                fontWeight: 'bold',
                            }}
                        />
                        {formik.isSubmitting && <span>Submitting...</span>}
                    </FormikForm>
                )}
            </Formik>
        </ThemeProvider>
    )
}

test('Formik form components should render properly', async () => {
    // Testing the default Formik form
    jest.useFakeTimers('modern')
    const {getByPlaceholderText, getByText, queryByText, getByTestId} = render(
        <DefaultFormikForm />
    )

    // Should have a title of 'Sample Login Form'
    expect(getByText('Sample Login Form')).toBeTruthy()

    const usernameInputElm = getByPlaceholderText('Username')
    const passwordInputElm = getByPlaceholderText('Password')
    const loginBtnElm = getByText('Login')

    // Should have two placeholders
    expect(usernameInputElm).toBeTruthy()
    expect(passwordInputElm).toBeTruthy()

    // Invalid input to username, password
    fireEvent.change(usernameInputElm, {target: {value: 'us'}})
    fireEvent.change(passwordInputElm, {target: {value: 'pass'}})

    // Click on Login
    fireEvent.click(loginBtnElm)

    let nameInputErrorElm
    let passInputErrorElm
    // Should raise input error messages
    await waitFor(() => {
        nameInputErrorElm = getByTestId('name-error')
        passInputErrorElm = getByTestId('password-error')

        expect(nameInputErrorElm).toBeTruthy()
        expect(passInputErrorElm).toBeTruthy()
    })

    // Provide a valid username
    fireEvent.change(usernameInputElm, {target: {value: 'user'}})

    // username error is no more
    await waitForElementToBeRemoved(nameInputErrorElm)

    // Provide another failed password
    fireEvent.change(passwordInputElm, {target: {value: 'password'}})

    // Should have another error message for password
    await waitFor(() => {
        passInputErrorElm = getByTestId('password-error')

        expect(passInputErrorElm).toBeTruthy()
        expect(passInputErrorElm.textContent).toContain(
            'Password should have at uppercase characters'
        )
    })

    // Provide a valid password
    fireEvent.change(passwordInputElm, {target: {value: 'Password'}})

    // Wait until the password error is removed
    await waitForElementToBeRemoved(getByTestId('password-error'))
    expect(queryByText('Password should have at uppercase characters')).toBeFalsy()

    // Submit again
    fireEvent.click(loginBtnElm)

    // Submit function should be called
    await waitFor(() => {
        expect(onSubmit).toHaveBeenCalled()
    })

    // There should have a 'Submitting...' text
    const loadingText = queryByText('Submitting...')
    expect(loadingText).toBeTruthy()

    // Run the fake setTimeout()
    jest.advanceTimersByTime(1001)

    // The loading message should be no more
    expect(queryByText('Submitting...')).toBeFalsy()
    jest.useRealTimers()
})

const onAgree = jest.fn(() => {})

const StandaloneCheckbox = () => (
    <ThemeProvider theme={theme}>
        <Checkbox />
    </ThemeProvider>
)

const FormikCheckbox = () => {
    const validator = {
        useragreement: ({useragreement: userAgrees}) => {
            return userAgrees ? undefined : 'You must agree to submit!'
        },
    }

    return (
        <ThemeProvider theme={theme}>
            <Formik
                initialValues={{
                    useragreement: true,
                }}
                validate={async values => {
                    return await formikValidator(validator, values)
                }}
                onSubmit={onAgree}
            >
                <Form>
                    <Field name="useragreement" component={Checkbox} />
                    <button type="submit">Agree</button>
                </Form>
            </Formik>
        </ThemeProvider>
    )
}

describe('Checkbox should work with formik.', () => {
    test('Submit function should be called only if checkbox is checked.', async () => {
        const {getByText, getByTestId} = render(<FormikCheckbox />)

        const checkSignContainer = getByTestId('checksign-container')
        const agreeButton = getByText('Agree')

        await act(async () => {
            fireEvent.click(agreeButton) // submit with checked checkbox [fn call # = 1]
        })

        expect(onAgree).toHaveBeenCalledTimes(1) // initially the checkbox is checked so this should be OK

        await act(async () => {
            fireEvent.click(checkSignContainer) // uncheck checkbox
        })

        await act(async () => {
            fireEvent.click(agreeButton) // submit with unchecked checkbox [fn call # = 1]
        })

        expect(onAgree).toHaveBeenCalledTimes(1)

        await act(async () => {
            fireEvent.click(checkSignContainer) // check the checkbox again
        })

        await act(async () => {
            fireEvent.click(agreeButton) // [fn call # = 2]
        })

        expect(onAgree).toHaveBeenCalledTimes(2)
    })
})

describe('Standalone checkbox should work property', () => {
    test('Checkbox should change style based on user interaction.', () => {
        const {getByTestId} = render(<StandaloneCheckbox />)

        const checksignContainer = getByTestId('checksign-container')
        const checksign = getByTestId('checksign')

        const initialColor = window.getComputedStyle(checksignContainer).backgroundColor
        const initiDisplay = window.getComputedStyle(checksign).display

        expect(initiDisplay).toBe('none') // initially the checkbox shouldn't display the sign

        fireEvent.click(checksignContainer) // check the checkbox

        const checkedColor = window.getComputedStyle(checksignContainer).backgroundColor
        const checkedDisplay = window.getComputedStyle(checksign).display

        expect(initialColor).not.toBe(checkedColor) // after clicking the checkbox it should change background color
        expect(checkedDisplay).toBe('block') // after click the check sign should be displayed

        fireEvent.click(checksignContainer) // uncheck the checkbox

        const uncheckColor = window.getComputedStyle(checksignContainer).backgroundColor
        const uncheckDisplay = window.getComputedStyle(checksign).display

        expect(uncheckColor).toBe(initialColor) // after clicking the checkbox it should change back to it's initial color
        expect(uncheckDisplay).toBe(initiDisplay) // after uncheck it should display as initially
    })
})
