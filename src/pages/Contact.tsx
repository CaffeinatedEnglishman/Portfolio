import { Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast } from '@chakra-ui/react'
import { useState, FormEvent } from 'react'

const Contact = () => {
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon!",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Container maxW="container.md">
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl">
          Contact Me
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                size="lg"
                rows={6}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" width="full">
              Send Message
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  )
}

export default Contact 