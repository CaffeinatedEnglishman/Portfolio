import { Container, Heading, Text, VStack, Box, SimpleGrid } from '@chakra-ui/react'

const About = () => {
  return (
    <Container maxW="container.lg" centerContent>
      <VStack spacing={8} align="stretch" width="100%">
        <Heading as="h1" size="xl">
          About Me
        </Heading>
        <Text fontSize="lg">
          Emerging Computer Science professional with hands-on experience in full-stack development, mobile and web applications, and software engineering internships. Proficient in Python, Java, Django, Angular, and Flutter. Skilled in building diverse projects, including student management systems, mobile apps, and AI-powered games. Strong problem-solving skills, adaptability, and a passion for continuous learning.
        </Text>

        <Box width="100%">
          <Heading as="h2" size="md" mb={4}>
            Technical Skills
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box>
              <Heading as="h3" size="sm" mb={2}>
                Languages & Frameworks
              </Heading>
              <Text>
                • Python, Java, C, HTML, CSS<br />
                • JavaScript, Django, Angular<br />
                • Next.js, Flutter<br />
                • Game Development: Godot
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm" mb={2}>
                Data & Backend
              </Heading>
              <Text>
                • SQL, Supabase, XAMPP<br />
                • Web Scraping: Selenium, BeautifulSoup<br />
                • Data Analysis: NumPy, Pandas<br />
                • Database Management
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm" mb={2}>
                Development Tools
              </Heading>
              <Text>
                • VSCode, Code::Blocks<br />
                • GitHub Desktop, Git Bash<br />
                • NetBeans, Microsoft Office<br />
                • WordPress
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm" mb={2}>
                Professional Skills
              </Heading>
              <Text>
                • Communication & Leadership<br />
                • Critical Thinking & Problem Solving<br />
                • Project Management<br />
                • English Fluency
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="md" mb={4}>
            Professional Experience
          </Heading>
          <VStack spacing={4} align="flex-start">
            <Box>
              <Text fontWeight="bold">Software Engineer Intern - Quanby IT Solutions</Text>
              <Text>Participated in full-stack development tasks across multiple projects (3 months)</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Full-stack Developer Intern - Awesome Kids Therapy Center</Text>
              <Text>Contributed to both frontend and backend implementations during internship</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Freelancer - Innodata</Text>
              <Text>Engaged in text/labeling and data annotation tasks as part of a project team (2 months)</Text>
            </Box>
          </VStack>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="md" mb={4}>
            Education & Qualifications
          </Heading>
          <VStack spacing={3} align="flex-start">
            <Box>
              <Text fontWeight="bold">Bachelor of Science in Computer Science</Text>
              <Text>Bicol University (2021-2025)</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Divine Word College of Legazpi</Text>
              <Text>Graduated With Honors (2014-2021)</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Additional Qualifications</Text>
              <Text>• Civil Service Exam: Successfully passed (May 02, 2025)<br />
              • Java Programming Course: NCIII (240 HOURS) DEC-JAN 2025</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default About 