import React, {useRef} from 'react'
import ReactPlayer from 'react-player'
import {Cell, Thumb} from './Styles'
import styled from 'styled-components'

const ThumbImage = styled.img`
    object-fit: cover;
`

const Thumbnails = ({index, style, data}) => {
    const {itemsArray, currentIndex, onThumbClick} = data
    const active = currentIndex === index
    const thumbSize = style.width
    const player = useRef()

    // Only show the preview and don't play
    const handlePlayer = () => {
        player.current.showPreview()
    }

    const renderContent = () => {
        const {type, url, file_upload} = itemsArray[index]
        const {bucket, filename} = file_upload || {bucket: null, filename: null}
        if (type.substring(0, 7) === 'PICTURE') {
            return (
                <ThumbImage
                    src={
                        !!bucket && !!filename
                            ? `https://${bucket}.s3.amazonaws.com/thumb_${filename}`
                            : url
                    }
                    width={thumbSize}
                    height={thumbSize}
                    alt={'thumb'}
                />
            )
        } else
            return (
                <ReactPlayer
                    ref={player}
                    light={true}
                    url={url}
                    width={thumbSize}
                    height={thumbSize}
                    onClick={handlePlayer}
                />
            )
    }

    return (
        <Cell
            key={index}
            style={style}
            active={active}
            data-testid={active ? 'thumbnail-active' : ''}
        >
            <Thumb onClick={() => onThumbClick(index)}>{renderContent()}</Thumb>
        </Cell>
    )
}

export default Thumbnails
