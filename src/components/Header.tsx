import Login from "@/pages/login+signup";
import { Box, Center, Flex, Spacer, Text, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Center>
      <Flex justify="space-between">
        <Text textColor={"gray.500"}>This the header</Text>
        <Login />
      </Flex>
    </Center>
  );
}
