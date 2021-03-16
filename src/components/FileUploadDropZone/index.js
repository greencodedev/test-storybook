import React, { useState } from 'react'
import axios from 'axios'
import { useDropzone } from 'react-dropzone'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { IoMdCloudUpload } from 'react-icons/io'
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { Container, Previews, DropDiv, Send, Overlay, ProgressBar, Picture, Tags } from './Styles'

import { RawInput } from '../FormikComponents'
import { SubmitButton } from '../ButtonComponents'

const FileUploadDropZone = ({
    uploadURL = null,
    fieldName = 'pic',
    sendOnDrop = false,
    acceptFileType = null,
    width = '30',
    height = '200px',
    multiple = true,
    jwt = null,
    onUploadFinish = () => {},
    requiredInfo = {}
}) => {
    const [progress, setProgress] = useState(0)
    const [previews, setPreviews] = useState([])
    // const [tags, setTags] = useState('')
    const { t } = useTranslation()

    // const onTagsChange = (e) => setTags(e.target.value)

    const removePreview = (i) => {
        previews.splice(i, 1)
        setPreviews([...previews])
    }

    const uploadFile = async (files, jwt) => {
        console.log(files, 'uploadFile')
        toast.dismiss('upload')

        if (files.length < 1) {
            toast(t('Please add file'), {
                toastId: 'upload',
                type: toast.TYPE.ERROR,
                hideProgressBar: true,
            })
            return
        }

        // if (!tags.length) {
        //     let errMsg
        //     if (sendOnDrop) errMsg = 'Please insert tag first. Then drop file.'
        //     else errMsg = 'Error: Please insert tag.'
        //     toast(t(errMsg), {
        //         toastId: 'upload',
        //         type: toast.TYPE.ERROR,
        //         hideProgressBar: true,
        //     })
        //     return
        // }

        try {
            if (!uploadURL) throw new Error('uploadURL not provided')
            setProgress(0)
            const newform = new FormData()
            for (const f of files) {
                newform.append(fieldName, f)
            }
            // // Appending tags
            // newform.append(
            //     'tags',
            //     tags.split(',').map((v) => v.trim())
            // )
            // setTags('')

            for (var key in requiredInfo) {
                newform.append(key, requiredInfo[key])
            }

            const result = await axios({
                url: uploadURL,
                method: 'post',
                headers: {
                    Authorization: 'Bearer ' + jwt,
                },
                data: newform,
                onUploadProgress: (progressEvent) => {
                    setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total))
                },
            })
            onUploadFinish(true, result)
            toast(t('Successfully uploaded.'), {
                toastId: 'upload',
                type: toast.TYPE.SUCCESS,
                hideProgressBar: true,
            })
        } catch (e) {
            onUploadFinish(false, e)
            toast(t(e && e.response && e.response.data && e.response.data.message), {
                toastId: 'upload',
                type: toast.TYPE.ERROR,
                hideProgressBar: true,
            })
        }
    }

    const onFileAdd = (files) => {
        let newPreviews = []

        for (const file of files) {
            // Duplication check
            let flag = false
            for (const preview of previews) {
                if (
                    preview.name === file.name &&
                    preview.type === file.type &&
                    preview.size === file.size
                ) {
                    // console.log(preview, file, '@duplication')
                    flag = true
                    break
                }
            }

            if (flag) continue
            if (file.type.substring(0, 5) === 'image') {
                file.source = URL.createObjectURL(file)
            } else {
                file.source = 'https://img.icons8.com/carbon-copy/100/000000/file.png'
            }
            newPreviews.push(file)
        }

        let allPreviews = [...previews, ...newPreviews]

        if (newPreviews.length)
            if (multiple) setPreviews(allPreviews)
            else setPreviews([newPreviews[0]]) // if only one file is allowed simply change the file

        // Upload dropped file when sendOnDrop is activated
        if (sendOnDrop && allPreviews.length) uploadFile(allPreviews, jwt)
    }

    const handleFileDrop = (acceptedFiles) => {
        onFileAdd(acceptedFiles)
    }

    let dropZoneConfig = {
        multiple: multiple,
        noDragEventsBubbling: true,
        minSize: 1,
        onDrop: handleFileDrop,
    }
    if (acceptFileType) dropZoneConfig['accept'] = acceptFileType

    //getRootProps, getInputProps is to attach to a Div, and an Input in the Div, to enable the drag and drop capability
    //acceptedFiles array of files accepted based on criteria.
    //rejectedFiles array of files rejected based on criteria
    const {
        //acceptedFiles,
        //rejectedFiles,
        getRootProps,
        getInputProps,
    } = useDropzone(dropZoneConfig)

    // console.log(acceptedFiles, previews, '@Debug')
    return (
        <>
            <Container>
                <Previews>
                    {previews.map((preview, i) => (
                        <DropDiv
                            className="file-preview"
                            width={width}
                            height={height}
                            key={i}
                            borderStyle={'solid'}
                            preview={true}
                        >
                            <Picture preview={preview.source} />
                            <Overlay>{preview.name}</Overlay>
                            <IoIosRemoveCircleOutline onClick={() => removePreview(i)} />
                        </DropDiv>
                    ))}

                    <DropDiv
                        width={width}
                        height={height}
                        {...getRootProps()}
                        borderStyle={'dashed'}
                    >
                        <input {...getInputProps()} />
                        <IoMdCloudUpload size={10} />
                    </DropDiv>
                </Previews>

                <Tags>
                    {/* <RawInput
                        name="tags"
                        type="text"
                        placeholder={t('Tags (comma separated)')}
                        value={tags}
                        onChange={onTagsChange}
                    /> */}
                    {sendOnDrop ? (
                        progress > 0 && <ProgressBar value={progress} max="100" />
                    ) : (
                        <Send data-testid="send-btn" onClick={() => uploadFile(previews, jwt)}>
                            <SubmitButton text="Send file" type="submit" width={450} />
                        </Send>
                    )}
                </Tags>
            </Container>
            {/* <div>{`Accepted: ${acceptedFiles.map(v => v.name)}`}</div>
            <div>{`Rejected: ${rejectedFiles.map(v => v.name)}`}</div>
            <div>{`Progress: ${progress}`}</div> */}
        </>
    )
}

export default FileUploadDropZone
