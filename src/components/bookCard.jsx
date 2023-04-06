import {
  Card,
  CardHeader,
  Text,
  Divider,
  Select,
  Input,
  SliderThumb,
  Box,
  HStack,
  CardBody,
  ModalBody,
  CardFooter,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Modal,
  List,
  Checkbox,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
  ModalFooter,
  ModalHeader,
  Heading,
} from '@chakra-ui/react'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'
export default function BookCard(props) {
  async function deleteBook(e) {
    console.log('DELTE', props.bookTitle, props.firestoreId)
    await deleteDoc(doc(db, 'books', props.firestoreId))
    
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Card
        _hover={{ boxShadow: 'dark-lg', transition: '300ms' }}
        onClick={onOpen}
      >
        <CardHeader align={'center'}>{props.bookTitle}</CardHeader>
        <Text align={'center'}>{props.bookAuthor}</Text>
        <Divider />
        <CardBody>
          <Text>{props.bookGenre}</Text>
          <Text>{props.bookStatus}</Text>
          <Text align={'right'} fontSize={'xs'} fontWeight={'thin'}>
            56%
          </Text>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack align={'space-between'}>
              <Heading as="h3" size="md">
                {props.bookTitle}
              </Heading>
            </HStack>

            <Text>{props.bookGenre}</Text>
          </ModalHeader>
          <ModalBody>
            <Slider>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>

            <Select placeholder="Select Status" isRequired>
              <option value="reading">Reading</option>
              <option value="want-to-read">Want to Read</option>
              <option value="completed">Completed</option>
            </Select>
            <Checkbox>Add to Favourites</Checkbox>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => updateBookData()} colorScheme="blue">
              Save
            </Button>
            <Button colorScheme="red" onClick={(e) => deleteBook(e)}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
