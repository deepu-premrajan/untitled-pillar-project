import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <h1>This is the login page</h1>
      <Button>Login</Button>
      <h2>
        <Link href="/">Back Home</Link>
      </h2>
    </>
  );
}
