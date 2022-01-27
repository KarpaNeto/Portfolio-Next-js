import { Service, Skill, Project } from './type'
import { RiComputerLine } from 'react-icons/ri'
import { MdComputer } from 'react-icons/md'
import { FaServer, FaFigma } from 'react-icons/fa'
import { AiOutlineApi } from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'




export const services: Service[] = [

    {
        Icon: MdComputer,
        title: "Front-end Development",
        about: "I build beatiful Static Website, SPA & Design System using <b>HTML</b>, <b>CSS</b> and <b>React.js/Next.js</b>",

    },

    {
        Icon: FaServer,
        title: "Backend Development",
        about: "handle database, server , api using <b>Express</b> & other popular frameworks",
    },

    {
        Icon: AiOutlineApi,
        title: "API Development",
        about: "lorem...",

    },

    {
        Icon: FaFigma,
        title: "UI Design",
        about: "lorem...",
    },

    {
        Icon: RiComputerLine,
        title: "Front-end Dev",
        about: "lorem...",

    },

    {
        Icon: RiComputerLine,
        title: "Backend Dev",
        about: "lorem...",
    }
]

export const languages: Skill[] = [

    {
        Icon: BsCircleFill,
        name: 'HTML',
        level: '80%',
    },

    {
        Icon: BsCircleFill,
        name: 'CSS/Sass',
        level: '80%',
    },
    {
        Icon: BsCircleFill,
        name: 'Bootstrap',
        level: '70%',
    },

    {
        Icon: BsCircleFill,
        name: 'JavaScript',
        level: '60%',
    },
    {
        Icon: BsCircleFill,
        name: 'React.js',
        level: '45%',
    },

    {
        Icon: BsCircleFill,
        name: 'Next.js',
        level: '45%',
    },

    {
        Icon: BsCircleFill,
        name: 'Django',
        level: '30%',
    },


]


export const tools: Skill[] = [
    {
        Icon: BsCircleFill,
        name: 'Figma',
        level: '90%',
    },

    {
        Icon: BsCircleFill,
        name: 'Illustrator',
        level: '50%',
    },

    {
        Icon: BsCircleFill,
        name: 'Trello',
        level: '70%',
    },
]

export const projects: Project[] = [
    {
        id: 1,
        name: "Space Tourism",
        description: "This is a website challenge from Front-end Mentor",
        image_path: "/images/space-tourism.png",
        deployed_url: "https://karpaneto.github.io/space-tourism-website-main/index.html#",
        github_url: "https://github.com/KarpaNeto/space-tourism-website-main",
        category: ["html/css"],
        tag_techs: ["HTML", "CSS", "Vanilla JavaScript", "Figma"],
    },
    {
        id: 2,
        name: "Space Tourism",
        description: "This is a website challenge from Front-end Mentor",
        image_path: "/images/space-tourism.png",
        deployed_url: "https://karpaneto.github.io/space-tourism-website-main/index.html#",
        github_url: "https://github.com/KarpaNeto/space-tourism-website-main",
        category: ["node"],
        tag_techs: ["HTML", "CSS", "Vanilla JavaScript"],
    },
    {
        id: 3,
        name: "Space Tourism",
        description: "This is a website challenge from Front-end Mentor",
        image_path: "/images/space-tourism.png",
        deployed_url: "https://karpaneto.github.io/space-tourism-website-main/index.html#",
        github_url: "https://github.com/KarpaNeto/space-tourism-website-main",
        category: ["express"],
        tag_techs: ["HTML", "CSS", "Vanilla JavaScript", "Figma"],
    },
    {
        id: 4,
        name: "Space Tourism",
        description: "This is a website challenge from Front-end Mentor",
        image_path: "/images/space-tourism.png",
        deployed_url: "https://karpaneto.github.io/space-tourism-website-main/index.html#",
        github_url: "https://github.com/KarpaNeto/space-tourism-website-main",
        category: ["html/css", "mongodb"],
        tag_techs: ["HTML", "CSS"],
    },
    {
        id: 5,
        name: "Space Tourism",
        description: "This is a website challenge from Front-end Mentor",
        image_path: "/images/space-tourism.png",
        deployed_url: "https://karpaneto.github.io/space-tourism-website-main/index.html#",
        github_url: "https://github.com/KarpaNeto/space-tourism-website-main",
        category: ["react"],
        tag_techs: ["HTML", "CSS", "Vanilla JavaScript"],
    },
    {
        id: 6,
        name: "Space Tourism",
        description: "This is a website challenge from Front-end Mentor",
        image_path: "/images/space-tourism.png",
        deployed_url: "https://karpaneto.github.io/space-tourism-website-main/index.html#",
        github_url: "https://github.com/KarpaNeto/space-tourism-website-main",
        category: ["javascript", "mongodb"],
        tag_techs: ["React.js", "Tailwindcss", "Figma"],
    },
]