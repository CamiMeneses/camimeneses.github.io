
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const floatAnimation = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -30px) scale(1.15); }
`;

const floatAnimationReverse = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-30px, 25px) scale(1.1); }
`;

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  overflow: hidden;
  background: ${({ theme }) =>
        theme.mode === "dark"
            ? "radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%)"
            : "radial-gradient(circle at 50% 50%, #f7f9fc 0%, #ffffff 100%)"};
`;

export const BackgroundMore = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -15%;
    left: -10%;
    width: 55%;
    height: 55%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.primary} 0%, transparent 70%);
    filter: blur(90px);
    opacity: ${({ theme }) => (theme.mode === "dark" ? 0.55 : 0.45)};
    border-radius: 50%;
    animation: ${floatAnimation} 18s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15%;
    right: -10%;
    width: 45%;
    height: 45%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.secondary} 0%, transparent 70%);
    filter: blur(90px);
    opacity: ${({ theme }) => (theme.mode === "dark" ? 0.55 : 0.45)};
    border-radius: 50%;
    animation: ${floatAnimationReverse} 14s ease-in-out infinite;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
`;

export const Greeting = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const Name = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled(motion.div)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  min-height: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    flex-direction: column;
  }
`;

export const ScrollDown = styled(motion.a)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
