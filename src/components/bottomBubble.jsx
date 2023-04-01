import { HStack, Box, Button } from '@chakra-ui/react'

import { FiBook, FiFileText } from 'react-icons/fi'

export default function BottomBubble() {
  return (
    <Box
      backgroundColor={'#fff'}
      className="bottomBubble"
      borderRadius={23}
      zIndex={1000}
      position="absolute"
      bottom={'3em'}
      left={'50%'}
      boxShadow={'xl'}
    >
      <HStack>
        <Button background={'none'} borderRadius={100}>
          <FiBook />
        </Button>
        <Button background={'none'} borderRadius={100}>
          <FiFileText />
        </Button>
      </HStack>
    </Box>
  )
}
