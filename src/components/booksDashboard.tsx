import { VStack, Heading, HStack, Button, Container } from '@chakra-ui/react'
import React from 'react'
import AddBookModal from './addBookModal'
import BookCard from './bookCard'
import BookSearchModal from './bookSearchModal'
export default function BooksDashboard() {
  return (
    <VStack align={'start'} pt="6">
      <HStack
        w={'full'}
        placeContent="space-between"
        paddingX={'4'}
        align="center"
        pb="4"
      >
        <Heading as="h3" size="md" fontWeight="normal">
          Books Dashboard
        </Heading>
        
        <BookSearchModal />
      </HStack>

      <VStack
        pl="4"
        py="4"
        align={'start'}
        backgroundColor={'#dedede'}
        w="full"
        borderRadius={'12'}
      >
        <Heading as="h4" size="sm" pb="6" fontWeight="normal">
          Reading Now
        </Heading>
        <HStack>
          <BookCard
            bookTitle="Atmoic Habits"
            bookAuthor="James Wang"
            bookGenre="Fiction"
            bookStatus="Reading Now"
          />

          <BookCard
            bookTitle="Atmoic Habits"
            bookAuthor="James Wang"
            bookGenre="Fiction"
            bookStatus="Reading Now"
          />
        </HStack>
      </VStack>
    </VStack>
  )
}