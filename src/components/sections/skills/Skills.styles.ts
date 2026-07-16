
import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.surface};
  background-image: ${({ theme }) =>
        `radial-gradient(circle at 15% 20%, ${theme.colors.primary}22 0%, transparent 45%), radial-gradient(circle at 85% 80%, ${theme.colors.secondary}22 0%, transparent 45%)`};
  text-align: center;
`;

export const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: ${({ theme }) =>
        theme.mode === "dark"
            ? `0 0 20px ${theme.colors.primary}99, 0 0 45px ${theme.colors.secondary}55`
            : `0 0 18px ${theme.colors.primary}33`};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
    object-fit: contain;
  }

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
