import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.lg',
        px: [4, 6, 8],
        py: [4, 6, 8],
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'medium',
      },
      defaultProps: {
        colorScheme: 'blue',
        size: 'lg',
      },
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
})

export default theme 