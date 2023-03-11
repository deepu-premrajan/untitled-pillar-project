import Head from "next/head";
import { Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>BrightUI</title>
      </Head>
      <Text fontSize="5xl">Welcome to BrightUI</Text>
      <Text>This is the homepage</Text>
    </>
  );
}
