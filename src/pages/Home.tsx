import { Box, Container, Heading, Text, Button, VStack, Center } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  return (
    <Container maxW="container.lg" h="calc(100vh - 80px)" display="flex" alignItems="center" justifyContent="center">
      <Center w="100%">
        <VStack spacing={8} textAlign="center" maxW="800px">
          <Heading 
            as="h1" 
            size="2xl" 
            bgGradient="linear(to-r, blue.400, blue.600)"
            bgClip="text"
            fontWeight="extrabold"
          >
            James Christian Manuel
          </Heading>
          <Text fontSize="2xl" color="gray.600" fontWeight="medium">
            Software Engineer & Full Stack Developer
          </Text>
          <Text fontSize="lg" maxW="container.md" color="gray.600" lineHeight="tall">
            Passionate about creating innovative web solutions and delivering exceptional user experiences.
            Specialized in modern web technologies and cloud computing.
          </Text>
          <Box pt={4}>
            <RouterLink to="/projects">
              <Button 
                colorScheme="blue" 
                size="lg" 
                mr={4}
                px={8}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                View My Work
              </Button>
            </RouterLink>
            <RouterLink to="/contact">
              <Button 
                colorScheme="gray" 
                size="lg"
                px={8}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Contact Me
              </Button>
            </RouterLink>
          </Box>
        </VStack>
      </Center>
    </Container>
  )
}

export default Home 