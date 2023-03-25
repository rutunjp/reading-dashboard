import Sidebar from '@/components/sidebar'
import {
  ChakraProvider,
  Container,
  Heading,
  VStack,
  Button,
  HStack,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <HStack align={'start'}>
        <Sidebar />
        <Container
          maxW={'100%'}
          minH={'100vh'}
          backgroundColor="#f5f5f5"
        ></Container>
      </HStack>
    </ChakraProvider>
  )
}
