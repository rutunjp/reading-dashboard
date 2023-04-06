import ButtonGroup from '@/components/articles/buttonGroup'
import { ChakraProvider, Heading } from '@chakra-ui/react'

export default function Articles() {
  return (
    <ChakraProvider>
      <Heading as={'h1'}>Articles</Heading>
      <ButtonGroup />
    </ChakraProvider>
  )
}
