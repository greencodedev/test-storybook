import React from 'react'
import styled from 'styled-components'

const HighPriorityButtonDiv = styled.div`
    grid-area: highpriority;
    display: grid;
    grid-template-columns: auto;
    grid-auto-flow: column;
    grid-template-rows: auto;
    grid-column-gap: 1.5rem;

    line-height: ${({ theme: { navbar } }) => navbar.fontSize}rem;
    color: ${({ theme: { navbar } }) => navbar.color};
    padding: 0rem 0;
`

const HighPriorityButtons = ({ icons, ...rest }) => {
    return <HighPriorityButtonDiv {...rest}>{icons.map((v) => v(rest))}</HighPriorityButtonDiv>
}

export default HighPriorityButtons
