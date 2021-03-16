import React, { useState, useEffect, useRef } from 'react'
// TODO: Update this
// import { useSelector, shallowEqual } from 'react-redux'

import { FixedSizeList } from 'react-window'
import Thumbnails from './Thumbnails'
import Preview from './Preview'
import { GalleryContainer } from './Styles'
import { isArray } from 'lodash'

const THUMBNAIL_BG = 40
const THUMBNAIL_SM = 70
const WINDOW_WIDTH = 1200

const getOverlays = (data, overlay) => {
    const result = []

    if (isArray(overlay)) {
        const overlayObj = overlay.reduce((acc, item) => {
            if ((!item.id && !item.type) || !item.component) {
                throw new Error(
                    "Overlay item must have either 'id', 'type' or 'component' properties"
                )
            }

            const { id, type, component } = item

            if (id) {
                if (!acc[id]) {
                    acc[id] = [component]
                } else {
                    acc[id].push(component)
                }
            }

            if (type) {
                if (!acc[type]) {
                    acc[type] = [component]
                } else {
                    acc[type].push(component)
                }
            }

            return acc
        }, {})

        for (let i = 0, l = data.length; i < l; ++i) {
            let itemOverlay = []

            if (overlayObj[data[i].id]) {
                itemOverlay = itemOverlay.concat(overlayObj[data[i].id])
            }

            if (overlayObj[data[i].type]) {
                itemOverlay = itemOverlay.concat(overlayObj[data[i].type])
            }

            const itemOverlayFinal = itemOverlay.map((component) => {
                return {
                    Component: component,
                    item: data[i],
                }
            })

            result.push(itemOverlayFinal)
        }
    } else if (overlay) {
        for (let i = 0, l = data.length; i < l; ++i) {
            const obj = {
                Component: overlay,
                item: data[i],
            }

            result.push([obj])
        }
    }

    return result
}

const Gallery = ({ data, overlay, height = THUMBNAIL_BG, width = THUMBNAIL_BG }) => {
    const [preview, setPreview] = useState({})
    const [index, setIndex] = useState(0)

    const listRef = useRef()
    const totalItem = data.length
    const overlayArr = getOverlays(data, overlay)

    // TODO: Update this
    // const {width: windowWidth = WINDOW_WIDTH} = useSelector(
    //     state => state.windowSize,
    //     shallowEqual
    // )
    const windowWidth = WINDOW_WIDTH

    if (windowWidth <= 1024) {
        height = THUMBNAIL_SM
        width = THUMBNAIL_SM
    }

    // offset is needed because after SSR, react-window will not update window width.
    // Use this + setTimeoff to force react-window to update
    const [offset, setOffset] = useState(1)
    useEffect(() => {
        setTimeout(
            (setOffset) => {
                setOffset(0)
            },
            1,
            setOffset
        )
    }, [])

    useEffect(() => {
        if (data.length) {
            const { type, url, file_upload, id } = data[index]
            const { bucket, filename } = file_upload || {
                bucket: null,
                filename: null,
            }

            if (totalItem === 1) {
                setPreview({
                    type,
                    url,
                    bucket,
                    filename,
                    id,
                    overlay: overlayArr[0],
                })
            } else if (totalItem > 1) {
                setPreview({
                    type,
                    url,
                    bucket,
                    filename,
                    id,
                    overlay: overlayArr[index],
                })

                listRef.current.scrollToItem(index)
            }
        }
    }, [data, totalItem, index])

    const previewPrevious = () => {
        if (index > 0) setIndex(index - 1)
        else setIndex(data.length - 1)
    }

    const previewNext = () => {
        if (index === data.length - 1) setIndex(0)
        else setIndex(index + 1)
    }

    const onThumbClick = (i) => {
        setIndex(i)
    }

    return (
        <GalleryContainer>
            <Preview
                type={preview.type}
                url={preview.url}
                bucket={preview.bucket}
                filename={preview.filename}
                previewPrevious={previewPrevious}
                previewNext={previewNext}
                totalItem={totalItem}
                id={preview.id}
                overlay={preview.overlay}
            />
            {totalItem > 1 && (
                <FixedSizeList
                    ref={listRef}
                    itemCount={data.length}
                    itemSize={width}
                    itemData={{
                        itemsArray: data,
                        currentIndex: index,
                        onThumbClick,
                    }}
                    layout="horizontal"
                    width={windowWidth - 30}
                    className="galleryImg"
                    // Mactch with the max-width of Preview
                    style={{ overflowY: 'hidden', height: '60px', width: '100%' }}
                >
                    {Thumbnails}
                </FixedSizeList>
            )}
        </GalleryContainer>
    )
}

export default Gallery
