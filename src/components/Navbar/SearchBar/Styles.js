import styled from 'styled-components'
import {down} from 'styled-breakpoints'

export const Container = styled.div`
    grid-area: searchbar;
    justify-self: end;
    align-self: center;

    display: ${({disableSearchBar=false})=> disableSearchBar? 'none': 'flex'};
    flex-direction: column;
    ${down('tablet')} {
        display: ${({isMenuExpanded, disableSearchBar=false}) => ((isMenuExpanded & !disableSearchBar) ? 'flex' : 'none')};
        width: 100%;
    }
`

export const ErrorMsg = styled.div`
    position: absolute;
    color: ${({theme: {navbar}}) => navbar.color};
`

export const Item = styled.div`
    padding: 0.2rem 0;
    color: ${({theme: {navbar}}) => navbar.color};
    text-decoration: underline;
`
