import { Container, Heading, SimpleGrid, Box, Text, Link } from '@chakra-ui/react'

const ProjectCard = ({ title, description, link }: { title: string; description: string; link: string }) => {
  return (
    <Box
      p={6}
      borderWidth={1}
      borderRadius="lg"
      _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
      transition="all 0.2s"
    >
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Text mb={4}>{description}</Text>
      <Link href={link} color="blue.500" isExternal>
        View Project →
      </Link>
    </Box>
  )
}

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your first project and what technologies you used.',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'Description of your second project highlighting your skills and achievements.',
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'Overview of another project showcasing different technical capabilities.',
      link: '#',
    },
  ]

  return (
    <Container maxW="container.lg">
      <Heading as="h1" size="xl" mb={8}>
        My Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Projects 