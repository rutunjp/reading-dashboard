import { Button, Box } from '@chakra-ui/react'

export default function ButtonGroup() {
  return (
    <Box w={'full'}>
       
        <Button borderRightRadius={0}>Reading</Button>
        <Button borderRadius={0} borderLeft="1px solid #949494">
          Want to Read
        </Button>
        <Button borderLeftRadius={0} borderLeft="1px solid #949494">
          Favourites
        </Button>
      
    </Box>
  )
}
