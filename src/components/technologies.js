import { 
    FaHtml5, FaCss3Alt, FaPhp, FaPython, FaReact, FaNodeJs, FaGitAlt, FaBootstrap, 
    FaJava, FaAws, FaWindows, FaLinux, FaGithub 
} from 'react-icons/fa';

import { 
    SiMysql, SiMongodb, SiLaravel, SiJavascript, SiUnity, SiBitbucket, 
    SiJira, SiTypescript, SiAngular, SiExpress, SiGodot, SiMeilisearch, SiSwagger
} from 'react-icons/si'; // Import icons for new technologies

import { TbBrandCSharp } from "react-icons/tb";
import { DiNginx } from "react-icons/di";

const technologies = [
    { name: "HTML5", icon: <FaHtml5 className="tech-icon text-danger" /> },
    { name: "CSS3", icon: <FaCss3Alt className="tech-icon text-primary" /> },
    { name: "JavaScript", icon: <SiJavascript className="tech-icon text-warning" /> },
    { name: "PHP", icon: <FaPhp className="tech-icon text-blue" /> },
    { name: "Python", icon: <FaPython className="tech-icon text-success" /> },
    { name: "React", icon: <FaReact className="tech-icon text-info" /> },
    { name: "Laravel", icon: <SiLaravel className="tech-icon text-danger" /> },
    { name: "Node.js", icon: <FaNodeJs className="tech-icon text-success" /> },
    { name: "MongoDB", icon: <SiMongodb className="tech-icon text-success" /> },
    { name: "MySQL", icon: <SiMysql className="tech-icon text-primary" /> },
    { name: "Git", icon: <FaGitAlt className="tech-icon text-dark" /> },
    { name: "GitHub", icon: <FaGithub className="tech-icon text-dark" /> },
    { name: "Bitbucket", icon: <SiBitbucket className="tech-icon text-blue" /> },
    { name: "Jira", icon: <SiJira className="tech-icon text-blue" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="tech-icon text-purple" /> },
    { name: "Java", icon: <FaJava className="tech-icon text-orange" /> },
    { name: "C#", icon: <TbBrandCSharp className="tech-icon text-blue" /> },
    { name: "Unity", icon: <SiUnity className="tech-icon text-black" /> },
    { name: "Linux", icon: <FaLinux className="tech-icon text-dark" /> },
    { name: "Windows", icon: <FaWindows className="tech-icon text-primary" /> },
    { name: "AWS", icon: <FaAws className="tech-icon text-warning" /> },
    { name: "NSIS", icon: <DiNginx className="tech-icon text-green" /> },
    { name: "TypeScript", icon: <SiTypescript className="tech-icon text-primary" /> },
    { name: "Angular", icon: <SiAngular className="tech-icon text-danger" /> },
    { name: "Express", icon: <SiExpress className="tech-icon text-warning" /> },
    { name: "Meilisearch", icon: <SiMeilisearch className="tech-icon text-info" /> },
    { name: "Swagger", icon: <SiSwagger className="tech-icon text-dark" /> }
];

export default technologies;
