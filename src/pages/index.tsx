import Head from "next/head";
import { Button, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Head>
        <title>BrightUI</title>
      </Head>
      <Text fontSize="5xl">Welcome to BrightUI</Text>
      <Text>This is the homepage</Text>
      <Button>Login</Button>
    </>
  );
};

Home.isHome = true;
export default Home;
