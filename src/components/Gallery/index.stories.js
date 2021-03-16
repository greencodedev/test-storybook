import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from '../../const/theme'
import Gallery from './index'
import GlobalStyles from '../../const/globalStyles'

export default { title: 'Gallery' }

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

const Overlay4Container = styled.div`
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    color: white;
    display: flex;
    font-size: 300%;
    height: 100%;
    justify-content: center;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;

    transition: background 0.3s;

    span {
        cursor: pointer;

        transition: transform 0.4s ease-out;
    }

    &:hover {
        background: rgba(0, 0, 0, 0.7);

        span {
            transform: rotateZ(360deg);
        }
    }
`

export const defaultGallery = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Gallery data={data} />
    </ThemeProvider>
)

export const WithRemoveGallery = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Gallery data={data} onRemoveClick={() => console.log('Remove clicked')} />
    </ThemeProvider>
)

export const GalleryWithOverlayArray = () => {
    const Overlay1 = ({ item }) => (
        <div
            style={{
                cursor: 'help',
                position: 'absolute',
                right: '0',
                top: '0',
                width: '25%',
            }}
            onClick={() => {
                window.alert(`Item data: ${JSON.stringify(item)}`)
            }}
        >
            <img style={{ width: '100%' }} src="/images/ribbon-right.png" />
        </div>
    )

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
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
                                style={{
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
                        id: 'Productmedia_4',
                        component: () => (
                            <Overlay4Container>
                                <span>+</span>
                            </Overlay4Container>
                        ),
                    },
                    {
                        type: 'PICTURE',
                        component: ({ item }) => (
                            <div
                                style={{
                                    bottom: '5px',
                                    cursor: 'pointer',
                                    left: '5px',
                                    position: 'absolute',
                                    width: '20%',
                                }}
                                onClick={() => {
                                    window.alert(`Item data is: ${JSON.stringify(item)}`)
                                }}
                            >
                                <img style={{ width: '100%' }} src="/images/ribbon-3.png" />
                            </div>
                        ),
                    },
                ]}
            />
        </ThemeProvider>
    )
}

export const GalleryWithOverlayObject = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Gallery
            data={data}
            overlay={({ item }) => (
                <Overlay4Container
                    onClick={() => {
                        window.alert(`Overlapped item's info: ${JSON.stringify(item)}`)
                    }}
                >
                    <span>+</span>
                </Overlay4Container>
            )}
        />
    </ThemeProvider>
)
