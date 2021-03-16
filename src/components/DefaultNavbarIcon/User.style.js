import styled from 'styled-components'

export const ShowUserName = styled.div`
    align-self: center;
    justify-self: end;
    color: ${({theme: {navbar}}) => navbar.color};
    font-weight: ${({theme: {navbar}}) => navbar.fontWeight};
    white-space: nowrap;

`