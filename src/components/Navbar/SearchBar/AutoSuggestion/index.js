import React, {useState} from 'react'
import Autosuggest from 'react-autosuggest'
import * as data from './data'

import {MdSearch} from 'react-icons/md'
import {IconContext} from 'react-icons'
import {AutosuggestWrapper} from './Styles'

const AutoSuggestion = props => {
    const [value, setValue] = useState('')
    const [suggestions, setSuggestions] = useState([])

    // Teach Autosuggest how to calculate suggestions for any given input value.
    const getSuggestions = value => {
        const inputLength = value.length
        if (inputLength === 0) {
            return []
        }

        const inputValue = value.trim().toLowerCase()
        return data.wordList.filter(
            word => word.toLowerCase().slice(0, inputLength) === inputValue
        )
    }

    // Use the imagination to render suggestions.
    const renderSuggestion = suggestion => <div>{suggestion}</div>

    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    const getSuggestionValue = suggestion => suggestion

    // Handles click or enter on selected suggestion
    const onSuggestionSelected = (event, {suggestion, method}) => {
        if (method === 'click') props.onSubmit(suggestion)
    }

    // Autosuggest will call this function every time you need to update suggestions.
    const onSuggestionsFetchRequested = ({value}) => {
        setSuggestions(getSuggestions(value))
    }

    // Autosuggest will call this function every time you need to clear suggestions.
    const onSuggestionsClearRequested = () => {
        setSuggestions(getSuggestions([]))
    }

    const onChange = (event, {newValue}) => setValue(newValue)

    const onKeyDown = event => {
        if (event.key === 'Enter') {
            props.onSubmit(event.target.value)
        }
    }

    const inputProps = {
        placeholder: 'Search page...',
        value,
        onChange: onChange,
        onKeyDown: onKeyDown,
        size: 30,
    }

    return (
        <AutosuggestWrapper>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={onSuggestionSelected}
            />

            <IconContext.Provider
                value={{
                    style: {
                        cursor: 'pointer',
                        color: '#484545',
                        margin: '5px',
                        minWidth: '24px',
                    },
                }}
            >
                <MdSearch size="24px" />
            </IconContext.Provider>
        </AutosuggestWrapper>
    )
}

export default AutoSuggestion
