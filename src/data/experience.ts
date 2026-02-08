import linc from "assets/icons/experience/linc.webp";
import skydropx from "assets/icons/experience/skydropx.png";
import picap from "assets/icons/experience/picap.jpg";
import twoTransfair from "assets/icons/experience/2transfair.png";
import youse from "assets/icons/experience/youse.png";
import bb from "assets/icons/experience/bb.png";
import upc from "assets/icons/experience/upc.png";
import distrital from "assets/icons/experience/distrital.png";
import unidad from "assets/icons/experience/unidad.png";

export interface ExperienceMeta {
  id: string;
  logo: string;
  url: string | null;
  secondLogo?: string;
  secondUrl?: string;
}

export const experiencesMeta: ExperienceMeta[] = [
  {
    id: "linc",
    logo: linc,
    url: "https://linclearning.com/es/",
  },
  {
    id: "skydropx",
    logo: skydropx,
    url: "https://www.skydropx.com/",
  },
  {
    id: "picap",
    logo: picap,
    url: "https://www.picap.app/",
  },
  {
    id: "twotransfair",
    logo: twoTransfair,
    url: "https://2transfair.com/",
  },
  {
    id: "youse",
    logo: youse,
    url: "https://www.youse.com.br/",
  },
  {
    id: "bb",
    logo: bb,
    url: "https://www.bogotabootcamp.com/",
  },
  {
    id: "unidad",
    logo: unidad,
    url: null,
  },
  {
    id: "distrital",
    logo: distrital,
    url: "https://www.udistrital.edu.co/",
    secondLogo: upc,
    secondUrl: "https://www.unipiloto.edu.co/",
  },
];

export const getExperienceMeta = (id: string): ExperienceMeta | undefined =>
  experiencesMeta.find((e) => e.id === id);
