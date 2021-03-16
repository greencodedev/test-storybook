import React from 'react'
import ReactPlayer from 'react-player'

import {
    PreviewDiv,
    MediaContainer,
    PreviewImage,
    PrevButton,
    NextButton,
    CloseBtn,
} from './Styles'

const Preview = ({
    previewPrevious,
    previewNext,
    totalItem,
    url,
    type,
    bucket,
    filename,
    id,
    overlay,
}) => {
    const picURL =
        !!bucket && !!filename ? `https://${bucket}.s3.amazonaws.com/big_${filename}` : url

    const renderContent = (picURL) => {
        if (type.substring(0, 7) === 'PICTURE') {
            return <PreviewImage src={picURL} alt={url} />
        } else return <ReactPlayer url={url} height={'100%'} controls={true} />
    }

    const renderOverlay = (overlay) => {
        if (overlay && overlay.length) {
            return (
                <>
                    {overlay.map((o, ind) => (
                        <React.Fragment key={ind}>
                            <o.Component item={o.item} />
                        </React.Fragment>
                    ))}
                </>
            )
        } else {
            return <></>
        }
    }

    const renderArrowButtons = () => {
        if (totalItem > 1)
            return (
                <>
                    <PrevButton onClick={previewPrevious} />
                    <NextButton onClick={previewNext} />
                </>
            )
    }

    if (picURL)
        return (
            <PreviewDiv>
                <MediaContainer>
                    {renderContent(picURL)}
                    {renderOverlay(overlay)}
                </MediaContainer>
                {renderArrowButtons()}
            </PreviewDiv>
        )
    else return <div></div>
}

export default Preview
