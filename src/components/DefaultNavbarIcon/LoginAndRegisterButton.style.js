import styled from 'styled-components'

export const LoginLink = styled.a`
    align-self: center;
    justify-self: end;

    font-weight: ${({theme: {navbar}}) => navbar.fontWeight};
    color: ${({theme: {navbar}}) => navbar.color};

    cursor: pointer;
    white-space: nowrap;
`

export const Center = styled.div`
    align-self: center;
    justify-self: end;
    cursor: pointer;
    white-space: nowrap;

    font-weight: ${({theme: {navbar}}) => navbar.fontWeight};
    color: ${({theme: {navbar}}) => navbar.color};
`
