import { VStack, Heading, HStack, Button, Container } from '@chakra-ui/react'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import BookCard from './bookCard'
import BookSearchModal from './bookSearchModal'
import ChakraCarousel from './carousel'

import { db } from '../../firebase-config'
export default function BooksDashboard() {
  const [books, setBooks] = useState([])
  const booksCollectionRef = collection(db, 'books')

  const bookCards = books.map((book) => (
    <BookCard
      bookTitle={book.title}
      bookAuthor={book.author}
      bookGenre={book.genre}
      bookStatus={book.status}
      firestoreId={book.id}
      key={book.id}
    />
  ))

  const bookCardsReading = books
    .filter(checkReading)
    .map((book) => (
      <BookCard
        bookTitle={book.title}
        bookAuthor={book.author}
        bookGenre={book.genre}
        bookStatus={book.status}
        firestoreId={book.id}
        key={book.id}
      />
    ))

  const bookCardsCompleted = books
    .filter(checkCompleted)
    .map((book) => (
      <BookCard
        bookTitle={book.title}
        bookAuthor={book.author}
        bookGenre={book.genre}
        bookStatus={book.status}
        firestoreId={book.id}
        key={book.id}
      />
    ))

  const bookCardsWantToRead = books
    .filter(checkWantToRead)
    .map((book) => (
      <BookCard
        bookTitle={book.title}
        bookAuthor={book.author}
        bookGenre={book.genre}
        bookStatus={book.status}
        firestoreId={book.id}
        key={book.id}
      />
    ))
  function checkCompleted(book) {
    return book.statusTag == 'completed'
  }
  function checkWantToRead(book) {
    return book.statusTag == 'want-to-read'
  }
  function checkReading(book) {
    return book.statusTag == 'reading'
  }

  useEffect(() => {
    async function getBooks() {
      const data = await getDocs(booksCollectionRef)

      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getBooks()
  }, [])
  // console.log(bookCards)
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
          <ChakraCarousel gap={32}>{bookCards}</ChakraCarousel>
        </HStack>
      </VStack>
      <VStack
        pl="4"
        py="4"
        align={'start'}
        backgroundColor={'#dedede'}
        w="full"
        borderRadius={'12'}
      >
        <Heading as="h4" size="sm" pb="6" fontWeight="normal">
          Reading
        </Heading>
        <HStack>
          <ChakraCarousel gap={32}>{bookCardsReading}</ChakraCarousel>
        </HStack>
      </VStack>

      <VStack
        pl="4"
        py="4"
        align={'start'}
        backgroundColor={'#dedede'}
        w="full"
        borderRadius={'12'}
      >
        <Heading as="h4" size="sm" pb="6" fontWeight="normal">
          Completed
        </Heading>
        <HStack>
          <ChakraCarousel gap={32}>{bookCardsCompleted}</ChakraCarousel>
        </HStack>
      </VStack>
      <VStack
        pl="4"
        py="4"
        align={'start'}
        backgroundColor={'#dedede'}
        w="full"
        borderRadius={'12'}
      >
        <Heading as="h4" size="sm" pb="6" fontWeight="normal">
          Want To Read
        </Heading>
        <HStack>
          <ChakraCarousel gap={32}>{bookCardsWantToRead}</ChakraCarousel>
        </HStack>
      </VStack>
    </VStack>
  )
}
