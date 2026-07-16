
import React from "react";
import { useTranslation } from "i18n";
import { skills } from "data/skills";
import { SkillsSection, Title, Grid, SkillCard } from "./Skills.styles";

const Skills = () => {
    const { t } = useTranslation();

    return (
        <SkillsSection id="skills">
            <Title
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {t.sections.skills}
            </Title>

            <Grid>
                {skills.map((skill, index) => (
                    <SkillCard
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <img src={skill.icon} alt={skill.name} loading="lazy" />
                        <span>{skill.name}</span>
                    </SkillCard>
                ))}
            </Grid>
        </SkillsSection>
    );
};

export default Skills;
