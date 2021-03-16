import styled, {css} from 'styled-components'
import {FastField, ErrorMessage, Form, Field} from 'formik'
import {down} from 'styled-breakpoints'

/**
 * Form Title
 */
export const Title = styled.h1`
    align-self: flex-start;

    color: ${({theme: {formikComponents}}) => formikComponents.titleColor};
    font-size: ${({theme: {formikComponents}}) => formikComponents.titleSize};
    font-weight: ${({theme: {formikComponents}}) => formikComponents.titleWeight};

    margin-bottom: ${({theme: {formikComponents}}) => formikComponents.titleSize * 1.1}rem;

    ${down('mobile')} {
        text-align: center;
    }
`

/**
 * Main Formik form (wrap inputs, button, error message fields inside this component)
 */
export const FormikForm = styled(Form)`
    border: 1px solid #ddd;
    border-radius: 3px;

    padding: 2.5rem ${({theme: {formikComponents}}) => formikComponents.fontSize * 2}rem;

    display: flex;
    flex-flow: column;
    justify-content: center;

    margin: 5% auto;
    max-width: 25rem;
`

/**
 * Input Field
 */
const baseInputStyle = css`
    background: ${({theme: {formikComponents}}) => formikComponents.background};

    box-shadow: 1px 1px 0 ${({theme: {formikComponents}}) => formikComponents.shadowNotFocus} inset;
    border: ${({theme: {formikComponents}}) =>
        `${formikComponents.borderWidth}px solid ${formikComponents.borderColorNotFocus}`};
    border-radius: ${({theme: {formikComponents}}) => formikComponents.borderRadius}rem;

    font-size: ${({theme: {formikComponents}}) => formikComponents.fontSize * 0.8}rem;
    line-height: ${({theme: {formikComponents}}) => formikComponents.fontSize * 1.5}rem;

    margin: ${({theme: {formikComponents}}) => formikComponents.fontSize * 1}rem 0;

    width: 100%;
    padding: 0.75rem 0.5rem;

    &:focus,
    &:active {
        border-color: ${({theme: {formikComponents}}) => formikComponents.borderColorFocus};
        box-shadow: 0 0 3px 2px ${({theme: {formikComponents}}) => formikComponents.shadowFocus};

        outline: none;
    }

    &:disabled {
        border-color: ${({theme: {formikComponents}}) => formikComponents.borderColorDisabled};
        box-shadow: 0 0 3px 2px ${({theme: {formikComponents}}) => formikComponents.shadowDisabled};
        background: ${({theme: {formikComponents}}) => formikComponents.backgroundDisabled};
    }
`

export const RawInput = styled.input`
    ${baseInputStyle}
`

export const BasicInput = styled(Field)`
    ${baseInputStyle}
`

export const FastFieldInput = styled(FastField)`
    ${baseInputStyle}
`

/**
 * Error Message for Wrong Input
 */
export const InputErrorMessage = styled(ErrorMessage)`
    display: block;

    color: ${({theme: {formikComponents}}) => formikComponents.errorColor};
    font-size: ${({theme: {formikComponents}}) => formikComponents.errorFontSize}rem;

    white-space: pre-line;

    outline: none;
`

export {Checkbox} from './Checkbox'
