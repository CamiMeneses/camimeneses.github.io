import linc from "../assets/icons/experience/linc.webp";
import skydropx from "../assets/icons/experience/skydropx.png";
import picap from "../assets/icons/experience/picap.jpg";
import twoTransfair from "../assets/icons/experience/2transfair.png";
import youse from "../assets/icons/experience/youse.png";
import bb from "../assets/icons/experience/bb.png";
import upc from "../assets/icons/experience/upc.png";
import distrital from "../assets/icons/experience/distrital.png";
import unidad from "../assets/icons/experience/unidad.png";

export const experiences = [
  {
    id: "linc",
    logo: linc,
    logoId: "linc",
    date: "Dec 2023 - Current",
    title: "SOFTWARE DEVELOPER",
    subtitle: "Lincspring & Yourwai | US | Remote",
    url: "https://linclearning.com/es/",
    tooltip: "About Linc",
    items: [
      {
        text: "Project: LincSpring",
        link: "https://linclearning.com/es/",
        highlight: "Ruby on Rails developer",
      },
      {
        text: "Project: Yourwai.",
        highlight: "Fullstack developer, Typescript, NestJs",
      },
      { text: "Integrations with OpenAi" },
    ],
  },
  {
    id: "skydropx",
    logo: skydropx,
    logoId: "skydropx",
    date: "Oct 2021 - Dec 2022",
    title: "RUBY ON RAILS DEVELOPER",
    subtitle: "Skydropx | MX | Remote",
    url: "https://www.skydropx.com/",
    tooltip: "About Skydropx",
    items: [{ highlight: "Ruby on Rails" }, { highlight: "Scrum - Jira" }],
  },
  {
    id: "picap",
    logo: picap,
    logoId: "picap",
    date: "Dec 2020 - Sep 2021",
    title: "RUBY ON RAILS DEVELOPER",
    subtitle: "Picap | Bogota, CO | Remote",
    url: "https://www.picap.app/",
    tooltip: "About Picap",
    items: [
      { highlight: "Ruby on Rails" },
      {
        text: "Build a project from scratch",
        link: "https://www.picap.app/#/pibox-storage",
        linkText: "Pibox Storage",
      },
      { text: "Unit tests", highlight: "Rspec" },
      { text: "Use", highlight: "Heroku" },
      { highlight: "API REST" },
      { text: "Use version control tool Git and code storage tool Bitbucket" },
      { highlight: "Scrum - Clickup" },
    ],
  },
  {
    id: "twotransfair",
    logo: twoTransfair,
    logoId: "twotransfair",
    date: "Mar - Jul 2020",
    title: "INTERMEDIATE DEVELOPER",
    subtitle: "2Transfair | FINTECH | Bogota, CO | Partly remote",
    url: "https://2transfair.com/",
    tooltip: "About 2Transfair",
    items: [
      { highlight: "Ruby on Rails" },
      { text: "Worked with a team to build a platform to bring credits" },
      { text: "Used", highlight: "HTML, CSS, bootstrap" },
      { text: "Built PDFs with dynamic data" },
      { highlight: "Monolithic" },
      { highlight: "API REST" },
      {
        text: "Used version control tool Git and code storage tool Bitbucket and reviewed Pull Requests.",
      },
      { text: "Contact with client" },
      { highlight: "Trello" },
    ],
  },
  {
    id: "youse",
    logo: youse,
    logoId: "youse",
    date: "May - Dec 2019",
    title: "IT TRAINEE | RUBY ON RAILS DEVELOPER",
    subtitle: "Youse Colombia - CNPX | INSURTECH | Bogota, CO",
    url: "https://www.youse.com.br/",
    tooltip: "About CNPX | Youse",
    items: [
      {
        text: "Collaborated with a team to implement a platform for insurances",
      },
      {
        text: "Wrote Unit tests for application quality assurance using",
        highlight: "Rspec",
      },
      {
        text: "Used version control tool Git and code storage tool GitHub and reviewed Pull Requests",
      },
      { text: "Worked with a third-party to implement Salesforce" },
      { text: "Followed the Scrum methodology and used", highlight: "Jira" },
      {
        text: "Set, updated and used data from",
        highlight: "AWS S3 and Redis",
      },
      { text: "Served as bug-fixer and fixed intermittent test" },
      { text: "Used tools like", highlight: "Rabbit MQ, Logentries" },
      { highlight: "Microservices" },
    ],
  },
  {
    id: "bb",
    logo: bb,
    logoId: "bb",
    date: "Mar - May 2019",
    title: "FREELANCE WEB DEVELOPER",
    subtitle: "Bogota Dev. Bootcamp & Dev Shop | Bogota, CO",
    url: "https://www.bogotabootcamp.com/",
    tooltip: "About Bogota Dev. Bootcamp & Dev Shop",
    items: [
      {
        text: "Built an application from scratch to manage the coding bootcamp using Ruby on Rails and Haml, Bootstrap, Devise gem and uploaded it to Heroku",
      },
      {
        text: "Implemented CRUD operations for the application using the MVC (Model View Controller) architecture",
      },
    ],
  },
  {
    id: "unidad",
    logo: unidad,
    logoId: "unidad",
    date: "Nov - Dec 2017",
    title: "TECNICO 1 DATA QUALITY",
    subtitle:
      "Unión temporal proceso unidad para la atención y reparación integral a las victimas 2017 | Bogota, CO",
    url: null,
    tooltip: null,
    items: [],
  },
  {
    id: "distrital",
    logo: distrital,
    logoId: "distrital",
    secondLogo: upc,
    secondLogoId: "upc",
    date: "Jul - Dec 2016",
    title: "STUDENT RESEARCHER | INTERN",
    subtitle:
      "Universidad Distrital Francisco José de Caldas | Universidad Piloto de Colombia | Bogota, CO",
    url: "https://www.udistrital.edu.co/",
    secondUrl: "https://www.unipiloto.edu.co/",
    tooltip: "About Universidad Distrital Francisco José de Caldas",
    secondTooltip: "About Universidad Piloto de Colombia",
    description:
      "Project: Diseño de un sistema domótico con la placa Intel Galileo Gen1. This project was based on the internet of things IoT, using programming languages like Python, HTML5, CSS, others",
    isEducation: true,
  },
];
