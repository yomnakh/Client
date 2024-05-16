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
import Abdelrahman from "../../Assets/abdelrahman.png";
import elzero from "../../Assets/Elzero.webp";
import ahmed from "../../Assets/Ahmed_Boghdady.jpg";
import Mahmoud from "../../Assets/Mahmoud_Bakr.jpg";
import moAbdElsalam from "../../Assets/moAbdElsalam.jpg";
import mahmoudMiaari from "../../Assets/mahmoudMiaari.jpg";
import salehSaad from "../../Assets/salehSaad.jpg";
import AbeerHosni from "../../Assets/AbeerHosni.jpg";




export const courseData = {
  courses: [
    {
      id: 120,
      title: "The Complete HTML course for Beginners from zero to hero",
      courseHeader: "Learn modern HTML5 by building a stunning website for your portfolio!",
      category: ["Front End", "Full Stack", "ALL Courses"],
      hours: "3h",
      lessons: "28 Lesson",
      img: htmlC,
      type: "Front End",
      disc: "an HTML course provides a solid foundation for anyone looking to start building websites or pursuing a career in web development. It's often the first step in learning how to create dynamic and interactive web experiences.",
      willLearn: "Throughout this course, Abdelrahman Gamal will leverage their expertise and passion for web development to provide you with comprehensive instruction, practical insights, and hands-on exercises. By the end of the course, you'll have the knowledge and confidence to create dynamic, responsive, and visually appealing web pages using HTML.",
      require:{r1:"Basic computer literacy, familiarity with web browsing.",r2: "Anyone with an interest in web development can enroll."} ,
      instructor: {
        name: "Abdelrahman Gamal",
        title: "Front End Instructor and Web Development Expert",
        about:"I'm a fornt-end web developer and designer with a passion for building beautiful web interfaces from scratch. " ,
      
          img: Abdelrahman
          },
    },

    {
      id: 121,
      title: "The Complete Node Js course for Beginners from zero to hero",
      courseHeader: "Learn Node.js by building real-world applications with Node JS, Express, MongoDB, and more!",
      category: ["Back End", "Full Stack", "ALL Courses"],
      hours: "33h",
      lessons: "227 Lesson",
      img: node,
      type: "Back End",
      disc: "Node.js has revolutionized web development by allowing JavaScript to run on the server side, enabling developers to build fast, scalable, and real-time applications. In this course, we'll take you from the basics of Node.js to advanced topics, equipping you with the knowledge and tools to build high-performance web applications with ease.",
      willLearn:"Throughout this course, Ahmed Boghdady will guide you through a comprehensive curriculum, combining theoretical concepts with hands-on exercises and real-world examples. By the end of the course, you'll have the expertise to create robust and efficient server-side applications using Node.js.",
      require:{r1:"Familiarity with JavaScript programming language basics is essential.", r2: "May also recommend knowledge of web development concepts like HTML, CSS, and basic understanding of backend development."} ,
      instructor: {
        name: "Ahmed Boghdady",
        title: "Back End Instructor and Web Development Expert",
        about:"I'm a Back-end web developer and experienced full-stack software engineer with over seven years of extensive experience.",
        img: ahmed

      },
    },
    {
      id: 122,
      title: "The Complete JavaScript course from zero to hero",
      courseHeader: "Learn Javascript Today From Beginner to Advanced by Completing a Challenging Real-Life Project & Coding Exercises",

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
      willLearn:"Throughout this course, Abdelrahman Gamal will guide you through a comprehensive curriculum,Led by an experienced instructor proficient in JavaScript development, guiding students through the fundamentals and advanced concepts of the language.Covers a wide range of topics including variables, data types, operators, control flow, functions, arrays, objects, DOM manipulation, asynchronous JavaScript, error handling, ES6 features, and more. empowering students to pursue careers as front-end developers, full-stack developers, or JavaScript engineers.",
      require:{r1:"Basic understanding of HTML and CSS fundamentals.",r2: "Familiarity with programming concepts such as variables, data types, conditionals, loops, and functions can also be helpful."} ,

      instructor: {
        name: "Abdelrahman Gamal",
        title: "Full Stack Instructor and Web Development Expert",
        about:"I'm a full-stack web developer and designer with a passion for building beautiful web interfaces from scratch.",
        img: Abdelrahman
      },
    },
    {
      id: 123,
      title: "The Complete Bootstrap course for Beginners",
      courseHeader: "Learn to customize and build modern websites from scratch using Bootstrap 5",
      category: ["Front End", "ALL Courses"],
      hours: "3h",
      lessons: "26 Lessons",
      img: bootstarp,
      type: "Front End",
      disc: "In today's digital landscape, creating responsive and visually appealing websites is essential for success. Enter Bootstrap - the world's most popular front-end framework for building responsive, mobile-first web projects with ease. If you're ready to elevate your web design skills and create stunning websites that look great on any device, Mastering Bootstrap: Building Responsive and Stunning Websites is the course for you.",
      willLearn:"Throughout this course, Abdelrahman Gamal will guide you through a comprehensive curriculum,  Led by an experienced instructor proficient in Bootstrap development, guiding students through the fundamentals and advanced concepts of building responsive",
      require:{r1:"Basic understanding of HTML and CSS fundamentals.",r2: "Familiarity with web development concepts such as grids, typography, and layouts can be beneficial."} ,

      instructor: {
        name: "Abdelrahman Gamal",
        title: "Front End Instructor and Web Development Expert",
        about:"I'm a fornt-end web developer and designer with a passion for building beautiful web interfaces from scratch With a passion for creating responsive and visually appealing websites.",
        img: Abdelrahman
      },
    },
    {
      id: 124,
      title: "The Complete React Js course for Beginners from zero to hero",
      courseHeader: "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Best Practices and way more!",

      category: ["Front End", "Full Stack", "ALL Courses"],
      hours: "10h 20m",
      lessons: "110 Lesson",
      img: react,
      type: "React Js",
      disc: "your comprehensive guide to mastering one of the most popular JavaScript libraries for building user interfaces. React has revolutionized front-end development by providing a component-based architecture that makes it easy to create reusable and scalable UI components.",
      willLearn:"Throughout this course, Osama Elzero will guide you through a comprehensive curriculum, Led by an experienced instructor proficient in React development, guiding students through the fundamentals and advanced concepts of building web applications with React.Focuses on developing practical skills and knowledge that are directly applicable in real-world web development projects using React.js, preparing students for success in React development roles.",

      require:{r1:"Need solid understanding of HTML, CSS, and JavaScript fundamentals.",r2: "Familiarity with ES6 features such as arrow functions, classes, and modules is also beneficial. "} ,
      instructor: {
        name: "Mahmoud Bakr",
        title: "Front End Instructor and Web Development Expert",
        about:"I am highly skilled web developer and educator specializing in React.js and front-end web development. With a passion for creating interactive and dynamic user interfaces, ",
        img: Mahmoud
      },
    },
    {
      id: 125,
      title: "The Complete Nest Js course for Beginners from zero to hero",
      courseHeader: "Develop and deploy enterprise back-end applications following best practices using Node.js and TypeScript",
      category: ["Back End", "Full Stack", "ALL Courses"],
      hours: "22h",
      lessons: "142 Lesson",
      img: nest,
      type: "Nest Js Course",
      disc: "Nest Js empowers developers to build fast, scalable, and SEO-friendly web applications with ease, combining the simplicity of React with the power of server-side rendering.  Next.js uses a file-based routing system that simplifies navigation in your application. ",
      willLearn:"Throughout this course, Ahmed Boghdady will guide you through a comprehensive curriculum, Led by an experienced instructor proficient in Next.js development, guiding students through the fundamentals and advanced concepts of building modern web applications with Next.js.Covers a wide range of topics including server-side rendering (SSR), static site generation (SSG), data fetching, routing, API routes, deployment, and performance optimization.",

      require:{r1:"Need a solid understanding of JavaScript or TypeScript.",r2: "Familiarity with Node.js and Express.js can be beneficial."} ,

      instructor: {
        name: "Ahmed Boghdady",
        title: "Back End Instructor and Web Development Expert",
        about:" I am highly skilled web developer and educator specializing in Nest.js and backend development.With 7 years of experience in the industry. ",
        img: ahmed
      },
    },
    {
      id: 126,
      title: "The Complete CSS course for Beginners from zero to hero",
      courseHeader: "Learn CSS for the first time or brush up your CSS skills and dive in even deeper. EVERY web developer has to know CSS. (incl. Flexbox, Grid )",

      category: ["Front End", "Full Stack", "ALL Courses"],
      hours: "8h",
      lessons: "52 Lesson",
      img: css,
      type: "Front End",
      disc: "In this comprehensive course, we'll take you from the basics of CSS to advanced techniques, equipping you with the knowledge and skills to create beautiful, responsive, and accessible web designs. Whether you're a beginner or an experienced developer, this course will empower you to leverage the full potential of CSS and elevate your web development skills to new heights.",
      willLearn:"Throughout this course, Osama Elzero will share their wealth of knowledge and practical insights, empowering you to create visually stunning, responsive, and user-friendly websites. From mastering the fundamentals to exploring advanced techniques, you'll gain the confidence and skills needed to tackle any design challenge with ease.",

      require:{r1:"Basic understanding of HTML.",r2: "Familiarity with web browsers and web development concepts is also helpful."} ,
      instructor: {
        name: "Osama Elzero",
        title: "Front End Instructor and Web Development Expert",
        about:"I'm a fornt-end web developer and designer with a passion for building beautiful web interfaces from scratch. " ,
        img: elzero

      },
    },
    {
      id: 127,
      title: "The Complete CS50 course form Scratch for Beginners",
      courseHeader: "CS50 is an introductory computer science course that covers fundamental concepts, problem-solving skills, and programming languages, designed to provide students with a strong foundation in computer science.",
      category: ["CS50", "ALL Courses"],
      hours: "10h",
      lessons: "82 Lesson",
      img: cs50,
      type: "CS50",
      disc: "Developed by Harvard University, CS50 is renowned for its rigorous curriculum, engaging lectures, and hands-on projects that challenge students to think critically and creatively. Through a blend of lectures, problem sets, and programming assignments, you'll explore fundamental concepts in computer science and gain practical skills that are applicable across various domains and industries.",
      willLearn:"Throughout this course, Abdelrahman Gamal will guide you through a comprehensive curriculum, The instructor possesses expertise in computer science concepts, programming languages, algorithms, data structures, and other fundamental topics covered in the CS50 curriculum.Demonstrates a passion for teaching and a commitment to helping students succeed in learning computer science concepts, regardless of their prior experience or background.",

      require:{r1:"Having basic computer literacy and problem-solving skills can be beneficial.",r2: "familiarity with concepts in mathematics, logic, and critical thinking can also aid in understanding the material covered in CS50."} ,

      instructor: {
        name: "Abdelrahman Gamal",
        title: "Programming Instructor and Web Development Expert",
        about:"I am distinguished computer scientist and educator with a passion for inspiring the next generation of coders. With 6 years of experience in the field.",
        img: Abdelrahman
      },
    },
    {
      id: 128,
      title: "CCNP Security (SCOR 350-701) ",
      courseHeader: "Implementing and Operating Cisco Security Core Technologies (SCOR 350-701) with Step by Step Lab Workbook",
      category: ["CCNP", "Network", "Security", "ALL Courses"],
      hours: "3h",
      lessons: "54 Lesson",
      img: CCNPsecure,
      type: "CCNP Security",
      disc: "Welcome to the CCNP Security (SCOR 350-701) Course: Securing Networks with Cisco Technologies, your gateway to becoming a certified Cisco security professional and mastering the latest technologies and techniques for securing modern networks. Developed by Cisco, the CCNP Security certification validates your expertise in designing, implementing, and managing security solutions using Cisco technologies.",
      willLearn:"Throughout this course, Abeer Hosni will guide you through a comprehensive curriculum,  Led by a Cisco Certified Instructor (CCI) or a seasoned networking professional with expertise in Cisco technologies, guiding students through the CCNP certification journey.Covers a wide range of topics including advanced routing protocols (OSPF, EIGRP, BGP), switching technologies (VLANs, STP, EtherChannel), network security, QoS (Quality of Service), MPLS (Multiprotocol Label Switching), and more.",

      require:{r1:"Basic understanding of networking concepts: including knowledge of TCP/IP, OSI model, subnetting, routing, switching, and VLANs.",r2: "Cisco Certified Network Associate (CCNA) certification or equivalent knowledge."} ,

      instructor: {
        name: "Abeer Hosni",
        title: "CCNP Instructor and Network and IT infrastructure Expert",
        about:"I am highly skilled network engineer and Cisco Certified Internetwork Expert (CCIE) specializing in Cisco networking technologies. ",

        img: AbeerHosni

      },
    },
    {
      id: 129,
      title: "The Complete CCNA 200-301 course",
      courseHeader: "Everything you need to pass the Cisco CCNA 200-301 Exam - a complete course with IT Lab.",

      category: ["Network", "Security", "ALL Courses"],
      hours: "50h",
      lessons: "91 Lesson",
      img: CCNA,
      type: "CCNA Security",
      disc: "Welcome to the CCNA 200-301 Certification Course, your comprehensive guide to mastering the fundamentals of networking and preparing for the Cisco Certified Network Associate (CCNA) exam. Whether you're a beginner in the field of networking or an experienced professional looking to enhance your skills, this course is designed to provide you with the knowledge and practical experience needed to succeed in the dynamic world of IT networking.",
      willLearn:"Throughout this course, Mahmoud Miaari will guide you through a comprehensive curriculum,Led by a Cisco Certified Instructor (CCI) or a seasoned networking professional with expertise in Cisco technologies, guiding students through the CCNA certification journey.Covers a wide range of topics including networking basics, TCP/IP, subnetting, VLANs, routing protocols (e.g., OSPF, EIGRP), WAN technologies, network security, and network automation.",

      require:{r1:"Basic understanding of networking concepts: including knowledge of TCP/IP, OSI model, subnetting, routing, switching, and VLANs.",r2: "Familiarity with basic networking technologies: Prior knowledge of Ethernet, IP addressing, and common networking devices like routers and switches is beneficial."} ,

      instructor: {
        name: "Mahmoud Miaari",
        title: "CCNA Instructor and Network and IT infrastructure Expert",
        about:"I am highly skilled network engineer and Cisco Certified Internetwork Expert (CCIE) specializing in Cisco networking technologies.",

        img: mahmoudMiaari

      },
    },

    {
      id: 130,
      title: "AWS Cloud Practitioner Essentials",
      courseHeader: "Learn Cloud Computing Concepts and AWS Basics | Master AWS Fundamentals and Hands-on Skills on Amazon Web Services (AWS).",

      category: ["AWS", "cloud", "ALL Courses"],
      hours: "50h",
      lessons: "58 Lesson",
      img: AWS,
      type: "AWS Cloud",
      disc: "This course is designed to provide you with a solid foundation in AWS cloud computing concepts, services, and best practices, empowering you to leverage the full potential of AWS to drive innovation and growth in your organization. Whether you're a beginner or an experienced IT professional, this course will equip you with the knowledge and skills to navigate the AWS cloud with confidence and efficiency.",
      willLearn:"Throughout this course, Saleh Saad will guide you through a comprehensive curriculum, Led by an AWS Certified Instructor who has demonstrated expertise in AWS technologies and best practices, guiding students through the AWS cloud learning journey.Covers cloud architecture principles, best practices, and design patterns for building scalable, resilient, and cost-effective solutions on AWS.",

      require:{r1:"Basic understanding of cloud computing concepts: Familiarity with the fundamentals of cloud computing, including concepts such as Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), is beneficial.",r2: "Basic knowledge of IT concepts: Some understanding of networking, storage, virtualization, and security concepts is helpful for grasping the material covered in AWS cloud courses."} ,

      instructor: {
        name: "Saleh Saad",
        title: "AWS Cloud Instructor and AWS services Expert",
        about:"I am highly skilled cloud architect and AWS Certified Solutions Architect specializing in Amazon Web Services (AWS).",

        img: salehSaad

      },
    },
    {
      id: 131,
      title: "Computing & Security Essentials",
      courseHeader: "A course describing the basics of computing and Security Essentials and most of the aspects related to this topic (incl. Virtualization Technology, Networks OSI Model & Networks Protocols) ",

      category: ["Computing & Security Essentials", "security", "ALL Courses"],
      hours: "9h",
      lessons: "15 Lesson",
      img: Security,
      type: "Computing & Security",
      disc: "This course is designed to provide you with a solid foundation in both computing concepts and security principles, empowering you to navigate the complexities of the digital world with confidence. Whether you're a beginner or an experienced professional, this course will equip you with the knowledge and skills to protect yourself and your organization from cyber threats and ensure the confidentiality, integrity, and availability of information.",
      willLearn:"Throughout this course, Mostafa Abd ElSalam will guide you through a comprehensive curriculum, The instructor possesses expertise in information security concepts, principles, and practices, including foundational knowledge in computing and cybersecurity essentials.Explores various security controls and mechanisms used to protect information systems and data, including access controls, network security measures, encryption techniques, intrusion detection and prevention systems (IDPS), and incident response procedures.Discusses risk management principles and methodologies, including risk assessment, risk analysis, risk treatment strategies, and the role of risk management in cybersecurity decision-making.",

      require:{r1:"Basic computer literacy, familiarity with web browsing.",r2: "Anyone with an interest in web development can enroll."} ,

      instructor: {
        name: "Mostafa Abd ElSalam",
        title: "Security Instructor and Network IT infrastructure Expert",
        about:"I am a cybersecurity professional and educator specializing in Information Network and Security. ",

        img: moAbdElsalam
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
