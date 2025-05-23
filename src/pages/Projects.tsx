import { Container, Heading, SimpleGrid, Box, Text, Link, Tag, HStack, VStack } from '@chakra-ui/react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  link: string
}

const ProjectCard = ({ title, description, technologies, link }: ProjectCardProps) => {
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
      <VStack align="flex-start" spacing={4}>
        <HStack spacing={2} flexWrap="wrap">
          {technologies.map((tech, index) => (
            <Tag key={index} colorScheme="blue" size="sm">
              {tech}
            </Tag>
          ))}
        </HStack>
        <Link href={link} color="blue.500" isExternal>
          View Project →
        </Link>
      </VStack>
    </Box>
  )
}

const Projects = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'Led the development of a comprehensive student management system with user authentication, course management, and grade tracking features.',
      technologies: ['Django', 'HTML', 'JavaScript', 'CSS'],
      link: 'https://github.com/CaffeinatedEnglishman',
    },
    {
      title: 'GOTG (Game of the Generals)',
      description: 'Collaborated in developing an AI-powered implementation of the classic strategy game, featuring intelligent opponent behavior and interactive gameplay.',
      technologies: ['Godot', 'GDScript', 'AI'],
      link: 'https://github.com/CaffeinatedEnglishman',
    },
    {
      title: 'Inventory System',
      description: 'Contributed to the development of an inventory management system with real-time stock tracking and automated alerts.',
      technologies: ['NetBeans', 'Java', 'SQL'],
      link: 'https://github.com/CaffeinatedEnglishman',
    },
    {
      title: 'Mobile Messaging App',
      description: 'Developed a mobile messaging application with real-time chat functionality and secure data storage.',
      technologies: ['Flutter', 'Dart', 'Supabase'],
      link: 'https://github.com/CaffeinatedEnglishman',
    },
    {
      title: 'GUINOPINPOINT',
      description: 'Successfully developed and launched a project within scope and timeline, demonstrating project management and delivery capabilities.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      link: 'https://github.com/CaffeinatedEnglishman',
    }
  ]

  return (
    <Container maxW="container.lg" centerContent>
      <VStack spacing={8} align="stretch" width="100%">
        <Heading as="h1" size="xl">
          My Projects
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Here are some of the key projects I've worked on. Each project demonstrates my technical skills and problem-solving abilities.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} width="100%">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Projects 