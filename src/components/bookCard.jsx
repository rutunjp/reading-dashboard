import {
  Card,
  CardHeader,
  Text,
  Divider,
  Input,
  Box,
  CardBody,
  CardFooter,
} from '@chakra-ui/react'

export default function BookCard(props) {
  return (
    <Card _hover={{ boxShadow: 'dark-lg', transition: '300ms' }}>
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
  )
}
