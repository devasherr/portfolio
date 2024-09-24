import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "AI Powered Cyber Intelligence",
    description:
      "Me and my team built an AI-powered financial mobile application.",
    tools: ["AWS SES", "AWS S3", "PM2", "Nginx"],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Music Streaming Platform",
    description:
      "I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia.",
    tools: ["ReactJs", "MongoDB", "Go"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "AI Powered Real Estate",
    description:
      "My team built an AI-based real estate app using Replicate API and OpenAI. ",
    tools: ["React", "TypeScript", "MongoDB"],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
