import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  return (
    <Container maxW="container.lg">
      <VStack spacing={8} py={20} textAlign="center">
        <Heading as="h1" size="2xl">
          Welcome to My Portfolio
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Hi, I'm a passionate developer creating amazing web experiences
        </Text>
        <Box>
          <RouterLink to="/projects">
            <Button colorScheme="blue" size="lg" mr={4}>
              View My Work
            </Button>
          </RouterLink>
          <RouterLink to="/contact">
            <Button colorScheme="gray" size="lg">
              Contact Me
            </Button>
          </RouterLink>
        </Box>
      </VStack>
    </Container>
  )
}

export default Home 