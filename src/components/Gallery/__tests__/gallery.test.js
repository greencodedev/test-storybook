import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Gallery from '../index'
import { theme } from '../../../const/theme'

window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        json: () => ({ hello: '/images/products.svg' }),
    })
)

jest.useFakeTimers()

const data = [
    {
        url: 'https://nicecar.hk/images/chassis/products/CCG_150.png',
        type: 'PICTURE',
        productmaster_id: {
            id: 340,
        },
        id: 'Productmedia_1',
    },
    {
        url: 'https://youtu.be/EBlqj20IzHA',
        type: 'YOUTUBE',
        productmaster_id: {
            id: 340,
        },
        id: 'Productmedia_2',
    },
    {
        url: 'http://www.nicecar.hk/images/chassis/products/CCG01.JPG',
        type: 'PICTURE',
        productmaster_id: {
            id: 340,
        },
        id: 'Productmedia_3',
    },
    {
        url: 'http://www.nicecar.hk/images/chassis/products/CCG05.JPG',
        type: 'PICTURE',
        productmaster_id: {
            id: 340,
        },
        id: 'Productmedia_4',
    },
    {
        url: 'http://www.nicecar.hk/images/chassis/products/CCG13.jpeg',
        type: 'PICTURE',
        productmaster_id: {
            id: 340,
        },
        id: 'Productmedia_5',
    },
]

afterAll(() => {
    jest.useRealTimers()
})

test('Gallery should display images correctly', () => {
    const { container, getAllByText } = render(
        <ThemeProvider theme={theme}>
            <Gallery data={data} />
        </ThemeProvider>
    )

    // Should have 2 arrows for navigating the images/videos
    const arrows = container.querySelectorAll('svg')
    expect(arrows.length).toBe(2)

    // Should have 5 thumbnails including 1 video thumbnail
    let thumbnailContainer = container.querySelector('.galleryImg')
    let thumbs = thumbnailContainer.firstChild.childNodes
    expect(thumbs.length).toBe(5)

    const videoThumbs = container.querySelectorAll('.react-player__preview')
    expect(videoThumbs.length).toBe(1)

    // The first thumbnail should be active
    expect(thumbs[0].dataset.testid).toBe('thumbnail-active')

    // Click the left arrow, the last thumbnail is active
    fireEvent.click(arrows[0])
    expect(thumbs[thumbs.length - 1].dataset.testid).toBe('thumbnail-active')
    // The main image should be updated properly
    expect(arrows[0].previousSibling.firstElementChild.src).toBe(data[data.length - 1].url)

    // Click the right arrow, the first thumbnail is active
    fireEvent.click(arrows[1])
    expect(thumbs[0].dataset.testid).toBe('thumbnail-active')
    // The main image should be updated properly
    expect(arrows[0].previousSibling.firstElementChild.src).toBe(data[0].url)

    // Click the third thumbnail, it should be active
    fireEvent.click(thumbs[2].firstChild)
    thumbnailContainer = container.querySelector('.galleryImg')
    thumbs = thumbnailContainer.firstChild.childNodes
    expect(thumbs[2].dataset.testid).toBe('thumbnail-active')
    // The main image should be updated properly
    expect(arrows[0].previousSibling.firstElementChild.src).toBe(data[2].url)

    // Click the second thumbnail, there should be a video
    fireEvent.click(thumbs[1].firstChild)

    expect(getAllByText('React Video').length).toBe(2) // One for the preview, one for the thumbnail
})

test('Gallery overlay array with id should work correctly', () => {
    const mock1 = jest.fn()
    const mock2 = jest.fn()

    const Overlay1 = ({ item }) => (
        <div
            className="overlay"
            style={{
                cursor: 'help',
                position: 'absolute',
                right: '0',
                top: '0',
                width: '25%',
            }}
            onClick={mock1}
        >
            <img style={{ width: '100%' }} src="/images/ribbon-right.png" />
        </div>
    )

    const { container, getAllByText } = render(
        <ThemeProvider theme={theme}>
            <Gallery
                data={data}
                overlay={[
                    {
                        id: 'Productmedia_1',
                        component: Overlay1,
                    },
                    {
                        id: 'Productmedia_1',
                        component: () => (
                            <div
                                className="overlay"
                                style={{
                                    left: '0',
                                    position: 'absolute',
                                    top: '0',
                                    width: '20%',
                                }}
                            >
                                <img style={{ width: '100%' }} src="/images/ribbon-left.png" />
                            </div>
                        ),
                    },
                    {
                        id: 'Productmedia_3',
                        component: () => (
                            <div
                                className="overlay"
                                style={{
                                    cursor: 'pointer',
                                    left: '5px',
                                    position: 'absolute',
                                    top: '5px',
                                    width: '20%',
                                }}
                                onClick={mock2}
                            >
                                <img style={{ width: '100%' }} src="/images/ribbon-2.png" />
                            </div>
                        ),
                    },
                ]}
            />
        </ThemeProvider>
    )

    // Should have 2 overlays on the first gallery item
    let overlays = container.querySelectorAll('.overlay')
    expect(overlays.length).toBe(2)

    // Click the first overlay
    fireEvent.click(overlays[0])
    expect(mock1).toHaveBeenCalledTimes(1)

    let thumbnailContainer = container.querySelector('.galleryImg')
    let thumbs = thumbnailContainer.firstChild.childNodes

    // Click the third thumbnail, it should have 1 overlay
    fireEvent.click(thumbs[2].firstChild)
    overlays = container.querySelectorAll('.overlay')
    expect(overlays.length).toBe(1)

    // Click the overlay
    fireEvent.click(overlays[0])
    expect(mock2).toHaveBeenCalledTimes(1)
})

