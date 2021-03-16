import styled, {css} from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const ChipsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-bottom: 1rem;
`

export const RadioChip = styled.div`
    border-radius: ${({theme: {radioButton}}) => radioButton.borderRadius}rem;
    border: ${({theme: {radioButton}}) =>
        `${radioButton.borderWidth}px solid ${radioButton.borderColor}`};

    display: flex;
    align-items: center;

    margin: ${({theme: {radioButton}}) => radioButton.fontSize * 0.5}rem;
    padding: ${({theme: {radioButton}}) => radioButton.fontSize * 0.25}rem
        ${({theme: {radioButton}}) => radioButton.fontSize * 1}rem;

    cursor: pointer;

    ${({theme: {radioButton}, selected}) =>
        selected
            ? css`
                  background-color: ${radioButton.backgroundSelected};
                  color: ${radioButton.backgroundNotSelected};
              `
            : css`
                  background-color: ${radioButton.backgroundNotSelected};
                  color: ${radioButton.backgroundSelected};
              `};
`
