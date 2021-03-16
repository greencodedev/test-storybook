import React, {useState, useEffect} from 'react'
import {CheckSignContainer, CheckSign, Input} from './Styles'

const Checkbox = ({form, field}) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        const isChecked = field && field.value ? field.value : false // if used with formik set the initial formik value
        setChecked(isChecked)
    }, [])

    const onClick = () => {
        const updatedValue = !checked
        setChecked(updatedValue)

        if (form) {
            form.setFieldValue(field.name, updatedValue) // manually update the formik value when checkbox changes
        }
    }

    return (
        <CheckSignContainer onClick={onClick} checked={checked} data-testid="checksign-container">
            <Input type="checkbox" />
            <CheckSign checked={checked} data-testid="checksign" />
        </CheckSignContainer>
    )
}

export {Checkbox}
