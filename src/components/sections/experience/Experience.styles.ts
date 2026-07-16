
import styled from "styled-components";
import { motion } from "framer-motion";

export const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: ${({ theme }) =>
        theme.mode === "dark"
            ? `0 0 20px ${theme.colors.primary}99, 0 0 45px ${theme.colors.secondary}55`
            : `0 0 18px ${theme.colors.primary}33`};
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: ${({ theme }) => theme.colors.border};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

export const Container = styled(motion.div) <{ $left?: boolean }>`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: ${({ $left }) => ($left ? "0" : "50%")};

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: ${({ $left }) => ($left ? "-10px" : "auto")};
    left: ${({ $left }) => ($left ? "auto" : "-10px")};
    background-color: ${({ theme }) => theme.colors.background};
    border: 4px solid ${({ theme }) => theme.colors.primary};
    top: 25px;
    border-radius: 50%;
    z-index: 1;

    @media (max-width: 768px) {
      left: 21px;
    }
  }
`;

export const Content = styled.div`
  padding: 20px 30px;
  background: ${({ theme }) => theme.colors.surface};
  position: relative;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Date = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  background: ${({ theme }) => theme.colors.surfaceHighlight};
  padding: 0.2rem 0.8rem;
  border-radius: 20px;
`;

export const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Company = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: inherit;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    border-radius: 4px;
  }
`;

export const Description = styled.div`
  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    li {
      margin-bottom: 0.5rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1rem;
  }
`;
