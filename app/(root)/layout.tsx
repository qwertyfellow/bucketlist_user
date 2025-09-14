import React from "react";
import { Container } from "@mantine/core";
import Navbar from "@/components/Navigation/NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container size={1000} style={{ marginTop: "6rem" }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
