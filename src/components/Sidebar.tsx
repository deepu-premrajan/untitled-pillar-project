import { Box, Stack } from "@chakra-ui/react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Box
      w="65"
      bg="gray.300"
      pt="20"
      pb="20"
    >
      <Stack spacing="3">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/migrate">Migrate</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/sports">Sports</Link>
      </Stack>
    </Box>
  );
}
