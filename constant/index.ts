import html from "@/assets/html.png";
import css from "@/assets/css.png";
import sass from "@/assets/sass.png";
import tailwindcss from "@/assets/tailwindcss.png";
import javascript from "@/assets/javascript.png";
import typescript from "@/assets/typescript.png";
import firebase from "@/assets/firebase.png";
import reactjs from "@/assets/reactjs.png";
import nextjs from "@/assets/nextjs.png";
import nodejs from "@/assets/nodejs.png";
import expressjs from "@/assets/expressjs.png";
import mongodb from "@/assets/mongodb.png";
import { BiLogoFirebase, BiLogoMongodb, BiLogoReact } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const skillsItem = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "TAILWIND CSS",
    icon: tailwindcss,
  },
  {
    name: "JAVASCRIPT",
    icon: javascript,
  },
  {
    name: "TYPESCRIPT",
    icon: typescript,
  },
  {
    name: "FIREBASE",
    icon: firebase,
  },
  {
    name: "REACT JS",
    icon: reactjs,
  },
  {
    name: "NEXT JS",
    icon: nextjs,
  },
  {
    name: "NODE JS",
    icon: nodejs,
  },
  {
    name: "EXPRESS JS",
    icon: expressjs,
  },
  {
    name: "MONGODB",
    icon: mongodb,
  },
];
export const projectItem = [
  {
    id: 1,
    title: "Disneyplues",
    description:
      "Discover the magic of Disneyplues, a captivating web clone of Disney+. Relive classics, explore new releases, and indulge in exclusive content. Experience Disney like never before.",
    image: "https://i.ibb.co/6847zbC/disneyplues.png",
    link: "https://www.disneyplues.cf",
    githubLink: "",
    hasGithubLink: false,
    technologies: [
      { icon: TbBrandNextjs, name: "Next" },
      { icon: BiLogoFirebase, name: "Firebase" },
    ],
  },
  {
    id: 2,
    title: "Learn Safari Camp",
    description:
      "Join Learn Safari Camp for a summer of creativity. Explore nature's wonders and unleash your inner artist. Register now and embark on a wild journey of art and craft!",
    image: "https://i.ibb.co/mh71qn1/learnsafaricamp.png",
    link: "https://learnsafaricamp.web.app",
    githubLink: "https://github.com/mahmudulmr19/learn-safari-camp",
    hasGithubLink: true,
    technologies: [
      { icon: BiLogoReact, name: "React" },
      { icon: BiLogoFirebase, name: "Firebase" },
      { icon: SiExpress, name: "Express" },
      { icon: BiLogoMongodb, name: "Mongodb" },
    ],
  },
  {
    id: 3,
    title: "Toy Palace",
    description:
      "Toy Palace: Explore, Buy, and Sell Toys. Discover a world of endless play possibilities. Enjoy the ultimate toy shopping experience.",
    image: "https://i.ibb.co/SPRn8QL/toy-palace.png",
    link: "https://toy-palaces.web.app",
    githubLink: "https://github.com/mahmudulmr19/toy-palace",
    hasGithubLink: true,
    technologies: [
      { icon: BiLogoReact, name: "React" },
      { icon: BiLogoFirebase, name: "Firebase" },
      { icon: SiExpress, name: "Express" },
      { icon: BiLogoMongodb, name: "Mongodb" },
    ],
  },
];
