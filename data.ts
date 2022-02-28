import { Service, Skill, Project } from './type'
import { FaServer, FaFigma, FaLaptopCode } from 'react-icons/fa'
import { AiOutlineApi } from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'




export const services: Service[] = [

    {
        Icon: FaLaptopCode,
        title: "Front-end Development",
        about: "I build beautiful Static Website, SPA & Design System using <b>React.js/Next.js</b> and <b>Svelte/SvelteKit</b>",
    },

    {
        Icon: FaServer,
        title: "Backend Development",
        about: "Handle database, server , API using <b>Express</b> & <b>Firebase</b>, <b>Supabase</b>",
    },
]

export const languages: Skill[] = [

    {
        Icon: BsCircleFill,
        name: 'HTML',
        level: '100%',
    },

    {
        Icon: BsCircleFill,
        name: 'CSS/SASS',
        level: '100%',
    },

    {
        Icon: BsCircleFill,
        name: 'Tailwind',
        level: '100%',
    },
    {
        Icon: BsCircleFill,
        name: 'Bootstrap',
        level: '100%',
    },

    {
        Icon: BsCircleFill,
        name: 'Svelte',
        level: '100%',
    },
    {
        Icon: BsCircleFill,
        name: 'React.js',
        level: '100%',
    },

    {
        Icon: BsCircleFill,
        name: 'Next.js',
        level: '100%',
    },

]


export const tools: Skill[] = [
    {
        Icon: BsCircleFill,
        name: 'Figma',
        level: '100%',
    },

    {
        Icon: BsCircleFill,
        name: 'Trello',
        level: '100%',
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
        category: ["HTML/CSS", "javaScript"],
        tag_techs: ["HTML", "CSS", "Vanilla JavaScript", "Figma"],
    },
    {
        id: 2,
        name: "Budget Calculator",
        description: "Expenses Calculator in Svelte",
        image_path: "/images/invoicer-netlify.png",
        deployed_url: "https://invoicer.netlify.app/",
        github_url: "https://github.com/KarpaNeto/budget-calculator",
        category: ["svelte"],
        tag_techs: ["Svelte", "CSS"],
    },
    {
        id: 3,
        name: "Proconta Expert",
        description: "This is a website for a client in Romenia, he hired me to make a new version of his business website",
        image_path: "/images/procontaexpertsrl.png",
        deployed_url: "https://procontaexpertsrl.netlify.app/",
        github_url: "https://github.com/KarpaNeto/procontaexpertsrl",
        category: ["svelte"],
        tag_techs: ["SvelteKit", "Tailwind"],
    },
    {
        id: 4,
        name: "FKSIS - Sistemas de Gestão",
        description: "Website made for management systems sales company ",
        image_path: "/images/fksis.png",
        deployed_url: "https://fksis.com.br",
        github_url: "https://github.com/KarpaNeto/Site-FKSIS",
        category: ["HTML/CSS", "javaScript"],
        tag_techs: ["HTML", "CSS"],
    },
    {
        id: 5,
        name: "Residencial Pouso das Águas",
        description: "website made for a client in the region. A modern website to expose the beauties of your hotel",
        image_path: "/images/pousodasaguas.png",
        deployed_url: "https://residencial-pouso-das-aguas.netlify.app/",
        github_url: "https://github.com/KarpaNeto/residencial-pouso-das-aguas",
        category: ["HTML/CSS", "javaScript"],
        tag_techs: ["HTML", "CSS", "Vanilla JavaScript"],
    },
    {
        id: 6,
        name: "Wermond's Cleaning",
        description: "This is a website challenge from Front-end Mentor",
        image_path: "/images/wermonds_.png",
        deployed_url: "https://wermonds.netlify.app/",
        github_url: "https://github.com/KarpaNeto/Wermonds-Cleaning",
        category: ["HTML/CSS", "javaScript"],
        tag_techs: ["HTML", "CSS", "Vanilla JavaScript"],
    },
    {
        id: 7,
        name: "My Portfolio",
        description: "This is my portfolio using Next.js and Tailwind",
        image_path: "/images/portfolio.png",
        deployed_url: "https://karpa-neto.vercel.app",
        github_url: "https://github.com/KarpaNeto/Portfolio-Next-js",
        category: ["next.js",],
        tag_techs: ["Next.js", "Tailwind", "Typescript"],
    },
]