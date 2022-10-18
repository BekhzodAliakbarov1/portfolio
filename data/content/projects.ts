import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 6,
    title: "Ezload",
    desc: "Drivers cann book loads and can deliver its addresses",
    img: "/static/projects/ezload.png",
    link: "https://ezload.vercel.app/",
    github: "https://github.com/BekhzodAliakbarov1/ezload",
    tags: ["React", "React-Query", "TypeScript", "WebSocket"],
  },
  {
    id: 0,
    title: "University (SBTSUL)",
    desc: "All informations about this university",
    img: "/static/projects/sbtsul.png",
    link: "https://sbtsul.uz/",
    tags: ["React", "CSS", "Styled-components", "I-18next"],
  },
  {
    id: 1,
    title: "HBBH Company",
    desc: "Beautiful Portfolio for one company ",
    img: "/static/projects/hbbh.png",
    link: "https://hbbhportfolio.vercel.app/",
    tags: ["React", "Material-ui", "Javascript"],
    github: "https://github.com/BekhzodAliakbarov1/hbbhitcompany.interier",
  },
  {
    id: 2,
    title: "Home Service web app",
    desc: "Users can book some home services from this app.",
    img: "/static/projects/homeservice.png",
    link: "https://homeservice.vercel.app/",
    github: "https://github.com/BekhzodAliakbarov1/homealiance",
    tags: ["React", "Materil-Ui", "React Query", "Authontication"],
  },
  {
    id: 7,
    title: "Pizza Booking service",
    desc: "Booking service with framer motion and react",
    img: "/static/projects/pizza.png",
    link: "https://bekoo-pizza.vercel.app/",
    github: "https://github.com/BekhzodAliakbarov1/framer-motion-react",
    tags: ["React", "CSS", "Framer-motion", "React router dom"],
  },
  {
    id: 3,
    title: "Cost homealliance",
    desc: "Finding some home alliance informations easily",
    img: "/static/projects/cost.png",
    link: "https://cost-xi.vercel.app/",
    github: "https://github.com/BekhzodAliakbarov1/cost",
    tags: ["React", "SCSS", "API", "i-18next"],
  },
  {
    id: 4,
    title: "Queens Grass International",
    desc: "Informations about field technologies",
    img: "/static/projects/queengrass.png",
    github: "https://github.com/BekhzodAliakbarov1/QUEENGRASS",
    tags: ["React", "DJANGO", "NPM", "CSS"],
    link: "https://queengrasshbbh.vercel.app/",
  },
  {
    id: 5,
    title: "Voice Recorder",
    desc: "Can record voice and save it like to do app",
    img: "/static/projects/voice.png",
    github: "https://github.com/BekhzodAliakbarov1/audio",
    link: "https://audio-neon.vercel.app/",
    tags: ["JavaScript", "Wep API", "React"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
