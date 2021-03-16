import React from 'react'
import {ThemeProvider} from 'styled-components'
import { ChakraProvider, Button } from '@chakra-ui/react'
import {theme} from '../../const/theme'
import {LangSelectButton, SubmitButton} from './index'
import GlobalStyles from '../../const/globalStyles'
export default {component: SubmitButton, title: 'Button Components'}

export const DefaultSubmitButton = () => {
    const [submitted, setSubmitted] = React.useState(false)
    return (
        <ThemeProvider theme={theme}>
        {/* <ChakraProvider theme={customTheme}> */}
            <GlobalStyles />
            <SubmitButton
                text={'Submit'}
                isLoading={submitted}
                onSubmit={() => {
                    setSubmitted(true)
                    setTimeout(() => {
                        console.log('Form submitted')
                        setSubmitted(false)
                    }, 1500)
                }}
            />
        {/* </ChakraProvider> */}
        </ThemeProvider>
    )
}

export const WithSizeVariation = () => {
    const [submitted, setSubmitted] = React.useState(false)
    return (
        <ThemeProvider theme={theme}>
        <ChakraProvider>
            <GlobalStyles />
            <SubmitButton
                text={'Submit'}
                isLoading={submitted}
                height={35}
                width={140}
                onSubmit={() => {
                    setSubmitted(true)
                    setTimeout(() => {
                        console.log('Form submitted')
                        setSubmitted(false)
                    }, 1500)
                }}
            />
        </ChakraProvider>
        </ThemeProvider>
    )
}

export const InEnabledState = () => {
    return (
        <ThemeProvider theme={theme}>
        {/* <ChakraProvider theme={customTheme}> */}
            <GlobalStyles />
            <SubmitButton text={'Enabled'} disabled={false} />
        {/* </ChakraProvider> */}
        </ThemeProvider>
    )
}

export const InDisabledState = () => {
    return (
        <ThemeProvider theme={theme}>
        {/* <ChakraProvider theme={customTheme}> */}
            <GlobalStyles />
            <SubmitButton text={'Disabled'} disabled={true} />
        {/* </ChakraProvider> */}
        </ThemeProvider>
    )
}
