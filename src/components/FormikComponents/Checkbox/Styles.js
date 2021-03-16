import styled from 'styled-components'

import { extendTheme } from '@chakra-ui/react';

const checkboxSize = '1.2rem'

export const CheckSignContainer = styled.div`
    width: ${checkboxSize};
    height: ${checkboxSize};

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    cursor: pointer;

    border-radius: ${({
        theme: {
            formikComponents: {borderRadius},
        },
    }) => borderRadius}rem;
    border: 1px solid
        ${({
            checked,
            theme: {
                formikComponents: {checkedBackgroundColor},
            },
        }) => {
            return checked ? checkedBackgroundColor : 'black'
        }};

    background-color: ${({
        checked,
        theme: {
            formikComponents: {checkedBackgroundColor, background},
        },
    }) => (checked ? checkedBackgroundColor : background)};

    &:hover {
        border-color: ${({
            checked,
            theme: {
                formikComponents: {checkedBackgroundColor, hoverBackgroundColor},
            },
        }) => {
            return checked ? checkedBackgroundColor : hoverBackgroundColor
        }};
        color: white;
    }
`

export const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`

export const CheckSign = styled.div`
    display: ${({checked}) => (checked ? 'block' : 'none')};
    position: relative;
    bottom: 7%;
    width: 25%;
    height: 50%;
    border: solid white;
    border-width: 0 0.1rem 0.1rem 0;
    transform: rotate(45deg);
`

/* chakra-ui */
// const CheckSignContainer = {
//     baseStyle: {
//         width: `${checkboxSize}`,
//         height: `${checkboxSize}`,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "relative",
//         cursor: "pointer",
//         borderRadius: `${({
//             theme: {
//                 formikComponents: {borderRadius},
//             },
//         }) => borderRadius}rem`,
//         border: `1px solid
//         ${({
//             checked,
//             theme: {
//                 formikComponents: {checkedBackgroundColor},
//             },
//         }) => {
//             return checked ? checkedBackgroundColor : 'black'
//         }}`,
//         backgroundColor: `${({
//             checked,
//             theme: {
//                 formikComponents: {checkedBackgroundColor, background},
//             },
//         }) => (checked ? checkedBackgroundColor : background)}`,
//         "&:hover": {
//             borderColor: `${({
//                 checked,
//                 theme: {
//                     formikComponents: {checkedBackgroundColor, hoverBackgroundColor},
//                 },
//             }) => {
//                 return checked ? checkedBackgroundColor : hoverBackgroundColor
//             }}`,
//             color: white,
//         }
//     }
// }

// const Input = {
//     baseStyle: {
//         position: "absolute",
//         opacity: 0,
//         cursor: "pointer",
//         height: 0,
//         width: 0
//     }
// }

// const CheckSign = {
//     baseStyle: {
//         display: `${({checked}) => (checked ? 'block' : 'none')}`,
//         position: "relative",
//         bottom: "7%",
//         width: "25%",
//         height: "50%",
//         border: "solid white",
//         borderWidth: "0 0.1rem 0.1rem 0",
//         transform: "rotate(45deg)",
//     }
// }

// export const customTheme = extendTheme({
//     components: {
//         CheckSignContainer,
//         CheckSign,
//         Input
//     }
// });