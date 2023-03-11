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
          href="/dashboard"
          onClick={() => handleSidebarClick("/dashboard")}
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard"
          onClick={() => handleSidebarClick("/migrate")}
        >
          Migrate
        </Link>
        <Link
          href="/dashboard"
          onClick={() => handleSidebarClick("/profile")}
        >
          Profile
        </Link>
        <Link
          href="/dashboard"
          onClick={() => handleSidebarClick("/sports")}
        >
          Sports
        </Link>
      </Stack>
    </Box>
  );
}
