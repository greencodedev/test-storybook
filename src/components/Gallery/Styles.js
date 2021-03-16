import styled, { css } from 'styled-components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdClose } from 'react-icons/md'
import { down } from 'styled-breakpoints'

export const GalleryContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    .galleryImg {
        > div {
            width: 100% !important;
            display: flex;
            justify-content: center;
            ${down('tablet')} {
                justify-content: flex-start;
                overflow: auto;
            }
        }
    }
`

export const Cell = styled.div`
    display: flex;
    height: 40px;
    width: 100%;
    justify-content: flex-start;
    margin: 0 5px;
    position: unset !important;
    border-top: ${({ active, theme: { gallery } }) =>
        active ? `0.25rem solid ${gallery.primaryColor}` : 'none'};
`

export const Thumb = styled.div`
    width: 40px;
    cursor: pointer;
`

export const PreviewDiv = styled.div`
    width: 90%;
    max-width: 62.5rem;
    height: 28.125rem;
    position: relative;
    margin-right: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${({ theme: { gallery } }) => gallery.fontSizeIcon}rem;

    ${down('tablet')} {
        height: 18.75rem;
    }

    // custom breakpoint
    @media (max-width: 540px) {
        height: 10rem;
    }
`

export const MediaContainer = styled.div`
    max-width: 100%;
    position: relative;

    & > :first-child {
        max-width: 100%;
    }
`

export const PreviewImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`

const buttonStyle = css`
    cursor: pointer;
    position: absolute;
    top: 55%;
    margin-top: -${({ theme: { gallery } }) => gallery.fontSizeIcon}rem;
    border-radius: ${({ theme: { gallery } }) => gallery.borderRadius}rem;
    color: ${({ theme: { gallery } }) => gallery.primaryColor};
    font-weight: bold;
    font-size: ${({ theme: { gallery } }) => gallery.fontSizeIcon}rem;
    transition: ${({ theme: { gallery } }) => gallery.timeTransition} ease;
    user-select: none;

    &:hover {
        background-color: ${({ theme: { gallery } }) => gallery.buttonHover};
    }

    ${down('tablet')} {
        font-size: ${({ theme: { gallery } }) => gallery.fontSize}rem;
        margin-top: -${({ theme: { gallery } }) => gallery.fontSize}rem;
    }
`

export const PrevButton = styled(MdKeyboardArrowLeft)`
    ${buttonStyle}
    left: -3%;
    background: ${({ theme: { gallery } }) => gallery.transactionBtnColor};
`
export const NextButton = styled(MdKeyboardArrowRight)`
    ${buttonStyle}
    right: -3%;
    background: ${({ theme: { gallery } }) => gallery.transactionBtnColor};
`

export const CloseBtn = styled(MdClose)`
    cursor: pointer;
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    font-size: 50px;
`
