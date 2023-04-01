import {
  Card,
  CardBody,
  HStack,
  Image,
  VStack,
  Button,
  Text,
  ListItem,
  Heading,
} from '@chakra-ui/react'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'

export default function SearchResultCard(props) {
  async function newBook(props) {
    console.log('DOC PUSHED:', typeof props, props)
    const docRef = await addDoc(collection(db, 'books'), {
      ...props,
      notes: '',
    })
  }
  return (
    <ListItem>
      <Card backgroundColor={'gray.100'}>
        <CardBody>
          <HStack justifyContent={'space-between'}>
            <HStack>
              <Image src={props.imageLink} alt="Cover" />
              <VStack align={'start'}>
                <Heading as="h4" size="sm">
                  {props.title}
                </Heading>
                <Text fontSize="xs" justifyContent="left">
                  {props.authors}
                </Text>
              </VStack>
            </HStack>
            <Button
              onClick={async () => {
                await newBook(props)
              }}
            >
              <AiOutlinePlus />
            </Button>
          </HStack>
        </CardBody>
      </Card>
    </ListItem>
  )
}
