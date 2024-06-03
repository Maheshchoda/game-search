import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Box padding={10}>
          <Outlet />
        </Box>
      </main>
    </>
  );
};

export default Layout;
