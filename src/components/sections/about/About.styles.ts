
import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutSection = styled.section`
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0.1;
    z-index: -1;
    transform: translate(20px, 20px);
  }
`;

export const ContentContainer = styled(motion.div)`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;
