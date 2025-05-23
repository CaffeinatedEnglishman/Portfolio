import { Box, Flex, Link, Stack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg="white" px={4} borderBottom={1} borderStyle="solid" borderColor="gray.200">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <RouterLink to="/">
          <Link fontSize="xl" fontWeight="bold" _hover={{ textDecoration: 'none' }}>
            Portfolio
          </Link>
        </RouterLink>

        <Stack direction="row" spacing={8}>
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