import {
    FaJava, FaReact, FaAws, FaDocker, FaDatabase, FaGitAlt, FaGithub, FaJs, FaPython, FaGit,
    FaTerminal, FaCloud, FaCogs
} from "react-icons/fa";
import {
    SiSpringboot, SiPostgresql, SiMysql, SiRedis, SiRedux, SiTailwindcss, SiAntdesign,
    SiGooglecloud, SiCloudinary, SiPostman, SiSwagger, SiC, SiHtml5, SiCss3
} from "react-icons/si";
import { MdSecurity, MdArchitecture, MdSpeed, MdBalance } from "react-icons/md";
import { BiNetworkChart, BiGitBranch } from "react-icons/bi";
import { AiOutlineApi, AiOutlineCloud } from "react-icons/ai";
import { TbDatabase, TbFileSpreadsheet, TbSettingsAutomation } from "react-icons/tb";
import { RiLockPasswordFill, RiCodeSSlashLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

export const skills = [
    // 🔹 Backend & Core Technologies
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Spring Security", icon: <MdSecurity /> },
    { name: "JWT Authentication", icon: <RiLockPasswordFill /> },
    { name: "OAuth2", icon: <RiLockPasswordFill /> },
    { name: "Microservices", icon: <FaCloud /> },
    { name: "Spring Cloud (Eureka, API Gateway, Feign)", icon: <BiNetworkChart /> },
    { name: "Load Balancing", icon: <MdBalance /> },  // ✅ Re-added
    { name: "RESTful APIs", icon: <AiOutlineApi /> },
    { name: "WebSockets", icon: <AiOutlineCloud /> },
    { name: "JPA/Hibernate", icon: <TbDatabase /> },

    // 🔹 Databases
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Redis", icon: <SiRedis /> },

    // 🔹 DevOps & Tools
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kafka", icon: <FaCloud /> },
    { name: "Git", icon: <FaGit /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Maven", icon: <FaCogs /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Swagger", icon: <SiSwagger /> },

    // 🔹 Frontend Technologies
    { name: "React.js", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Redux Toolkit", icon: <SiRedux /> },
    { name: "Axios", icon: <AiOutlineApi /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Material UI", icon: <FaCogs /> },
    { name: "Ant Design", icon: <SiAntdesign /> },

    // 🔹 Cloud Services
    { name: "AWS (S3, EC2, Lambda, RDS)", icon: <FaAws /> },
    { name: "Google Cloud", icon: <SiGooglecloud /> },
    { name: "Cloudinary API", icon: <SiCloudinary /> },

    // 🔹 Testing & Security
    { name: "JUnit", icon: <RiCodeSSlashLine /> },
    { name: "Mockito", icon: <RiCodeSSlashLine /> },
    { name: "RBAC", icon: <MdSecurity /> },
    { name: "Encryption", icon: <RiLockPasswordFill /> },
    { name: "Hashing", icon: <RiLockPasswordFill /> },

    // 🔹 Additional Technologies
    { name: "Apache POI", icon: <TbFileSpreadsheet /> },
    { name: "Lombok", icon: <FaCogs /> },
    { name: "Bash Scripting", icon: <FaTerminal /> },

    // 🔹 Programming Languages
    { name: "JavaScript", icon: <FaJs /> },
    { name: "C", icon: <SiC /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },

    // 🔹 System Design & Optimization
    { name: "System Design", icon: <MdArchitecture /> },
    { name: "Scalability", icon: <BiNetworkChart /> },
    { name: "Performance Optimization", icon: <MdSpeed /> },
    { name: "CI/CD Pipelines", icon: <TbSettingsAutomation /> },

    // 🔹 Development Tools
    { name: "IntelliJ IDEA", icon: <BiGitBranch /> },
    { name: "VS Code", icon: <VscVscode /> },
];