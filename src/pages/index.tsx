import Link from "next/link";
import Head from "next/head";
import { ChakraProvider, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <>
        <Head>
          <title>BrightUI</title>
        </Head>

        <Text fontSize="5xl">Welcome to BrightUI</Text>

        <Text>
          <Link href="/dashboard">Dashboard</Link>
        </Text>

        <Text>
          <Link href="/migrate">Migrate</Link>
        </Text>

        <Text>
          <Link href="/profile">Profile</Link>
        </Text>

        <Text>
          <Link href="/sports">Sports</Link>
        </Text>
      </>
    </ChakraProvider>
  );
}
