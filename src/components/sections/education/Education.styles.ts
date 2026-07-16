
import styled from "styled-components";
import { motion } from "framer-motion";

export const EducationSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.surface};
  text-align: center;
`;

export const MainTitle = styled.h2`
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Item = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const Institution = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 30px;
    object-fit: contain;
  }
`;

export const Degree = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;
`;

export const Details = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
`;
