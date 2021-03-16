import React from 'react'
import styled, { css, keyframes, withTheme } from 'styled-components'

import { extendTheme } from '@chakra-ui/react';

/**
 * Language select button
 */


export const LangSelectButton = withTheme(styled.button`
    background: ${({ selected, theme: { buttonComponents } }) =>
        selected ? buttonComponents.backgroundSelected : buttonComponents.backgroundNotSelected};
    border: ${({ theme: { buttonComponents } }) =>
        `${buttonComponents.borderWidth}px solid ${buttonComponents.primaryColor}`};
    padding: ${({ theme: { buttonComponents } }) => buttonComponents.fontSize * 0.35}rem
        ${({ theme: { buttonComponents } }) => buttonComponents.fontSize}rem;
    margin-left: ${({ theme: { buttonComponents } }) => buttonComponents.fontSize * 0.5}rem;
    font-size: ${({ theme: { buttonComponents } }) => buttonComponents.fontSize}rem;
    cursor: pointer;
    white-space: nowrap;
    &:focus,
    &:active {
        outline: none;
    }
    &:hover {
        opacity: 0.65;
    }
`)
/**
 * SVG Submit button with animation
 */
const dashKeyframe = keyframes`
to {
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dashoffset: 600;
    stroke-dasharray: 600 0;
    }
`
/* styled-components */
const SvgButton = styled.button`
    padding: 0px;
    background: #f3d078;
    padding: 0;
    border-radius: 1px;
    border-style: solid;
    border-width: 1px;
    border-color: #a88734 #9c7e31 #846a29;
    width:100%;
    box-shadow: none;
    outline: none;
    max-width: ${({ width }) => width}px;
    // min-width:100%;
   // min-width: -webkit-fill-available;
    height: ${({ height }) => height}px;
    /* height: ${({ height }) => height + 10}px; */
    position: relative;
    overflow: hidden;
    text-align: center;
    display: block;
    // margin: ${({ theme: { buttonComponents } }) => buttonComponents.fontSize * 1.5}rem 0;
    &:hover {
        background: #f0c14b;
    }
    &::-moz-focus-inner {
        border: 0;
    }
`

/* styled-components */
const SvgElement = styled.svg`
    width: 100%;
    height: 100%;
    /* position: absolute;
    bottom: 0;
    right: 0; */
    border-radius: 1px;
    z-index: 1;
    ${({ disabled, isLoading }) => !disabled && !isLoading && css`cursor: pointer;`}
`

/* styled-components */
const PathElement = withTheme(styled.path`
    stroke-width: 0;
    stroke: ${({ theme: { buttonComponents } }) => buttonComponents.primaryColor};
    fill: #f3d078;
    &:hover {
        fill: #f0c14b;
    }
    stroke-dasharray: 460;
    transition: transform ${({ theme: { buttonComponents } }) => buttonComponents.timeTransition} linear;
    ${({ isLoading }) =>
        isLoading &&
        css`
        stroke-width: 2;
        animation: ${dashKeyframe} 1.5s reverse cubic-bezier(0.45, 0.03, 0.51, 0.95) 0s infinite;
        animation-fill-mode: forwards;
    `}

    ${({ disabled }) =>
        disabled &&
        css`
        fill: #ffefc6;
        &:hover {
            fill: #ffefc6;
        }
    `}
`)

export const SubmitButton = React.memo(
    ({ text, disabled = false, isLoading = false, height = 50, width = 400, onSubmit = () => { } }) => {
        const buttonBorderWidth = 2 // if button border width changes this should too

        const pathWidth = width - buttonBorderWidth
        const pathHeight = height - buttonBorderWidth

        return (
            <div style={{ width: '100%' }}>
                <SvgButton
                    onClick={() => onSubmit()}
                    disabled={disabled}
                    width={width}
                    height={height}
                >
                    <SvgElement
                        // preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={`0 0 ${pathWidth} ${pathHeight}`}
                        disabled={disabled}
                        isLoading={isLoading}
                    >
                        {/* <PathElement
                            d={`M0 0.999999C0 0.447714 0.447715 0 1 0H${width - 1}C${width -
                                1}.552 0 ${width} 0.447715 ${width} 1V${height}C${width -
                                1} ${height}.5523 ${width - 1}.552 ${height} ${width -
                                1} ${height} H1C0.447718 ${height} 0 ${height}.5523 0 ${height -
                                1}V0.999999Z`}
                            disabled={disabled}
                            isLoading={isLoading}
                        /> */}
                        <PathElement
                            d={`M0 0V${pathHeight} H${pathWidth} V0 L0 0`}
                            disabled={disabled}
                            isLoading={isLoading}
                        />
                        <text
                            x="50%"
                            y="50%"
                            fill="white"
                            style={{
                                fontSize: '1rem',
                                textAnchor: 'middle',
                                dominantBaseline: 'middle',
                                fill: 'black ',
                            }}
                        >
                            {text}
                        </text>
                    </SvgElement>
                </SvgButton>
            </div>
        )
    }
)
