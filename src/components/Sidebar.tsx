import { Box, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  const handleSidebarClick = (path: string) => {
    router.push(path);
  };

  return (
    <Box
      w="65"
      bg="gray.300"
      pt="20"
      pb="20"
    >
      <Stack spacing="3">
        <Link
          href="/login"
          onClick={() => handleSidebarClick("/login")}
        >
          Login
        </Link>
        <Link
          href="/dashboard"
          onClick={() => handleSidebarClick("/dashboard")}
        >
          Dashboard
        </Link>
        <Link
          href="/migrate"
          onClick={() => handleSidebarClick("/migrate")}
        >
          Migrate
        </Link>
        <Link
          href="/profile"
          onClick={() => handleSidebarClick("/profile")}
        >
          Profile
        </Link>
        <Link
          href="/sports"
          onClick={() => handleSidebarClick("/sports")}
        >
          Sports
        </Link>
      </Stack>
    </Box>
  );
}
