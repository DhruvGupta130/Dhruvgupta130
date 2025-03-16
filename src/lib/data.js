import taskManager from "../../src/assets/task.jpg";
import health from "../../src/assets/health.png";
import food from "../../src/assets/food.jpg";
import hotel from "../../src/assets/hotel.png";
import user from "../../src/assets/user-access.jpg";
import video from "../../src/assets/video.webp";

export const projects = [
    {
        id: 1,
        title: "Task Manager - Microservices-Based Task Management System",
        description: "A scalable task management platform following a microservices architecture. Built with independent User and Task services communicating via REST APIs, secured with Spring Security & JWT authentication. Features Spring Boot Admin for real-time monitoring and centralized logging. The API Gateway efficiently routes requests, while PostgreSQL ensures data integrity. The frontend, developed using React.js and Tailwind CSS, provides a seamless UX, with Redux handling global state management. Dockerized deployment ensures portability and scalability.",
        image: taskManager,
        github: "https://github.com/DhruvGupta130/TaskManagementSystem",
        demo: "https://gupta-task.netlify.app/", // Add when deployed
        category: [
            "Microservices", "Spring Boot", "React.js", "PostgreSQL",
            "Docker", "Redux", "Tailwind CSS", "REST API",
            "Spring Cloud", "API Gateway", "Spring Security", "JWT Authentication",
            "Spring Boot Admin"
        ]
    },
    {
        id: 2,
        title: "Ayumed - Hospital and OPD Management System",
        description: "An end-to-end hospital management system improving healthcare workflows by 60%. Implements Role-Based Access Control (RBAC) with granular permissions, OTP-based authentication, and encrypted medical record storage. Features automated appointment scheduling, real-time inventory tracking, and Google Maps API for location-based hospital searches. Uses MySQL for optimized database performance, Apache POI for Excel import/export, and a React.js frontend styled with Material UI & Ant Design for a sleek UI. Deployed with Docker for seamless scaling.",
        image: health,
        github: "https://github.com/DhruvGupta130/HospitalManagementSystem",
        demo: "https://ayumed.netlify.app/",
        category: [
            "Full-Stack", "Spring Boot", "React.js", "MySQL",
            "Google Maps API", "Apache POI", "RBAC", "JWT Authentication",
            "Material UI", "Ant Design", "REST API", "Docker",
            "Spring Security", "SMTP", "Email Notifications"
        ]
    },
    {
        id: 3,
        title: "The Gupta's - Advanced Food Ordering and Tracking System",
        description: "A feature-rich food ordering platform providing real-time order tracking and seamless restaurant management. Implements Redux for state management, JWT-based authentication for secure user sessions, and Cloudinary API for optimized image handling. Offers a dynamic admin panel for restaurant owners, a favorites system for personalized recommendations, and responsive UI built with Material UI. The backend, developed using Spring Boot and MySQL, efficiently handles high-volume transactions with optimized API performance.",
        image: food,
        github: "https://github.com/DhruvGupta130/FoodOrderingSystem",
        demo: "https://theguptas.netlify.app/",
        category: [
            "Full-Stack", "Spring Boot", "React.js", "MySQL",
            "Redux", "Cloudinary API", "RBAC", "JWT Authentication",
            "Material UI", "REST API", "Spring Security", "Docker"
        ]
    },
    {
        id: 4,
        title: "My Hotel - Hotel Management System",
        description: "A comprehensive hotel management system streamlining room reservations, check-ins, and check-outs. Features an admin panel for room and booking management, automated email notifications for confirmations, and secure JWT authentication with RBAC for access control. Built with Spring Boot and MySQL, ensuring efficient data handling. The frontend, developed in React.js and styled with Tailwind CSS, provides a smooth, mobile-friendly booking experience. Deployed using Docker for flexible and scalable hosting.",
        image: hotel,
        github: "https://github.com/DhruvGupta130/HotelManagementSystem",
        demo: "https://guptahotel.netlify.app/",
        category: [
            "Full-Stack", "Spring Boot", "React.js", "MySQL",
            "REST API", "Spring Security", "RBAC", "JWT Authentication",
            "Docker", "Tailwind CSS", "Email Notifications", "SMTP"
        ]
    },
    {
        id: 5,
        title: "VideoStream - High-Quality Video Streaming Platform 🎥",
        description: "A lightweight video streaming platform developed using Spring MVC and Thymeleaf. Supports chunked video streaming for efficient playback and bandwidth optimization, with FFmpeg handling media encoding and compression. The backend, powered by MySQL, efficiently stores video metadata and user data. RESTful APIs enable seamless video uploads and playback. Designed for smooth performance with minimal latency, making it ideal for scalable video delivery solutions.",
        image: video,
        github: "https://github.com/DhruvGupta130/VideoStream",
        demo: "http://localhost:8080", // Add deployed link if available
        category: [
            "Full-Stack", "Spring Boot", "Spring MVC", "Thymeleaf",
            "MySQL", "REST API", "FFmpeg"
        ]
    },
    {
        id: 6,
        title: "User Access Management System 🚀",
        description: "A secure web-based access management system that enables users to request software tool access with manager approvals. Implements a strict Role-Based Access Control (RBAC) policy to ensure controlled access. Built using Java Servlets and JSP for backend processing, with PostgreSQL as the database. Runs on Tomcat and provides REST APIs for handling access requests, approvals, and tracking system usage. Designed for enterprise-level security and scalability.",
        image: user, // Replace with a custom image if available
        github: "https://github.com/DhruvGupta130/user-access-management-system",
        demo: "http://localhost:8080/your-app-context", // Add deployed link if available
        category: [
            "Full-Stack", "Java Servlets", "JSP", "PostgreSQL",
            "Tomcat", "RBAC", "REST API"
        ]
    }
];


export const experiences = [

       {
        id: 2,
        role: "Smart India Hackathon Finalist",
        company: "SIH 2024",
        duration: "2024",
        description: "Selected for the national-level Smart India Hackathon, collaborating with a team to develop innovative tech-driven solutions addressing real-world challenges.",
        responsibilities: [
            "Designed and developed scalable backend systems",
            "Implemented efficient APIs and third-party integrations",
            "Optimized system performance and ensured high scalability",
            "Worked in an agile environment with cross-functional teams"
        ]
    }
];

export const education = [
    {
        id: 1,
        degree: "Bachelor of Technology in Electronics and Communication Engineering",
        institution: "IIIT Ranchi",
        duration: "2021 - 2025",
        description: "Gained a strong foundation in software engineering, problem-solving, and real-world project development. Specialized in full-stack web development and microservices architecture."
    }
];

export const socialLinks = {
    github: "https://github.com/DhruvGupta130",
    linkedin: "https://linkedin.com/in/dhruvgupta130", // Replace with your actual LinkedIn username
    twitter: "https://x.com/dhruvgupta130", // Optional, if available
    email: "dhruvgupta130@gmail.com" // Replace with your real email
};