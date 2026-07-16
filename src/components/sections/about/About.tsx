
import React from "react";
import { useTranslation } from "i18n";
import { AboutSection, Container, ImageContainer, ContentContainer } from "./About.styles";
import Profile from "assets/img/profile/profile.png";
import { profile } from "data/profile";

const About = () => {
    const { t } = useTranslation();
    const { about } = t;

    return (
        <AboutSection id="about">
            <Container>
                <ImageContainer
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img src={Profile} alt={profile.name} />
                </ImageContainer>

                <ContentContainer
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2>{about.title}</h2>
                    {about.bio.map((paragraph: string, index: number) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                    <p>
                        {about.checkOut} <br />
                        {about.andFeelFree}{" "}
                        <b>
                            <a href="#contact">{about.contactMe}</a>
                        </b>
                    </p>
                </ContentContainer>
            </Container>
        </AboutSection>
    );
};

export default About;
