
import React from "react";
import { useTranslation } from "i18n";
import { getExperienceMeta } from "data/experience";
import { ExperienceSection, Title, Timeline, Container, Content, Date, JobTitle, Company, Description } from "./Experience.styles";

const Experience = () => {
    const { t } = useTranslation();
    // Reverse to show latest first if not already
    const experiences = [...t.experiences];

    return (
        <ExperienceSection id="experience">
            <Title>{t.sections.experience}</Title>

            <Timeline>
                {experiences.map((exp: any, index: number) => {
                    const meta = getExperienceMeta(exp.id);
                    const isLeft = index % 2 === 0;

                    return (
                        <Container
                            key={exp.id}
                            $left={isLeft}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Content>
                                <Date>{exp.date}</Date>
                                <JobTitle>{exp.title}</JobTitle>
                                <Company>
                                    {meta?.logo && <img src={meta.logo} alt={exp.title} />}
                                    {meta?.url ? (
                                        <a href={meta.url} target="_blank" rel="noopener noreferrer">
                                            {exp.subtitle}
                                        </a>
                                    ) : (
                                        <span>{exp.subtitle}</span>
                                    )}
                                </Company>
                                <Description>
                                    {exp.description && <p>{exp.description}</p>}
                                    {exp.items && (
                                        <ul>
                                            {exp.items.map((item: any, i: number) => (
                                                <li key={i}>
                                                    {item.text} {item.highlight && <b>{item.highlight}</b>}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Description>
                            </Content>
                        </Container>
                    );
                })}
            </Timeline>
        </ExperienceSection>
    );
};

export default Experience;
