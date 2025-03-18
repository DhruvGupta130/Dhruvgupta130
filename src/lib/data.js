import taskManager from "../../src/assets/task.jpg";
import health from "../../src/assets/health.png";
import food from "../../src/assets/food.jpg";
import hotel from "../../src/assets/hotel.png";
import user from "../../src/assets/user-access.jpg";
import video from "../../src/assets/video.webp";
import chatApp from "../../src/assets/chat.jpg";

export const projects = [
    {
        id: 1,
        title: "Task Manager – Microservices ✅",
        description: [
            "🖥️ Architected a microservices-based system with dedicated services for users, tasks, notifications, and comments.",
            "🔒 Implemented robust authentication using Spring Security and JWT tokens.",
            "📊 Integrated Spring Boot Admin for real-time application monitoring and centralized logging.",
            "🚀 Designed an API Gateway for efficient request routing and scalability.",
            "📦 Dockerized deployment for enhanced portability and scalable hosting.",
            "📂 Integrated a file attachment feature for tasks to enhance productivity.",
            "🎨 Developed a sleek and responsive UI using React.js and Tailwind CSS."
        ],
        image: taskManager,
        github: "https://github.com/DhruvGupta130/TaskManagementSystem",
        demo: "https://gupta-task.netlify.app/",
        category: [
            "Microservices", "Spring Boot Admin", "React.js", "PostgreSQL", "RBAC","Tailwind CSS", "Resilience4j",
            "Docker", "Spring Cloud", "API Gateway", "Spring Security", "Redux", "JWT Authentication"
        ]
    },
    {
        id: 2,
        title: "AyuMed – Hospital System 🏥",
        description: [
            "💡 Digitized hospital workflows, increasing operational efficiency by 60%.",
            "🔐 Integrated Role-Based Access Control (RBAC) with fine-grained permission management.",
            "📲 Enabled OTP-based authentication and secure medical record encryption.",
            "📍 Integrated Google Maps API for seamless location-based hospital searches.",
            "📊 Developed real-time inventory tracking and automated appointment scheduling.",
            "📂 Implemented Excel import/export functionality using Apache POI.",
            "📨 Added email and SMS notifications for appointment reminders and updates."
        ],
        image: health,
        github: "https://github.com/DhruvGupta130/HospitalManagementSystem",
        demo: "https://ayumed.netlify.app/",
        category: [
            "React.js", "MySQL", "SMTP (Brevo)", "Material UI", "Ant Design", "Docker",
            "Google Maps API", "Apache POI", "RBAC", "Spring Security", "Storage-Server", "JWT Authentication"
        ]
    },
    {
        id: 3,
        title: "ChatApp – Real-Time Chat 💬",
        description: [
            "⚡ Built a real-time chat app using Spring Boot, WebSockets, and React.js.",
            "🔄 Integrated WebSocket STOMP for seamless bi-directional communication.",
            "🛠️ Supports dynamic chat rooms, persistent messaging, and auto-scrolling notifications.",
            "👥 Features user authentication, real-time presence tracking, and active status updates.",
            "📦 Optimized WebSocket performance for scalable real-time interactions.",
            "🔔 Added typing indicators and read receipts for better user engagement.",
            "🎨 Designed with Tailwind CSS for a modern and responsive UI."
        ],
        image: chatApp,
        github: "https://github.com/DhruvGupta130/ChatApp",
        demo: "https://your-chatapp-deployment-link.com",
        category: [
            "React.js", "WebSockets", "React-Toastify", "Docker",
            "STOMP", "PostgreSQL", "Real-Time Messaging", "Tailwind CSS"
        ]
    },
    {
        id: 4,
        title: "The Gupta’s – Food Ordering 🍔",
        description: [
            "📦 Designed a feature-rich platform for seamless food ordering and restaurant management.",
            "🚀 Integrated real-time order tracking with optimized API performance.",
            "🔒 Secured user sessions with JWT-based authentication and role-based access control.",
            "📷 Optimized image handling using Cloudinary API for faster load times.",
            "📌 Developed an intuitive admin panel for restaurant owners to manage operations.",
            "📱 Built a mobile-responsive UI using Material UI for an enhanced user experience.",
            "💳 Integrated payment gateway for seamless online transactions."
        ],
        image: food,
        github: "https://github.com/DhruvGupta130/FoodOrderingSystem",
        demo: "https://theguptas.netlify.app/",
        category: [
            "React.js", "MySQL", "Redux", "RBAC",
            "Cloudinary API", "JWT Authentication", "Material UI", "Spring Security"
        ]
    },
    {
        id: 5,
        title: "My Hotel – Hotel Management 🏨",
        description: [
            "🏠 Developed a comprehensive system for managing room reservations, check-ins, and check-outs.",
            "📩 Integrated automated email notifications for booking confirmations.",
            "🔑 Secured user authentication with JWT and Role-Based Access Control (RBAC).",
            "📊 Built an admin dashboard for efficient room and booking management.",
            "📦 Dockerized for smooth deployment and scalability.",
            "📱 Designed a mobile-friendly frontend using React.js and Tailwind CSS.",
            "📆 Implemented calendar-based booking UI for an intuitive reservation experience."
        ],
        image: hotel,
        github: "https://github.com/DhruvGupta130/HotelManagementSystem",
        demo: "https://guptahotel.netlify.app/",
        category: [
            "React.js", "MySQL", "JWT Authentication", "RBAC",
            "Storage-Server", "Tailwind CSS", "SMTP (Brevo)", "Spring Security"
        ]
    },
    {
        id: 6,
        title: "VideoStream – Video Streaming 🎥",
        description: [
            "📽️ Implemented chunked video streaming for efficient and uninterrupted playback.",
            "⚡ Utilized FFmpeg for media encoding, compression, and format conversion.",
            "🗄️ Designed a MySQL database to store video metadata and user information.",
            "🔗 Developed RESTful APIs for seamless video uploads and playback.",
            "🚀 Optimized the system for minimal latency and smooth streaming performance.",
            "🎨 Built a responsive UI using HTML, CSS, and Thymeleaf templates.",
            "📤 Enabled multi-format video support for enhanced compatibility across devices."
        ],
        image: video,
        github: "https://github.com/DhruvGupta130/VideoStream",
        demo: "http://localhost:8080",
        category: [
            "Spring MVC", "Thymeleaf",
            "MySQL", "FFmpeg", "Media Streaming"
        ]
    },
    {
        id: 7,
        title: "User Access Manager – RBAC System 🔐",
        description: [
            "🛡️ Developed a secure web-based access management system.",
            "🔑 Implemented Role-Based Access Control (RBAC) for user authorization.",
            "📩 Enabled users to request software tool access with manager approvals.",
            "🖥️ Built the backend using Java Servlets and JSP for efficient processing.",
            "📊 Designed a PostgreSQL database for access request tracking and analytics.",
            "🚀 Deployed on Tomcat with REST APIs for approval workflows and access control.",
            "⚡ Implemented an audit logging system for tracking user activity."
        ],
        image: user,
        github: "https://github.com/DhruvGupta130/user-access-management-system",
        demo: "http://localhost:8080/your-app-context",
        category: [
            "Java Servlets", "JSP", "PostgreSQL",
            "Tomcat", "RBAC"
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
        degree: "Bachelor of Technology (B.Tech) in Electronics and Communication Engineering",
        institution: "Indian Institute of Information Technology, Ranchi (IIIT Ranchi)",
        duration: "2022 - 2026",
        description: "Developed a strong foundation in software engineering, data structures, and algorithms. Specialized in full-stack web development, microservices architecture, and scalable system design through hands-on projects and industry-relevant coursework."
    }
];

export const socialLinks = {
    github: "https://github.com/DhruvGupta130",
    linkedin: "https://linkedin.com/in/dhruvgupta130", // Replace with your actual LinkedIn username
    twitter: "https://x.com/dhruvgupta130", // Optional, if available
    email: "dhruvgupta130@gmail.com" // Replace with your real email
};