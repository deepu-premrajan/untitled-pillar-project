import { Center, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Center>
      <Flex justify="space-between">
        <Text textColor={"gray.500"}>BrightUI {new Date().getFullYear()}</Text>
        <Text>
          Crafted by <Link href="https://www.google.com">BrightUI.com</Link>
        </Text>
      </Flex>
    </Center>
  );
}
