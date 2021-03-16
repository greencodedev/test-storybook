import React from 'react'
import axios from 'axios'
import {ThemeProvider} from 'styled-components'
import {ToastContainer} from 'react-toastify'

import {act} from 'react-dom/test-utils'
import {render, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import FileUploadDropZone from '../index'
import {theme} from '../../../const/theme'

// Mock axios
jest.mock('axios')

beforeEach(() => {
    axios.mockResolvedValue({state: 'success'})

    window.URL.createObjectURL = jest.fn().mockImplementation(() => {
        return '/images/products.svg'
    })
})

afterEach(() => {
    axios.mockReset()

    window.URL.createObjectURL.mockReset()
})

describe('Upload files for preview correctly', () => {
    test('Upload one file at a time of any types correctly', async () => {
        const {container} = render(
            <ThemeProvider theme={theme}>
                <FileUploadDropZone
                    uploadURL={null}
                    fieldName={'all'}
                    sendOnDrop={false}
                    acceptFileType={null}
                    multiple={false}
                />
                <ToastContainer autoClose={false} />
            </ThemeProvider>
        )

        const uploadInputElm = container.querySelector('input[type="file"]')
        expect(uploadInputElm).toBeTruthy()

        // Upload 1 file, should have 1 preview
        const file = new File(['chuck'], 'chucknorris.png', {
            type: 'image/png',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file]}})
        })
        let previewItems
        await waitFor(() => {
            previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBeGreaterThanOrEqual(1)
        })

        // Upload that file again, should have 1 preview because it is duplicated (and rejected)
        const fileDuplicated = new File(['chuck'], 'chucknorris.png', {
            type: 'image/png',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {
                target: {files: [fileDuplicated]},
            })
        })
        await waitFor(() => {
            previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBeGreaterThanOrEqual(1)
        })

        // Remove that uploaded file
        const deleteIcon = previewItems[0].querySelector('svg')
        fireEvent.click(deleteIcon)
        previewItems = container.querySelectorAll('.file-preview')
        expect(previewItems.length).toBe(0)

        // Upload a .doc file, should have 1 preview
        const file1 = new File([JSON.stringify({chuckDoc: true})], 'chuck-doc.doc', {
            type: 'application/msword',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file1]}})
        })
        await waitFor(() => {
            previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBe(1)
        })

        // Upload a .pdf file, should have 2 previews
        const file2 = new File([JSON.stringify({chuckPDF: true})], 'chuck-pdf.pdf', {
            type: 'application/pdf',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file2]}})
        })
        await waitFor(() => {
            previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBe(1)
        })
    })

    test('Upload multiple files at a time of any types correctly', async () => {
        const {container} = render(
            <ThemeProvider theme={theme}>
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

        const uploadInputElm = container.querySelector('input[type="file"]')
        expect(uploadInputElm).toBeTruthy()

        // Upload a .json & a .pdf files, should have 2 previews
        const file1 = new File([JSON.stringify({chuckJSON: true})], 'chuck-json.json', {
            type: 'application/json',
        })
        const file2 = new File([JSON.stringify({chuckZIP: true})], 'chuck-pdf.pdf', {
            type: 'application/pdf',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file1, file2]}})
        })
        await waitFor(() => {
            const previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBe(2)
        })
    })

    test('Upload one file at a time of .pdf file correctly', async () => {
        const {container} = render(
            <ThemeProvider theme={theme}>
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

        const uploadInputElm = container.querySelector('input[type="file"]')
        expect(uploadInputElm).toBeTruthy()

        // Upload a .json file, should have 0 preview because the file is rejected
        const file1 = new File([JSON.stringify({chuckJSON: true})], 'chuck-json.json', {
            type: 'application/json',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file1]}})
        })
        await waitFor(() => {
            const previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBe(0)
        })

        // Upload 2 .json files, should have 0 preview because only 1 file is allowed at a time
        const file2 = new File([JSON.stringify({chuckPDF2: true})], 'chuck-pdf2.pdf', {
            type: 'application/pdf',
        })
        const file3 = new File([JSON.stringify({chuckPDF3: true})], 'chuck-pdf3.pdf', {
            type: 'application/pdf',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file2, file3]}})
        })
        await waitFor(() => {
            const previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBe(0)
        })

        // Upload 1 .pdf file, should have 1 preview
        const file4 = new File([JSON.stringify({chuckPDF4: true})], 'chuck-pdf4.pdf', {
            type: 'application/pdf',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file4]}})
        })
        await waitFor(() => {
            const previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBe(1)
        })
    })

    test('Upload multiple files at a time of any images correctly', async () => {
        const {container} = render(
            <ThemeProvider theme={theme}>
                <FileUploadDropZone
                    uploadURL={null}
                    fieldName={'pic'}
                    sendOnDrop={false}
                    acceptFileType={'.jpeg,.png,.gif,.tif'}
                    multiple={true}
                />
                <ToastContainer autoClose={false} />
            </ThemeProvider>
        )

        const uploadInputElm = container.querySelector('input[type="file"]')
        expect(uploadInputElm).toBeTruthy()

        // Upload a .json file, should have 0 preview because the file is rejected
        const file1 = new File([JSON.stringify({chuckJSON: true})], 'chuck.json', {
            type: 'application/json',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file1]}})
        })
        await waitFor(() => {
            const previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBe(0)
        })

        // Upload 1 image, should have 1 preview
        const file2 = new File([JSON.stringify({image2: true})], 'chuck.jpeg', {
            type: 'image/jpeg',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file2]}})
        })
        await waitFor(() => {
            const previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBe(1)
        })

        // Upload 2 images, should have 3 previews
        const file3 = new File([JSON.stringify({image3: true})], 'chuck.png', {
            type: 'image/png',
        })
        const file4 = new File([JSON.stringify({image4: true})], 'chuck.gif', {
            type: 'image/gif',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file3, file4]}})
        })
        await waitFor(() => {
            const previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBe(3)
        })
    })
})

