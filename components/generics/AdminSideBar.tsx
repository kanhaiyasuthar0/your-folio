import React from "react";
import {
  Box,
  Link,
  Stack,
  Heading,
  Drawer,
  DrawerContent,
  useDisclosure,
  IconButton,
  DrawerOverlay,
} from "@chakra-ui/react";
import {
  HomeIcon,
  //   FolderIcon,
  PersonIcon,
  GearIcon,
  //   ArrowRightOnRectangleIcon, // Closest to "Log Out"
  //   Bars2Icon, // Closest to "Menu" icon
} from "@radix-ui/react-icons";

const SidebarContent = (props: any) => (
  <Box
    bg="blue.800"
    w={{ base: "full", md: 60 }}
    pos="fixed"
    h="full"
    {...props}
  >
    <Stack p="5" color="white" spacing={5}>
      <Heading size="md">Admin Panel</Heading>
      <Link href="/admin" display="flex" alignItems="center">
        <HomeIcon /> Dashboard
      </Link>
      <Link href="/admin/folio" display="flex" alignItems="center">
        Projects
      </Link>
      <Link href="/admin/profile" display="flex" alignItems="center">
        <PersonIcon /> Profile
      </Link>
      <Link href="/admin/settings" display="flex" alignItems="center">
        <GearIcon /> Settings
      </Link>
      <Link href="/logout" display="flex" alignItems="center">
        Logout
      </Link>
    </Stack>
  </Box>
);

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="gray.100">
      <IconButton
        aria-label="Open Menu"
        icon={<></>}
        onClick={onOpen}
        variant="outline"
        m={2}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Main content goes here */}
      </Box>
    </Box>
  );
}
