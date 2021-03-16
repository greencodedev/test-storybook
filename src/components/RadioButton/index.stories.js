import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {theme} from '../../const/theme'
import RadioButton from './index'
import {Field, Formik} from 'formik'
import {FormikForm} from '../FormikComponents'
import GlobalStyles from '../../const/globalStyles'

export default {title: 'Radio Button'}

export const DefaultSingleSelectionStandalone = () => {
    const [value, setValue] = useState(null)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RadioButton
                name="activities"
                value={value}
                options={[
                    {value: 1, text: 'Morning'},
                    {value: 2, text: 'Afternoon'},
                    {value: 3, text: 'Evening'},
                    {value: 4, text: 'Night'},
                ]}
                onUpdate={(val) => {
                    setValue(val)
                }}
            />
        </ThemeProvider>
    )
}

export const DefaultSingleSelectionFormik = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Formik
            initialValues={{
                name: [],
            }}
            onSubmit={(values, actions) => {
                actions.setStatus('')
                console.log('submitting')
            }}
        >
            <FormikForm>
                <Field
                    component={RadioButton}
                    name="activities"
                    options={[
                        {value: 1, text: 'Morning'},
                        {value: 2, text: 'Afternoon'},
                        {value: 3, text: 'Evening'},
                        {value: 4, text: 'Night'},
                    ]}
                />
            </FormikForm>
        </Formik>
    </ThemeProvider>
)

export const WithValueStandalone = () => {
    const [value, setValue] = useState(1)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RadioButton
                name="activities"
                value={value}
                options={[
                    {value: 1, text: 'Morning'},
                    {value: 2, text: 'Afternoon'},
                    {value: 3, text: 'Evening'},
                    {value: 4, text: 'Night'},
                ]}
                onUpdate={(val) => {
                    setValue(val)
                }}
            />
        </ThemeProvider>
    )
}

export const WithValueFormik = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Formik
            initialValues={{
                name: [],
            }}
            onSubmit={(values, actions) => {
                actions.setStatus('')
                console.log('submitting')
            }}
        >
            <FormikForm>
                <Field
                    component={RadioButton}
                    name="activities"
                    options={[
                        {value: 1, text: 'Morning'},
                        {value: 2, text: 'Afternoon'},
                        {value: 3, text: 'Evening'},
                        {value: 4, text: 'Night'},
                    ]}
                    value={1}
                />
            </FormikForm>
        </Formik>
    </ThemeProvider>
)

export const MultipleSelectionStandalone = () => {
    const [value, setValue] = useState([])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RadioButton
                name="activities"
                value={value}
                isMultiple={true}
                options={[
                    {value: 1, text: 'Morning'},
                    {value: 2, text: 'Noon'},
                    {value: 3, text: 'Afternoon'},
                    {value: 4, text: 'Evening'},
                    {value: 5, text: 'Night'},
                    {value: 6, text: 'Midnight'},
                ]}
                onUpdate={(val) => {
                    setValue(val)
                }}
            />
        </ThemeProvider>
    )
}

export const MultipleSelectionFormik = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Formik
            initialValues={{
                activities: [],
            }}
            onSubmit={(values, actions) => {
                actions.setStatus('')
                console.log('submitting')
            }}
        >
            <FormikForm>
                <Field
                    component={RadioButton}
                    name="activities"
                    isMultiple={true}
                    options={[
                        {value: 1, text: 'Morning'},
                        {value: 2, text: 'Noon'},
                        {value: 3, text: 'Afternoon'},
                        {value: 4, text: 'Evening'},
                        {value: 5, text: 'Night'},
                        {value: 6, text: 'Midnight'},
                    ]}
                />
            </FormikForm>
        </Formik>
    </ThemeProvider>
)

export const WithMultipleValueStandalone = () => {
    const [value, setValue] = useState([1, 5])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RadioButton
                name="activities"
                value={value}
                isMultiple={true}
                options={[
                    {value: 1, text: 'Morning'},
                    {value: 2, text: 'Noon'},
                    {value: 3, text: 'Afternoon'},
                    {value: 4, text: 'Evening'},
                    {value: 5, text: 'Night'},
                    {value: 6, text: 'Midnight'},
                ]}
                onUpdate={(val) => {
                    setValue(val)
                }}
            />
        </ThemeProvider>
    )
}

export const WithMultipleValueFormik = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Formik
            initialValues={{
                name: [],
            }}
            onSubmit={(values, actions) => {
                actions.setStatus('')
                console.log('submitting')
            }}
        >
            <FormikForm>
                <Field
                    component={RadioButton}
                    name="activities"
                    isMultiple={true}
                    options={[
                        {value: 1, text: 'Morning'},
                        {value: 2, text: 'Noon'},
                        {value: 3, text: 'Afternoon'},
                        {value: 4, text: 'Evening'},
                        {value: 5, text: 'Night'},
                        {value: 6, text: 'Midnight'},
                    ]}
                    value={[1, 5]}
                />
            </FormikForm>
        </Formik>
    </ThemeProvider>
)

export const WithWrongValueStandalone = () => {
    const [value, setValue] = useState([1, 9])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RadioButton
                name="activities"
                value={value}
                isMultiple={true}
                options={[
                    {value: 1, text: 'Morning'},
                    {value: 2, text: 'Noon'},
                    {value: 3, text: 'Afternoon'},
                    {value: 4, text: 'Evening'},
                    {value: 5, text: 'Night'},
                    {value: 6, text: 'Midnight'},
                ]}
                onUpdate={(val) => {
                    setValue(val)
                }}
            />
        </ThemeProvider>
    )
}

export const WithWrongValueFormik = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Formik
            initialValues={{
                name: [],
            }}
            onSubmit={(values, actions) => {
                actions.setStatus('')
                console.log('submitting')
            }}
        >
            <FormikForm>
                <Field
                    component={RadioButton}
                    name="activities"
                    isMultiple={true}
                    options={[
                        {value: 1, text: 'Morning'},
                        {value: 2, text: 'Noon'},
                        {value: 3, text: 'Afternoon'},
                        {value: 4, text: 'Evening'},
                        {value: 5, text: 'Night'},
                        {value: 6, text: 'Midnight'},
                    ]}
                    value={[1, 9]}
                />
            </FormikForm>
        </Formik>
    </ThemeProvider>
)
