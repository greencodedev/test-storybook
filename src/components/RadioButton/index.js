import React from 'react'
import {get} from 'lodash'
import {RadioChip, Container, ChipsWrapper} from './Styles'

const RadioButton = ({
    options = [],
    value: providedValue = null,
    onUpdate = () => {},
    isMultiple = false,
    form,
    field,
}) => {
    // When used with formik, we use rest.field.value. If used standalone, we expect value comes in from value prop
    // TODO: Skip lodash use, generates error on build
    const selectedValue = get(field, 'value', undefined) || providedValue || null
    // const selectedValue = providedValue || null

    // Check if all of initialValue exist in options
    let flag = true
    if (selectedValue) {
        // If isMultiple is true, we expect value is an array, else we expect to be a number or string
        if (isMultiple) {
            for (const v of selectedValue) {
                if (options.find(x => x.value === v)) continue
                else {
                    flag = false
                    break
                }
            }
        } else {
            flag = options.find(x => x.value === selectedValue)
        }
    }
    // Return error if any initialValue is not found
    if (flag === false) return <div>Value not found!</div>

    const onOptionClick = v => {
        let newValue = null
        if (isMultiple) {
            let s = new Set([...selectedValue])
            if (s.has(v)) {
                s.delete(v)
            } else {
                s.add(v)
            }
            newValue = Array.from(s)
        } else {
            newValue = v
        }

        // If it's a field of Formik
        if (form) {
            form.setFieldValue(field.name, newValue)
        }
        // If it's a standalone component
        else {
            onUpdate(newValue)
        }
    }

    return (
        <Container>
            <ChipsWrapper>
                {options.map(({text, value}) => (
                    <RadioChip
                        key={'b' + value}
                        onClick={e => {
                            e.preventDefault()
                            onOptionClick(value)
                        }}
                        selected={
                            isMultiple ? selectedValue.includes(value) : value === selectedValue
                        }
                    >
                        {text}
                    </RadioChip>
                ))}
            </ChipsWrapper>
        </Container>
    )
}

export default RadioButton
