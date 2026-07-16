
import React from "react";
import { useTranslation } from "i18n";
import { useTheme } from "themes/ThemeContext";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { HeroContainer, BackgroundMore, HeroContent, Greeting, Name, Subtitle, ScrollDown } from "./Hero.styles";

const Hero = () => {
    const { t } = useTranslation();
    const { welcome } = t;

    return (
        <HeroContainer id="welcome">
            <BackgroundMore />
            <HeroContent>
                <Greeting
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {welcome.hello}
                </Greeting>
                <Name
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {welcome.im} {welcome.name}
                </Name>
                <Subtitle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <span>{welcome.welcomeTo}</span>
                    <motion.span
                        style={{ fontWeight: "bold" }}
                        animate={{ color: ["#6366f1", "#ec4899", "#6366f1"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        {welcome.website}
                    </motion.span>
                </Subtitle>
            </HeroContent>

            <ScrollDown
                href="#about"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <FiChevronDown />
            </ScrollDown>
        </HeroContainer>
    );
};

export default Hero;
