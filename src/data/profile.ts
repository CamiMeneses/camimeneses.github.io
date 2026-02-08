export const profile = {
  name: "Camila Meneses",
  fullName: "Camila Andrea Meneses Torres",
  title: "Mechatronics engineer and FullStack developer",
  shortTitle: "Ing. Mecatrónica | Web Developer",
  email: "kam_1095@live.com",
  startYear: 2019,
  bio: [
    "I began my journey as a Web Developer in <b>2019</b>, since then I've been working mainly as a <b>Ruby on Rails</b> backend developer.",
    "In my daily routine I use <b>Git</b>, <b>Postman</b>, I manage databases and code hosting platforms such as <b>GitHub</b> and <b>Bitbucket</b>",
    "I keep learning about this world of development and I want to work hand in hand with best developers and people of all cultures to grow in many ways.",
    "I am going to take any challenge!",
  ],
};

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  variant: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "resume",
    label: "Resume",
    url: "https://drive.google.com/file/d/19_SCdFnqdS_J-f0YIU4dVdSYBL-MnTRT/view?usp=sharing",
    variant: "outline-success",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/camimeneses/",
    variant: "outline-info",
  },
  {
    id: "github",
    label: "Github",
    url: "https://github.com/CamiMeneses",
    variant: "outline-primary",
  },
];
