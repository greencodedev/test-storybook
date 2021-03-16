import React from 'react'
import styled, { css, keyframes, withTheme } from 'styled-components'

import { extendTheme, useStyleConfig } from '@chakra-ui/react';


const ButtonStyle = {
    // The styles all button have in common
    baseStyle: {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    // Two sizes: sm and md
    sizes: {
      sm: {
        fontSize: "12px",
        padding: "16px",
      },
      md: {
        fontSize: "16px",
        padding: "24px",
      },
    },
    // Two variants: outline and solid
    variants: {
      outline: {
        border: "2px solid",
        borderColor: "green.500",
      },
      solid: {
        bg: "green.500",
        color: "white",
      },
    },
    // The default size and variant values
    defaultProps: {
      size: "md",
      variant: "outline",
    },
  }

  export const customTheme = extendTheme({
    components: {
      ButtonStyle,
    },
  })

  const styles = useStyleConfig(customTheme, props);

  console.log("styles => ", styles);

  function CustomButton(props) {
    const { size, variant, ...rest } = props
    const styles = useStyleConfig("ButtonStyle", { size, variant })
    return <Box as="button" sx={styles} {...rest} />
  }

  export default CustomButton;