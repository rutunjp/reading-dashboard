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

export default function SearchResultCard(props) {
  console.log('PROPSPS:', props)
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
            <Button onClick={( ) => {}}>
              <AiOutlinePlus />
            </Button>
          </HStack>
        </CardBody>
      </Card>
    </ListItem>
  )
}