test('Gallery overlay array with id and type should work correctly', () => {
    const mock1 = jest.fn()
    const mock2 = jest.fn()

    const Overlay1 = ({ item }) => (
        <div
            className="overlay"
            style={{
                cursor: 'help',
                position: 'absolute',
                right: '0',
                top: '0',
                width: '25%',
            }}
            onClick={mock1}
        >
            <img style={{ width: '100%' }} src="/images/ribbon-right.png" />
        </div>
    )

    const { container, getAllByText } = render(
        <ThemeProvider theme={theme}>
            <Gallery
                data={data}
                overlay={[
                    {
                        id: 'Productmedia_1',
                        component: Overlay1,
                    },
                    {
                        id: 'Productmedia_1',
                        component: () => (
                            <div
                                className="overlay"
                                style={{
                                    left: '0',
                                    position: 'absolute',
                                    top: '0',
                                    width: '20%',
                                }}
                            >
                                <img style={{ width: '100%' }} src="/images/ribbon-left.png" />
                            </div>
                        ),
                    },
                    {
                        id: 'Productmedia_3',
                        component: () => (
                            <div
                                className="overlay"
                                style={{
                                    cursor: 'pointer',
                                    left: '5px',
                                    position: 'absolute',
                                    top: '5px',
                                    width: '20%',
                                }}
                            >
                                <img style={{ width: '100%' }} src="/images/ribbon-2.png" />
                            </div>
                        ),
                    },
                    {
                        type: 'PICTURE',
                        component: ({ item }) => (
                            <div
                                className="overlay"
                                style={{
                                    bottom: '5px',
                                    cursor: 'pointer',
                                    left: '5px',
                                    position: 'absolute',
                                    width: '20%',
                                }}
                                onClick={mock2}
                            >
                                <img style={{ width: '100%' }} src="/images/ribbon-3.png" />
                            </div>
                        ),
                    },
                ]}
            />
        </ThemeProvider>
    )

    // Should have 2 overlays on the first gallery item
    let overlays = container.querySelectorAll('.overlay')
    expect(overlays.length).toBe(3)

    // Click the first overlay
    fireEvent.click(overlays[0])
    expect(mock1).toHaveBeenCalledTimes(1)

    let thumbnailContainer = container.querySelector('.galleryImg')
    let thumbs = thumbnailContainer.firstChild.childNodes

    // Click the third thumbnail, it should have 2 overlay
    fireEvent.click(thumbs[2].firstChild)
    overlays = container.querySelectorAll('.overlay')
    expect(overlays.length).toBe(2)

    // Click the overlay
    fireEvent.click(overlays[1])
    expect(mock2).toHaveBeenCalledTimes(1)
})

test('Gallery overlay as a React component should work correctly', () => {
    const mock1 = jest.fn()

    const { container, getAllByText } = render(
        <ThemeProvider theme={theme}>
            <Gallery
                data={data}
                overlay={({ item }) => (
                    <div
                        className="overlay"
                        style={{
                            cursor: 'pointer',
                            left: '5px',
                            position: 'absolute',
                            top: '5px',
                            width: '30%',
                        }}
                        onClick={mock1}
                    >
                        <img style={{ width: '100%' }} src="/images/ribbon-2.png" />
                    </div>
                )}
            />
        </ThemeProvider>
    )

    // Should have 1 overlay on the first gallery item
    let overlays = container.querySelectorAll('.overlay')
    expect(overlays.length).toBe(1)

    // Click the overlay
    fireEvent.click(overlays[0])
    expect(mock1).toHaveBeenCalledTimes(1)

    let thumbnailContainer = container.querySelector('.galleryImg')
    let thumbs = thumbnailContainer.firstChild.childNodes

    // Click the third thumbnail, it should also have 1 overlay
    fireEvent.click(thumbs[2].firstChild)
    overlays = container.querySelectorAll('.overlay')
    expect(overlays.length).toBe(1)

    // Click the overlay
    fireEvent.click(overlays[0])
    expect(mock1).toHaveBeenCalledTimes(2)
})
