
import React from "react";
import { useTranslation } from "i18n";
import { EducationSection, MainTitle, Grid, Card, SectionTitle, Item, Institution, Degree, Details } from "./Education.styles";
import { FiBook, FiAward, FiGlobe } from "react-icons/fi";

// Import images directly or use from existing structure if possible. 
// For simplicity assuming images are available or we use placeholders/icons if imports fail.
// Existing code imported them:
import upc from "assets/icons/education/upc.png";
import bb from "assets/icons/education/bb.png";
import miriadax from "assets/icons/education/miriadax.png";
import esp from "assets/icons/education/esp.png";
import eng from "assets/icons/education/eng.webp";
import ec from "assets/icons/education/ec.png";
import ef from "assets/icons/education/ef.svg";

const Education = () => {
    const { t } = useTranslation();
    const { bachelor, courses, languages } = t.education;

    return (
        <EducationSection id="education">
            <MainTitle>{t.sections.education}</MainTitle>

            <Grid>
                {/* University */}
                <Card
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <SectionTitle><FiBook /> University</SectionTitle>
                    <Item>
                        <Institution>
                            <span>Unipiloto</span>
                            <img src={upc} alt="UPC" />
                        </Institution>
                        <Degree>{bachelor.title} {bachelor.degree}</Degree>
                        <Details>{bachelor.location}</Details>
                    </Item>
                </Card>

                {/* Courses & Bootcamps */}
                <Card
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <SectionTitle><FiAward /> Courses</SectionTitle>
                    <Item>
                        <Institution>
                            <span>{courses.bootcampName}</span>
                            <img src={bb} alt="Bootcamp" />
                        </Institution>
                        <Degree>{courses.fullstackBootcamp}</Degree>
                        <Details>{courses.bootcampDuration}</Details>
                    </Item>
                    <Item>
                        <Institution>
                            <span>{courses.miriadaInstitution}</span>
                            <img src={miriadax} alt="MiriadaX" />
                        </Institution>
                        <Degree>{courses.miriadaCourse}</Degree>
                        <Details>{courses.miriadaDuration}</Details>
                    </Item>
                </Card>

                {/* Languages */}
                <Card
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <SectionTitle><FiGlobe /> Languages</SectionTitle>
                    <Item>
                        <Institution>
                            <span>{languages.spanish}</span>
                            <img src={esp} alt="Spanish" />
                        </Institution>
                        <Degree>{languages.native}</Degree>
                    </Item>
                    <Item>
                        <Institution>
                            <span>{languages.english}</span>
                            <img src={eng} alt="English" />
                        </Institution>
                        <Degree>{languages.advanced}</Degree>
                        <Details>
                            <img src={ec} alt="EC" style={{ height: 20, marginRight: 5 }} />
                            {languages.ecVancouver}
                        </Details>
                        <Details>
                            <img src={ef} alt="EF" style={{ height: 20, marginRight: 5 }} />
                            {languages.efCertificate}
                        </Details>
                    </Item>
                </Card>
            </Grid>
        </EducationSection>
    );
};

export default Education;
