import React from 'react'
import {ThemeProvider} from 'styled-components'

import {render, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {routes} from '../../../const/routes'
import {theme} from '../../../const/theme'

import NavBar from '../index'

const RouterLink = ({node, children}) => <a href={(node && node.path) || '/'}>{children}</a>

test('NavBar should work properly when user is logged in', () => {
    const Nav = () => (
        <ThemeProvider theme={theme}>
            <NavBar
                isLoggedIn={true}
                userName="John"
                icons={[
                    ({isLoggedIn, userName}) => (
                        <span key="1">{isLoggedIn ? `Hello, ${userName}!` : 'Hi'}</span>
                    ),
                    () => <span key="2">Icon 02</span>,
                    ({isLoggedIn}) => <span key="3">{isLoggedIn ? 'Logout' : 'Login'}</span>,
                ]}
                routes={routes}
                RouterLink={RouterLink}
            />
        </ThemeProvider>
    )

    const {getByText} = render(<Nav />)

    // There should have a 'Hello, John!' text
    expect(getByText('Hello, John!')).toBeTruthy()
    // There should have a 'Icon 02' text
    expect(getByText('Icon 02')).toBeTruthy()
    // There should have a 'Logout' text
    expect(getByText('Logout')).toBeTruthy()

    // There should have all menu items
    routes.every((route) => {
        if (route.path !== '/') {
            expect(getByText(route.menuName)).toBeTruthy()
        }
    })
})

test('NavBar should work properly when user is not logged in', () => {
    const Nav = () => (
        <ThemeProvider theme={theme}>
            <NavBar
                isLoggedIn={false}
                userName="John"
                icons={[
                    ({isLoggedIn, userName}) => (
                        <span key="1">{isLoggedIn ? `Hello, ${userName}!` : 'Hi'}</span>
                    ),
                    () => <span key="2">Icon 02</span>,
                    ({isLoggedIn}) => <span key="3">{isLoggedIn ? 'Logout' : 'Login'}</span>,
                ]}
                routes={routes}
                RouterLink={RouterLink}
            />
        </ThemeProvider>
    )

    const {getByText} = render(<Nav />)

    // There should have a 'Hello, John!' text
    expect(getByText('Hi')).toBeTruthy()
    // There should have a 'Icon 02' text
    expect(getByText('Icon 02')).toBeTruthy()
    // There should have a 'Login' text
    expect(getByText('Login')).toBeTruthy()

    // There should have only menu items for users logged out
    routes.every((route) => {
        if (!route.showAfterLogin && route.path !== '/') {
            expect(getByText(route.menuName)).toBeTruthy()
        }
    })
})

test('NavBar should work properly with HighPriorityIcons', () => {
    const Nav = () => (
        <ThemeProvider theme={theme}>
            <NavBar
                isLoggedIn={false}
                userName="John"
                icons={[
                    ({isLoggedIn, userName}) => (
                        <span key="1">{isLoggedIn ? `Hello, ${userName}!` : 'Hi'}</span>
                    ),
                    () => <span key="2">Icon 02</span>,
                    ({isLoggedIn}) => <span key="3">{isLoggedIn ? 'Logout' : 'Login'}</span>,
                ]}
                highPriorityIcons={[
                    () => <span key="4">Cart Icon</span>,
                    () => <span key="5">Other Icon</span>,
                ]}
                routes={routes}
                RouterLink={RouterLink}
            />
        </ThemeProvider>
    )

    const {getByText} = render(<Nav />)
    // There should have a 'Cart Icon' text
    expect(getByText('Cart Icon')).toBeTruthy()
    // There should have a 'Other Icon' text
    expect(getByText('Other Icon')).toBeTruthy()
    // There should have a 'Hello, John!' text
    expect(getByText('Hi')).toBeTruthy()
    // There should have a 'Icon 02' text
    expect(getByText('Icon 02')).toBeTruthy()
    // There should have a 'Login' text
    expect(getByText('Login')).toBeTruthy()

    // There should have only menu items for users logged out
    routes.every((route) => {
        if (!route.showAfterLogin && route.path !== '/') {
            expect(getByText(route.menuName)).toBeTruthy()
        }
    })
})