describe('Send files to server correctly', () => {
    test('Not send files to server because of lacking tags', async () => {
        const {container, getByTestId} = render(
            <ThemeProvider theme={theme}>
                <FileUploadDropZone
                    uploadURL={null}
                    fieldName={'pic'}
                    sendOnDrop={false}
                    acceptFileType={'.jpeg,.png,.gif,.tif'}
                    multiple={true}
                />
                <ToastContainer autoClose={false} />
            </ThemeProvider>
        )

        const uploadInputElm = container.querySelector('input[type="file"]')
        expect(uploadInputElm).toBeTruthy()

        // Upload 1 image
        const file = new File([JSON.stringify({image: true})], 'chuck.jpeg', {
            type: 'image/jpeg',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file]}})
        })
        await waitFor(() => {
            const previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBe(1)
        })

        // Get the send button
        const sendBtn = getByTestId('send-btn')
        // Click it, axios is not getting called because there's no tag added
        fireEvent.click(sendBtn)
        expect(axios).not.toHaveBeenCalled()
    })

    test('Send files to server properly after clicking send icon', async () => {
        const {container, getByTestId, getByPlaceholderText} = render(
            <ThemeProvider theme={theme}>
                <FileUploadDropZone
                    uploadURL="http://api.chassis.com"
                    fieldName={'pic'}
                    sendOnDrop={false}
                    acceptFileType={'.jpeg,.png,.gif,.tif'}
                    multiple={true}
                />
                <ToastContainer autoClose={false} />
            </ThemeProvider>
        )

        const uploadInputElm = container.querySelector('input[type="file"]')
        expect(uploadInputElm).toBeTruthy()

        // Upload 1 image
        const file = new File([JSON.stringify({image: true})], 'chuck.jpeg', {
            type: 'image/jpeg',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file]}})
        })
        await waitFor(() => {
            const previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBe(1)
        })

        // There should be an input for tags
        // const tagInputElm = getByPlaceholderText('Tags (comma separated)')
        // expect(tagInputElm).toBeTruthy()

        // Add some tags
        // act(() => {
        //     fireEvent.change(tagInputElm, {target: {value: 'image,images,png'}})
        // })

        // Get the send button
        const sendBtn = getByTestId('send-btn')
        // Click it, axios is getting called
        fireEvent.click(sendBtn)
        expect(axios).toHaveBeenCalledTimes(1)
    })

    test('Send files on drop event properly to server', async () => {
        const {container, getByPlaceholderText} = render(
            <ThemeProvider theme={theme}>
                <FileUploadDropZone
                    uploadURL="http://api.chassis.com"
                    fieldName={'pic'}
                    sendOnDrop={true}
                    acceptFileType={'.jpeg,.png,.gif,.tif'}
                    multiple={true}
                />
                <ToastContainer autoClose={false} />
            </ThemeProvider>
        )

        const uploadInputElm = container.querySelector('input[type="file"]')
        expect(uploadInputElm).toBeTruthy()

        // Add some tags
        // const tagInputElm = getByPlaceholderText('Tags (comma separated)')
        // expect(tagInputElm).toBeTruthy()
        // act(() => {
        //     fireEvent.change(tagInputElm, {target: {value: 'image,images,png'}})
        // })

        // Upload 1 image
        const file = new File([JSON.stringify({image: true})], 'chuck.jpeg', {
            type: 'image/jpeg',
        })
        act(() => {
            fireEvent.change(uploadInputElm, {target: {files: [file]}})
        })
        await waitFor(() => {
            const previewItems = container.querySelectorAll('.file-preview')
            expect(previewItems.length).toBe(1)
        })

        // axios is getting called
        expect(axios).toHaveBeenCalledTimes(1)
    })
})
