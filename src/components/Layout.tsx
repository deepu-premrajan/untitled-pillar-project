import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex h="100vh">
      <Sidebar />
      <Box flex="1">
        <Header />
        <Box p="8">{children}</Box>
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
