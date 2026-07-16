
import React, { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface LayoutProps {
    children: ReactNode;
}

const Main = styled(motion.main)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  overflow-x: hidden;
  transition: background-color 0.3s ease;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Layout = ({ children }: LayoutProps) => {
    return (
        <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </Main>
    );
};

export default Layout;
