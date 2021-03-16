import styled, {css} from 'styled-components'
import {down} from 'styled-breakpoints'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Previews = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const DropDiv = styled.div`
    position: relative;

    width: ${({width}) => width}vw;
    max-width: 450px;
    height: ${({height}) => height};
    font-weight: bold;

    ${down('tablet')} {
        width: 80vw;
        height: 90px;
    }

    border: ${({theme: {fileUploadDropZone}, borderStyle}) =>
        `${fileUploadDropZone.borderWidthDropDiv}px ${borderStyle} ${fileUploadDropZone.primaryColor}`};
    border-radius: ${({theme: {fileUploadDropZone}}) => fileUploadDropZone.borderRadius}rem;
    background: white;
    cursor: ${({preview}) => (preview ? 'initial' : 'pointer')};
    margin: ${({theme: {fileUploadDropZone}}) => fileUploadDropZone.fontSize}rem;
    display: flex;

    &: focus {
        outline: 0;
    }

    img {
        width: ${({width}) => width};
        height: ${({height}) => height};
        border-radius: ${({theme: {fileUploadDropZone}}) => fileUploadDropZone.borderRadius}rem;
    }

    svg {
        ${({preview}) =>
            preview
                ? css`
                      margin: 0.5rem;
                      position: absolute;
                      right: 0;
                      height: 1.5rem;
                      width: 1.5rem;
                      color: white;
                      z-index: 99;
                      cursor: pointer;
                  `
                : css`
                      width: 25%;
                      height: 25%;
                      margin: auto;
                      color: ${({theme: {fileUploadDropZone}}) => fileUploadDropZone.primaryColor};
                  `}
    }
`

export const Picture = styled.div`
    background: url(${({preview}) => preview}) center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    width: 100%;
    height: 100%;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: ${({theme: {fileUploadDropZone}}) => fileUploadDropZone.overlayBackground};
    color: ${({theme: {fileUploadDropZone}}) => fileUploadDropZone.overlayColor};
    text-align: center;
    word-break: break-all;
    font-size: ${({theme: {fileUploadDropZone}}) => fileUploadDropZone.overlayFontSize}rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProgressBar = styled.progress`
    margin-bottom: ${({theme: {fileUploadDropZone}}) => fileUploadDropZone.fontSize}rem;
    background-color: ${({theme: {fileUploadDropZone}}) => fileUploadDropZone.background};
    color: ${({theme: {fileUploadDropZone}}) => fileUploadDropZone.primaryColor};
    border-radius: ${({theme: {fileUploadDropZone}}) => fileUploadDropZone.borderRadius}rem;
`

export const Tags = styled.div`
    width: 30vw;
    max-width: 450px;

    ${down('tablet')} {
        width: 80vw;
    }
`

export const Send = styled.div`
    margin-bottom: ${({theme: {fileUploadDropZone}}) => fileUploadDropZone.fontSize}rem;

    button {
        width: 100%;
    }
`
