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

export default function BookCard(props) {
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

            <Select>
              <option>Reading</option>
              <option>Want to Read</option>
              <option>Completed</option>
            </Select>
            <Checkbox>Add to Favourites</Checkbox>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
