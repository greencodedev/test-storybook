import React from 'react'
import {ThemeProvider} from 'styled-components'
import {theme} from '../../const/theme'
import {Title, FormikForm, RawInput, BasicInput, FastFieldInput, InputErrorMessage, Checkbox} from './index'
import {Formik, Form, Field} from 'formik'
import formikValidator from '../../util/formikValidator'
import {SubmitButton} from '../ButtonComponents'
import GlobalStyles from '../../const/globalStyles'

import { ChakraProvider } from '@chakra-ui/react'

export default {title: 'Formik Form Components'}

export const DefaultTitle = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Title>Form Title</Title>
        </ThemeProvider>
    )
}

export const DefaultRawInput = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div style={{maxWidth: '400px'}}>
                <RawInput type="text" placeholder="Enter here" disabled={true} />
            </div>
        </ThemeProvider>
    )
}

export const DefaultFormikForm = () => {
    const validator = {
        id: ({id}) => (id.length > 3 ? undefined : '* User name is too short. Please try again.'),
        password: ({password}) =>
            password.length > 5 ? undefined : '* Password is too short. Please try again.',
    }
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Formik
                initialValues={{
                    id: '',
                    password: '',
                }}
                validate={async values => {
                    const a = await formikValidator(validator, values)
                    return a
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        console.log('Form submitted with values: ', values)
                        actions.setSubmitting(false)
                    }, 1000)
                }}
            >
                {formik => (
                    <FormikForm>
                        <Title>Sample Login Form</Title>
                        <InputErrorMessage data-testid="id" name="id" component="div" />
                        <BasicInput name="id" type="text" placeholder="Username" />
                        <InputErrorMessage data-testid="password" name="password" component="div" />
                        <BasicInput name="password" type="password" placeholder="Password" />
                        <InputErrorMessage data-testid="noinput" name="noinput" component="div" />
                        <BasicInput name="noinput" type="text" placeholder="Disabled" disabled={true} />
                        <SubmitButton
                            type="submit"
                            text="Log-In"
                            width={450}
                            style={{
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

export const StandaloneCheckbox = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Checkbox />
        </ThemeProvider>
    )
}

export const FormikCheckbox = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Formik initialValues={{checkbox: true}}>
                <Form>
                    <Field name="checkbox" component={Checkbox} />
                </Form>
            </Formik>
        </ThemeProvider>
    )
}
