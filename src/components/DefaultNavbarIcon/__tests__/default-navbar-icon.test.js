import React from 'react'

import {render, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import DefaultNavbarIcon from '../index'

test('LangSelectorButton should work properly', () => {
    const LangSelectorButton = () => {
        return <DefaultNavbarIcon.LangSelectorButton />
    }

    const {container} = render(<LangSelectorButton />)

    // Language logo should be rendered
    const logo = container.querySelector('svg')
    expect(logo).toBeTruthy()

    // Click on the logo
    fireEvent.click(logo)
    waitFor(() => {
        // There should be two child elements
        container.childElementCount.toBe(2)

        // There should be two language select options
        const options = container.children[1]
        options.childElementCount.toBe(2)

        // Check text of options
        expect(options.children[0].textContent).toContain('中')
        expect(options.children[1].textContent).toContain('EN')
    })
})

test('CartButton should work properly', () => {
    const mockShowCartFn = jest.fn()

    const CartButton = () => {
        return <DefaultNavbarIcon.CartButton showCart={mockShowCartFn} />
    }

    const {container} = render(<CartButton />)

    // Cart logo should be rendered
    const logo = container.querySelector('svg')
    expect(logo).toBeTruthy()

    // Click on the logo
    fireEvent.click(logo)
    waitFor(() => {
        // There should be no child elements
        container.childElementCount.toBe(0)

        // mockShowCartFn passed by showCart prop should be called
        expect(mockShowCartFn).toHaveBeenCalledTimes(1)
    })
})
