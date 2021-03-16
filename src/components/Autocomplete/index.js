import React, {useState} from 'react'
import Autosuggest from 'react-autosuggest'
import {FiXCircle} from 'react-icons/fi'
import FlexSearch from 'flexsearch/flexsearch.js'

import {AutosuggestWrapper, Chip} from './Styles'

/**
 * @param {data, dataDescriptor, value, onSelect, itemDisplay, multiple, placeholder, field, form}
 * @description AutoSuggest component that use Flexsearch to get suggestions.
 * @var dataDescriptor: refer to https://github.com/nextapps-de/flexsearch#complex-objects
 */

// Default item displaying function
const defaultItemDisplay = (item) => {
    if (!item) {
        throw Error('Item is undefined')
    }

    const displayedContent = item.name || item.title || item.value || item.content || item.id

    if (!displayedContent) {
        throw Error('Item has no name or title for displaying')
    }

    return displayedContent
}

const Autocomplete = ({
    data = [],
    dataDescriptor = {id: 'value', field: 'searchText'},
    value: nonFormikValue,
    onSelect = null,
    itemDisplay = defaultItemDisplay,
    multiple = false,
    placeholder,
    field: {value: formikValue, name: fieldName} = {value: null, name: null},
    form: {setFieldValue} = {setFieldValue: null},
}) => {
    const value = nonFormikValue || formikValue
    const updateValue =
        onSelect ||
        ((v) => {
            setFieldValue(fieldName, v)
        })

    // currentInput store the value in input box, when user type, currentInput will update
    const [currentInput, setCurrentInput] = useState('')

    // index is the FlexSearch object. It will only be updated but not replaced, so no setIndex
    // Currently disabled until we solve the Chinese search issue
    const [index] = useState(
        FlexSearch.create({
            split: /[-\s_;:,.'"|@!#$%^&*()[\]\{\}<>?\/\\`~]+/gmu,
            tokenize: 'forward',
            doc: dataDescriptor,
            cache: true,
            depth: 3,
            threshold: 1,
            resolution: 5,
        })
    )

    // suggestion is the search result from FlexSearch, when currentInput keep changing,
    // FlexSearch will be queried thru react-autosuggest internal mechanism.
    // Query result will be stored by setSuggestion.  Then the component will render "suggestion"
    const [suggestions, setSuggestions] = useState([])

    React.useEffect(() => {
        index.add(data)
    }, [data.length])

    // Teach Autosuggest how to calculate suggestions for any given input value.
    const getSuggestions = (input) => {
        const inputLength = input.length

        if (inputLength < 2) {
            return []
        }

        return index.search({query: input, limit: 20})
    }

    // Handles click or enter on selected suggestion
    const onSuggestionSelected = (event, {suggestion, method}) => {
        // if (method === 'click') props.onSubmit(suggestion)
        // if (method === 'enter') event.preventDefault()

        updateValue(multiple ? [...value, suggestion] : suggestion)
        setCurrentInput('')
    }

    // Autosuggest will call this function every time you need to update suggestions.
    const onSuggestionsFetchRequested = ({value, reason}) => {
        if (reason === 'input-changed') {
            setSuggestions(getSuggestions(value))
        }
    }

    const onChange = (event, {newValue}) => setCurrentInput(newValue)

    // When given suggestions are not matched
    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            // props.onSubmit(event.target.value)
            event.preventDefault()

            // const userInput = event.target.value
            // if (userInput.length) {
            //     updateValue(multiple ? [...value, userInput] : userInput)
            // }
            // setCurrentInput('')
        }
    }

    const removeItem = (index) => {
        if (multiple === false) {
            return updateValue('')
        }

        let newSelections = value.slice()
        newSelections.splice(index, 1)
        updateValue(newSelections)
    }

    const getSelectedChip = (item, index) => {
        return (
            <Chip key={index}>
                <span>{itemDisplay(item)}</span>
                <FiXCircle onClick={() => removeItem(index)} />
            </Chip>
        )
    }

    const isValueEmpty = Object.keys(value).length === 0

    const inputProps = {
        placeholder: isValueEmpty ? placeholder : '',
        value: currentInput,
        onChange: onChange,
        onKeyDown: onKeyDown,
        disabled: !multiple && !isValueEmpty,
    }

    return (
        <AutosuggestWrapper isMultiple={multiple}>
            {multiple
                ? value.map((item, index) => getSelectedChip(item, index))
                : isValueEmpty
                ? null
                : getSelectedChip(value, 0)}

            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={() => setSuggestions([])}
                getSuggestionValue={itemDisplay}
                renderSuggestion={(v) => {
                    return <div>{itemDisplay(v)}</div>
                }}
                inputProps={inputProps}
                onSuggestionSelected={onSuggestionSelected}
            />
        </AutosuggestWrapper>
    )
}

export default Autocomplete
