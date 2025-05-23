import { Box, Container, Flex, Link, HStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg="white" py={4} shadow="sm" position="sticky" top={0} zIndex={1000}>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <RouterLink to="/">
            <Link fontSize="xl" fontWeight="bold" _hover={{ textDecoration: 'none' }}>
              Portfolio
            </Link>
          </RouterLink>

          <HStack spacing={8}>
            <RouterLink to="/about">
              <Link _hover={{ color: 'blue.500' }}>About</Link>
            </RouterLink>
            <RouterLink to="/projects">
              <Link _hover={{ color: 'blue.500' }}>Projects</Link>
            </RouterLink>
            <RouterLink to="/contact">
              <Link _hover={{ color: 'blue.500' }}>Contact</Link>
            </RouterLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar 