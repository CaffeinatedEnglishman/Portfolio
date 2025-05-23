import { Box, Flex, Link, Stack, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor} px={4} borderBottom={1} borderStyle={'solid'} borderColor={borderColor}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <RouterLink to="/">
          <Link fontSize="xl" fontWeight="bold" _hover={{ textDecoration: 'none' }}>
            Portfolio
          </Link>
        </RouterLink>

        <Stack direction={'row'} spacing={8}>
          <RouterLink to="/about">
            <Link>About</Link>
          </RouterLink>
          <RouterLink to="/projects">
            <Link>Projects</Link>
          </RouterLink>
          <RouterLink to="/contact">
            <Link>Contact</Link>
          </RouterLink>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Navbar 