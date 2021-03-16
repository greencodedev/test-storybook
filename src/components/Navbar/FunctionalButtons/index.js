import React from 'react'

import { FunctionButtonDiv } from './Styles'

const FunctionalButtons = ({ icons, ...rest }) => {
    return <FunctionButtonDiv {...rest}>{icons.map((v) => v(rest))}</FunctionButtonDiv>
}

export default FunctionalButtons
