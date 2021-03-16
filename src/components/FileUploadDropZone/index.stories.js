import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../const/theme'
import FileUploadDropZone from './index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import GlobalStyles from '../../const/globalStyles'

export default { title: 'File Upload Drop Zone' }

export const defaultFileUploadDropZoneSingleFileAllTypes = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <FileUploadDropZone
            uploadURL={'http://localhost:8081/api/upload/productPic'}
            fieldName={'all'}
            sendOnDrop={false}
            acceptFileType={null}
            multiple={false}
            onUploadFinish={(success, data) => console.log(success, data, 'result')}
            requiredInfo={{ 'productmaster_id': 123, 'tags': "fddfd"}}
        />
        <ToastContainer autoClose={false} />
    </ThemeProvider>
)

export const defaultFileUploadDropZoneMultipleFilesAllTypes = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <FileUploadDropZone
            uploadURL={null}
            fieldName={'all'}
            sendOnDrop={false}
            acceptFileType={null}
            multiple={true}
        />
        <ToastContainer autoClose={false} />
    </ThemeProvider>
)

export const defaultFileUploadDropZoneSingleFilePDF = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <FileUploadDropZone
            uploadURL={null}
            fieldName={'pdf'}
            sendOnDrop={false}
            acceptFileType={'.pdf'}
            multiple={false}
        />
        <ToastContainer autoClose={false} />
    </ThemeProvider>
)

export const defaultFileUploadDropZoneMultipleAllImages = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <FileUploadDropZone
            uploadURL={null}
            fieldName={'pic'}
            sendOnDrop={false}
            acceptFileType={'.jpeg, .png, .gif, .tif'}
            multiple={true}
        />
        <ToastContainer autoClose={false} />
    </ThemeProvider>
)
