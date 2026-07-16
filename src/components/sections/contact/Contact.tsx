
import React from "react";
import { useTranslation } from "i18n";
import { profile } from "data/profile";
import { ContactSection, Title, Text, ButtonContainer, SocialButton, Email } from "./Contact.styles";
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiMail } from "react-icons/fi";

const Contact = () => {
    const { t } = useTranslation();
    const { contact } = t;

    const getIcon = (label: string) => {
        const lower = label.toLowerCase();
        if (lower.includes("github")) return <FiGithub />;
        if (lower.includes("linkedin")) return <FiLinkedin />;
        if (lower.includes("twitter")) return <FiTwitter />;
        if (lower.includes("facebook")) return <FiFacebook />;
        return <FiMail />;
    };

    return (
        <ContactSection id="contact">
            <Title
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {contact.getInTouch}
            </Title>

            <Text
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                {contact.shortTitle}
            </Text>

            <ButtonContainer
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <SocialButton href={`mailto:${profile.email}`}>
                    <FiMail /> Email Me
                </SocialButton>
                {profile.social && Object.entries(profile.social).map(([key, url]) => (
                    url && (
                        <SocialButton key={key} href={url} target="_blank" rel="noopener noreferrer">
                            {getIcon(key)} {key.charAt(0).toUpperCase() + key.slice(1)}
                        </SocialButton>
                    )
                ))}
            </ButtonContainer>

            <Email href={`mailto:${profile.email}`}>{profile.email}</Email>
        </ContactSection>
    );
};

export default Contact;
