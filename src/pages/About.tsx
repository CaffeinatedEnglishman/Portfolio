import { Container, Heading, Text, VStack, Box } from '@chakra-ui/react'

const About = () => {
  return (
    <Container maxW="container.lg">
      <VStack spacing={6} align="start">
        <Heading as="h1" size="xl">
          About Me
        </Heading>
        <Text fontSize="lg">
          I am a passionate web developer with expertise in modern web technologies.
          I love creating beautiful and functional web applications that solve real-world problems.
        </Text>
        <Box>
          <Heading as="h2" size="md" mb={4}>
            Skills
          </Heading>
          <Text>
            • Frontend: React, TypeScript, HTML5, CSS3<br />
            • UI Libraries: Chakra UI, Material-UI, Tailwind CSS<br />
            • Version Control: Git, GitHub<br />
            • Other: Responsive Design, Web Accessibility
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}

export default About 