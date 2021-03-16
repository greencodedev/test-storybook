import React, {useState} from 'react'

import AutoSuggestion from './AutoSuggestion/index'
import * as data from './data'

import {ErrorMsg, Item, Container} from './Styles'

const SearchBar = props => {
    const [matchedItems, setMatchedItems] = useState([])
    const [notMatched, setNotMatched] = useState(false)

    const onSubmit = value => {
        setNotMatched(false)
        const inputLength = value.length

        if (inputLength === 0) {
            return
        }

        const inputValue = value.trim().toLowerCase()
        const matchedItems = data.dummydata.filter(
            product => product.str.toLowerCase().slice(0, inputLength) === inputValue
        )

        setMatchedItems(matchedItems)
        if (matchedItems.length === 0) {
            setNotMatched(true)
        } else {
            setNotMatched(false)
        }
    }

    const onItemClick = itemLink => {
        console.log(itemLink, '@onItemClick')
    }

    return (
        <Container {...props}>
            <AutoSuggestion onSubmit={onSubmit} />
            <div>
                {matchedItems.map((item, i) => (
                    <Item onClick={() => onItemClick(item.link)} key={i}>
                        {item.str}
                    </Item>
                ))}
                {notMatched && <ErrorMsg>No match found</ErrorMsg>}
            </div>
        </Container>
    )
}

export default SearchBar
