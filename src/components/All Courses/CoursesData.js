import bootstarp from "../../Assets/bootstarp.png";
import react from "../../Assets/react.png";
import nest from "../../Assets/nest.png";
import css from "../../Assets/csspng.png";
import cs50 from "../../Assets/cs50.png";
import htmlC from "../../Assets/htmlC.png";
import node from "../../Assets/node.jpg";
import js from "../../Assets/javascript.png";
import AI from "../../Assets/AI.png";
import CCNA from "../../Assets/CCNA.png";
import CCNPsecure from "../../Assets/CCNPsecure.png";
import AWS from "../../Assets/AWS.jpg";
import Security from "../../Assets/Security.jpg";
// import { CourseDesc } from "../Course Description/coursedesc";
// import Security from "./../RoadMaps/Security";

export const courseData = {
  courses: [
    {
      id: Math.random(),
      title: "The Complete HTML course for Beginners from zero to hero",
      category: ["Front End", "Full Stack", "ALL Courses"],
      hours: "3h",
      lessons: "28 Lesson",
      img: htmlC,
      type: "Front End",
      disc: "an HTML course provides a solid foundation for anyone looking to start building websites or pursuing a career in web development. It's often the first step in learning how to create dynamic and interactive web experiences.",
      instructor: {
        insName: "Abdelrahman Gamal",
        insTitle: "Front End Instructor and Web Development Expert",
        insAbout:
          "Throughout this course, Abdelrahman Gamal will leverage their expertise and passion for web development to provide you with comprehensive instruction, practical insights, and hands-on exercises. By the end of the course, you'll have the knowledge and confidence to create dynamic, responsive, and visually appealing web pages using HTML.",
      },
    },
    
    {
      id: Math.random(),
      title: "The Complete Node Js course for Beginners from zero to hero",
      category: ["Back End", "Full Stack", "ALL Courses"],
      hours: "33h",
      lessons: "227 Lesson",
      img: node,
      type: "Back End",
      disc: "Node.js has revolutionized web development by allowing JavaScript to run on the server side, enabling developers to build fast, scalable, and real-time applications. In this course, we'll take you from the basics of Node.js to advanced topics, equipping you with the knowledge and tools to build high-performance web applications with ease.",
      instructor: {
        insName: "Ahmed Boghdady",
        insTitle: "Back End Instructor and Web Development Expert",
        insAbout:
          "Throughout this course, Ahmed Boghdady will guide you through a comprehensive curriculum, combining theoretical concepts with hands-on exercises and real-world examples. By the end of the course, you'll have the expertise to create robust and efficient server-side applications using Node.js.",
      },
    },
    {
      id: Math.random(),
      title: "The Complete JavaScript course from zero to hero",
      category: [
        "Front End",
        "JavaScript",
        "Back End",
        "Full Stack",
        "ALL Courses",
      ],
      hours: "15h",
      lessons: "80 Lesson",
      img: js,
      type: "JavaScript",
      disc: "JavaScript is the backbone of modern web development, empowering developers to create dynamic and interactive web applications. If you're ready to take your programming skills to the next level, Mastering JavaScript: From Fundamentals to Advanced Concepts is the perfect course for you.",
      instructor: {
        insName: "Abdelrahman Gamal",
        insTitle: "Full Stack Instructor and Web Development Expert",
        insAbout:
          "Throughout this course, Abdelrahman Gamal will guide you through a comprehensive curriculum,Led by an experienced instructor proficient in JavaScript development, guiding students through the fundamentals and advanced concepts of the language.Covers a wide range of topics including variables, data types, operators, control flow, functions, arrays, objects, DOM manipulation, asynchronous JavaScript, error handling, ES6 features, and more. empowering students to pursue careers as front-end developers, full-stack developers, or JavaScript engineers.",
      },
    },
    {
      id: Math.random(),
      title: "The Complete Bootstrap course for Beginners",
      category: ["Front End", "ALL Courses"],
      hours: "3h",
      lessons: "26 Lessons",
      img: bootstarp,
      type: "Front End",
      disc: "In today's digital landscape, creating responsive and visually appealing websites is essential for success. Enter Bootstrap - the world's most popular front-end framework for building responsive, mobile-first web projects with ease. If you're ready to elevate your web design skills and create stunning websites that look great on any device, Mastering Bootstrap: Building Responsive and Stunning Websites is the course for you.",
      instructor: {
        insName: "Osama Elzero",
        insTitle: "Front End Instructor and Web Development Expert",
        insAbout:
          "Throughout this course, Osama Elzero will guide you through a comprehensive curriculum,  Led by an experienced instructor proficient in Bootstrap development, guiding students through the fundamentals and advanced concepts of building responsive and visually appealing web interfaces.Emphasizes practical learning with hands-on exercises, coding challenges, and projects, allowing students to apply theoretical concepts in real-world scenarios.",
      },
    },
    {
      id: Math.random(),
      title: "The Complete React Js course for Beginners from zero to hero",
      category: ["Front End", "Full Stack", "ALL Courses"],
      hours: "10h 20m",
      lessons: "110 Lesson",
      img: react,
      type: "React Js",
      disc: "your comprehensive guide to mastering one of the most popular JavaScript libraries for building user interfaces. React has revolutionized front-end development by providing a component-based architecture that makes it easy to create reusable and scalable UI components.",
      instructor: {
        insName: "Osama Elzero",
        insTitle: "Front End Instructor and Web Development Expert",
        insAbout:
          "Throughout this course, Osama Elzero will guide you through a comprehensive curriculum, Led by an experienced instructor proficient in React development, guiding students through the fundamentals and advanced concepts of building web applications with React.Focuses on developing practical skills and knowledge that are directly applicable in real-world web development projects using React.js, preparing students for success in React development roles.",
      },
    },
    {
      id: Math.random(),
      title: "The Complete Nest Js course for Beginners from zero to hero",
      category: ["Back End", "Full Stack", "ALL Courses"],
      hours: "22h",
      lessons: "142 Lesson",
      img: nest,
      type: "Next Js Course",
      disc: "Next.js empowers developers to build fast, scalable, and SEO-friendly web applications with ease, combining the simplicity of React with the power of server-side rendering.  Next.js uses a file-based routing system that simplifies navigation in your application. ",
      instructor: {
        insName: "Ahmed Boghdady",
        insTitle: "Front End Instructor and Web Development Expert",
        insAbout:
          "Throughout this course, Ahmed Boghdady will guide you through a comprehensive curriculum, Led by an experienced instructor proficient in Next.js development, guiding students through the fundamentals and advanced concepts of building modern web applications with Next.js.Covers a wide range of topics including server-side rendering (SSR), static site generation (SSG), data fetching, routing, API routes, deployment, and performance optimization.",
      },
    },
    {
      id: Math.random(),
      title: "The Complete CSS course for Beginners from zero to hero",
      category: ["Front End", "Full Stack", "ALL Courses"],
      hours: "8h",
      lessons: "52 Lesson",
      img: css,
      type: "Front End",
      disc: "In this comprehensive course, we'll take you from the basics of CSS to advanced techniques, equipping you with the knowledge and skills to create beautiful, responsive, and accessible web designs. Whether you're a beginner or an experienced developer, this course will empower you to leverage the full potential of CSS and elevate your web development skills to new heights.",
      instructor: {
        insName: "Abdelrahman Gamal",
        insTitle: "Front End Instructor and Web Development Expert",
        insAbout:
          "Throughout this course, Abdelrahman Gamal will share their wealth of knowledge and practical insights, empowering you to create visually stunning, responsive, and user-friendly websites. From mastering the fundamentals to exploring advanced techniques, you'll gain the confidence and skills needed to tackle any design challenge with ease.",
      },
    },
    {
      id: Math.random(),
      title: "The Complete CS50 course form Scratch for Beginners",
      category: ["CS50", "ALL Courses"],
      hours: "10h",
      lessons: "82 Lesson",
      img: cs50,
      type: "CS50",
      disc: "Developed by Harvard University, CS50 is renowned for its rigorous curriculum, engaging lectures, and hands-on projects that challenge students to think critically and creatively. Through a blend of lectures, problem sets, and programming assignments, you'll explore fundamental concepts in computer science and gain practical skills that are applicable across various domains and industries.",
      instructor: {
        insName: "Abdelrahman Gamal",
        insTitle: "Programming Instructor and Web Development Expert",
        insAbout:
          "Throughout this course, Abdelrahman Gamal will guide you through a comprehensive curriculum, The instructor possesses expertise in computer science concepts, programming languages, algorithms, data structures, and other fundamental topics covered in the CS50 curriculum.Demonstrates a passion for teaching and a commitment to helping students succeed in learning computer science concepts, regardless of their prior experience or background.",
      },
    },
    {
      id: Math.random(),
      title: "CCNP Security (SCOR 350-701) ",
      category: ["CCNP", "Network", "Security", "ALL Courses"],
      hours: "10h",
      lessons: "54 Lesson",
      img: CCNPsecure,
      type: "CCNP Security",
      disc: "Welcome to the CCNP Security (SCOR 350-701) Course: Securing Networks with Cisco Technologies, your gateway to becoming a certified Cisco security professional and mastering the latest technologies and techniques for securing modern networks. Developed by Cisco, the CCNP Security certification validates your expertise in designing, implementing, and managing security solutions using Cisco technologies.",
      instructor: {
        insName: "Abeer Hosni",
        insTitle: "CCNP Instructor and Network and IT infrastructure Expert",
        insAbout:
          "Throughout this course, Abeer Hosni will guide you through a comprehensive curriculum,  Led by a Cisco Certified Instructor (CCI) or a seasoned networking professional with expertise in Cisco technologies, guiding students through the CCNP certification journey.Covers a wide range of topics including advanced routing protocols (OSPF, EIGRP, BGP), switching technologies (VLANs, STP, EtherChannel), network security, QoS (Quality of Service), MPLS (Multiprotocol Label Switching), and more.",
      },
    },
    {
      id: Math.random(),
      title: "The Complete CCNA 200-301 course",
      category: ["Network", "Security", "ALL Courses"],
      hours: "37h",
      lessons: "52 Lesson",
      img: CCNA,
      type: "CCNA Security",
      disc: "Welcome to the CCNA 200-301 Certification Course, your comprehensive guide to mastering the fundamentals of networking and preparing for the Cisco Certified Network Associate (CCNA) exam. Whether you're a beginner in the field of networking or an experienced professional looking to enhance your skills, this course is designed to provide you with the knowledge and practical experience needed to succeed in the dynamic world of IT networking.",
      instructor: {
        insName: "Mahmoud Miaari",
        insTitle: "CCNA Instructor and Network and IT infrastructure Expert",
        insAbout:
          "Throughout this course, Mahmoud Miaari will guide you through a comprehensive curriculum,Led by a Cisco Certified Instructor (CCI) or a seasoned networking professional with expertise in Cisco technologies, guiding students through the CCNA certification journey.Covers a wide range of topics including networking basics, TCP/IP, subnetting, VLANs, routing protocols (e.g., OSPF, EIGRP), WAN technologies, network security, and network automation.",
      },
    },
    
    {
      id: Math.random(),
      title:
        "AWS Cloud Practitioner Essentials",
      category: ["AWS", "cloud", "ALL Courses"],
      hours: "7h",
      lessons: "58 Lesson",
      img: AWS,
      type: "AWS Cloud",
      disc: "This course is designed to provide you with a solid foundation in AWS cloud computing concepts, services, and best practices, empowering you to leverage the full potential of AWS to drive innovation and growth in your organization. Whether you're a beginner or an experienced IT professional, this course will equip you with the knowledge and skills to navigate the AWS cloud with confidence and efficiency.",
      instructor: {
        insName: "Saleh Saad",
        insTitle: "AWS Cloud Instructor and AWS services Expert",
        insAbout:
          "Throughout this course, Saleh Saad will guide you through a comprehensive curriculum, Led by an AWS Certified Instructor who has demonstrated expertise in AWS technologies and best practices, guiding students through the AWS cloud learning journey.Covers cloud architecture principles, best practices, and design patterns for building scalable, resilient, and cost-effective solutions on AWS.",
      },
    },
    {
      id: Math.random(),
      title:
        "Computing & Security Essentials",
      category: ["Computing & Security Essentials", "security", "ALL Courses"],
      hours: "9h",
      lessons: "15 Lesson",
      img: Security,
      type: "Computing & Security",
      disc: "This course is designed to provide you with a solid foundation in both computing concepts and security principles, empowering you to navigate the complexities of the digital world with confidence. Whether you're a beginner or an experienced professional, this course will equip you with the knowledge and skills to protect yourself and your organization from cyber threats and ensure the confidentiality, integrity, and availability of information.",
      instructor: {
        insName: "Mostafa Abd ElSalam",
        insTitle: "Security Instructor and Network IT infrastructure Expert",
        insAbout:
          "Throughout this course, Mostafa Abd ElSalam will guide you through a comprehensive curriculum, The instructor possesses expertise in information security concepts, principles, and practices, including foundational knowledge in computing and cybersecurity essentials.Explores various security controls and mechanisms used to protect information systems and data, including access controls, network security measures, encryption techniques, intrusion detection and prevention systems (IDPS), and incident response procedures.Discusses risk management principles and methodologies, including risk assessment, risk analysis, risk treatment strategies, and the role of risk management in cybersecurity decision-making.",
      },
    },
    
  ],
  categories: [
    "Front End",
    "Back End",
    "JavaScript",
    "Full Stack",
    "CS50",
    "Security",
    "Network",
    "ALL Courses",
  ],
};
export default courseData;
