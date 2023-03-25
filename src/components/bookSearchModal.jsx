import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  useDisclosure,
  List,
  ListItem,
  Input,
} from '@chakra-ui/react'
import { useState } from 'react'
import SearchResultCard from './searchResultCard'

export default function BookSearchModal() {
  const [results, setResults] = useState([])
  console.log('RESSSSSSILTS:', results)
  const listItems = results.map((result) => (
    <SearchResultCard
      key={result.id}
      title={result.volumeInfo.title}
      authors={result.volumeInfo.authors}
      // imageLink={result.volumeInfo.imageLinks.thumbnail}
    />
  ))

  const { isOpen, onOpen, onClose } = useDisclosure()
  const axios = require('axios')
  async function requestBooks(title) {
    console.log(title)

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
      .then(function (response) {
        console.log(response)
        setResults(response.data.items)
      })
      .catch(function (error) {
        console.log(error)
      })
      .finally(function () {
        console.log('Axios called')
      })
  }
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Input
              placeholder="Search Title"
              variant={'flushed'}
              onChange={async (e) => {
                await requestBooks(e.target.value)
              }}
              mb="4"
            />
            <List maxH={'50vh'} overflow="auto" spacing={'2'}>
              {listItems}
            </List>
          </ModalHeader>
        </ModalContent>
      </Modal>
    </>
  )
}
