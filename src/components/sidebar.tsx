import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  VStack,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'
import { FiBook, FiFileText, FiMenu } from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ReactText } from 'react'
import BottomBubble from './bottomBubble'

interface LinkItemProps {
  name: string
  icon: IconType
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Books', icon: FiBook },
  { name: 'Articles', icon: FiFileText },
]

export default function Sidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('purple.100', 'purple.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('#f5f5f5', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="xl" fontFamily="monospace" fontWeight="bold">
          Hello Kevin
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box height="fit-content" marginTop={'auto'} mb="auto">
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType

  children: ReactText
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="articles"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blackAlpha.300',
          color: 'white',
          transition: '200ms',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    // <Flex
    //   ml={{ base: 0, md: 60 }}
    //   px={{ base: 4, md: 24 }}
    //   height="20"
    //   alignItems="center"
    //   bg={useColorModeValue('white', 'gray.900')}
    //   borderBottomWidth="1px"
    //   borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
    //   justifyContent="flex-start"
    //   {...rest}
    // >
    //   <IconButton
    //     variant="outline"
    //     onClick={onOpen}
    //     aria-label="open menu"
    //     icon={<FiMenu />}
    //   />

    //   <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
    //     Logo
    //   </Text>
    // </Flex>

    <BottomBubble />
  )
}
