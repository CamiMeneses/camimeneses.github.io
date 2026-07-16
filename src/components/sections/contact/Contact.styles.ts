
import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactSection = styled.section`
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  background-image: ${({ theme }) =>
        `radial-gradient(circle at 50% 100%, ${theme.colors.primary}26 0%, transparent 55%)`};
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: ${({ theme }) =>
        theme.mode === "dark"
            ? `0 0 20px ${theme.colors.primary}99, 0 0 45px ${theme.colors.secondary}55`
            : `0 0 18px ${theme.colors.primary}33`};
`;

export const Text = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const SocialButton = styled.a`
  padding: 1rem 2rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const Email = styled.a`
  display: block;
  margin-top: 2rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;
