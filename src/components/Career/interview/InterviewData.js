import React from "react";

export const InterviewData = {
  reactQ: [
    {
      id: 130,
      question: "1-What is the difference between HTML, CSS, and JavaScript? ",
      answer:
        "HTML (HyperText Markup Language) is used for creating the structure of web pages. CSS (Cascading Style Sheets) is used for styling the appearance of web pages. JavaScript is a programming language used for adding interactivity and behavior to web pages.",
    },
    {
      id: 131,
      question: "2-What are Semantic elements in HTML?",
      answer:
        "The semantic elements in HTML are the elements that contain the meaning of the content and the structure of the HTML document. These elements contain content that is related to their names or reflects their names. These are the some of semantic HTML : Header, Main, Section, Article, Aside, and Footer etc.",
    },
    {
      id: 132,
      question: "3-What are the Empty elements in HTML? ",
      answer:
        "The empty elements in HTML are the elements that don’t require and closing tag followed by the opening tag. These elements are also known as self-closing elements. Example: <img>, <input>, <br>, <hr> etc.",
    },
    {
      id: 133,
      question: "4-Explain the features of HTML5?",
      answer:
        "Introduced new semantic elements like: <header>, <footer>, <nav>, <aside>, <article>, <section> etc. New form input types such as email, url, number, date, etc. It introduced the <audio> and <video> tags to embed audios and videos and reduces the dependence on the third party libraries. <canvas> element to draw graphics and animations using JavaScript. Introduces the browser storage as localStorage and sessionStorage to store data in the browser.",
    },
    {
      id: 134,
      question:
        "5-Explain the precedence of the Class, Id and Element selectors in CSS.",
      answer:
        "ID Selector > Class Selector > Element Selector ID Selector + Class Selector > ID Selector + Element Selector > Class Selector + Element Selector",
    },
    {
      id: 135,
      question: "6-What are pseudo classes and pseudo elements in CSS?",
      answer:
        "The pseudo classes and pseudo elements are different entities in CSS. They are combinely known as pseudo selectors in CSS. Below is the explanation for them: pseudo classes: These are the classes that selects the elements based on their state and the position. Some pseudo classes are :hover, :focus, :nth-child etc.  pseudo elements: These are the virtual elements that are mainly defined to style a particular part of an element in the HTML document. Some pseudo elements are :before and :after.",
    },
    {
      id: 136,
      question:
        "7-What is difference between visibility: hidden and display: none properties in CSS?",
      answer:
        "The visibility: hidden property only hides the content of the element on which it is used. It does not removes the element from the document and keep the space as it is so that no other element can replace it on the UI. On the other hand, the display: none property not only hides the element but removes it from the document and the space acquired by the element is now free to be acquired by the other elements.",
    },
    {
      id: 137,
      question: "8-Explain the building blocks of React?",
      answer:
        "The five main building blocks of React are: Components: These are reusable blocks of code that return HTML. ,JSX: It stands for JavaScript and XML and allows you to write HTML in React. ,Props and State: props are like function parameters and State is similar to variables. ,Context: This allows data to be passed through components as props in a hierarchy. ,Virtual DOM: It is a lightweight copy of the actual DOM which makes DOM manipulation easier.",
    },
    {
      id: 138,
      question: "9-What is the difference between HTML, CSS, and JavaScript? ",
      answer:
        "-HTML (HyperText Markup Language) is used for creating the structure of web pages. CSS (Cascading Style Sheets) is used for styling the appearance of web pages. JavaScript is a programming language used for adding interactivity and behavior to web pages.",
    },
    {
      id: 139,
      question: "10-What is JSX?",
      answer:
        "React uses Virtual DOM which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM..",
    },
  ],
  nodeQ: [
    {
      id: 140,
      question: "1-What is the Difference between Node.js and JavaScript ?",
      answer:
        "JavaScript is a client-side scripting language used in web browsers. Node.js provides a server-side runtime environment for executing JavaScript code. ,Key differences are that : Node.js runs on the server, while JavaScript runs in a web browser. ,Node.js is built on Chrome’s V8 engine. ,Node.js enables building scalable network applications. ,JavaScript is limited to browser APIs and capabilities. ",
    },
    {
      id: 141,
      question: "2- What is npm and its advantages?",
      answer:
        "npm (Node Package Manager) is the default package manager for Node.js. It allows developers to discover, share, and reuse code packages easily. Its advantages include dependency management, version control, centralized repository, and seamless integration with Node.js projects.",
    },
    {
      id: 142,
      question: "3-What is a module in Node.js?",
      answer:
        "In Node.js Application, a Module can be considered as a block of code that provide a simple or complex functionality that can communicate with external application. Modules can be organized in a single file or a collection of multiple files/folders. Modules are useful because of their reusability and ability to reduce the complexity of code into smaller pieces. Some examples of modules are. http, fs, os, path, etc.",
    },
    {
      id: 143,
      question: "4-What is middleware?",
      answer:
        "Middleware is the function that works between the request and the response cycle. Middleware gets executed after the server receives the request and before the controller sends the response.",
    },
    {
      id: 144,
      question: "5-What is the difference between Node.js and AJAX?",
      answer:
        "Node.js is a JavaScript runtime environment that runs on the server side whereas AJAX is a client-side programming language that runs on the browser.",
    },
    {
      id: 145,
      question: "6-What is buffer in Node.js?",
      answer:
        "The Buffer class in Node.js is used to perform operations on raw binary data. Generally, Buffer refers to the particular memory location in memory. Buffer and array have some similarities, but the difference is array can be any type, and it can be resizable. Buffers only deal with binary data, and it can not be resizable. Each integer in a buffer represents a byte. console.log() function is used to print the Buffer instance.",
    },
    {
      id: 146,
      question: "7-What is callback hell?",
      answer:
        "Callback hell is an issue caused due to a nested callback. This causes the code to look like a pyramid and makes it unable to read To overcome this situation we use promises.",
    },
    {
      id: 147,
      question:
        "8-What is the difference between setTimeout() and setImmediate() method?",
      answer:
        "The setImmediate function is used to execute a particular script immediately whereas the setTimeout function is used to hold a function and execute it after a specified period of time.",
    },
    {
      id: 148,
      question: "9-What is the difference between spawn() and fork() method?",
      answer:
        "Both these methods are used to create new child processes the only difference between them is that spawn() method creates a new function that Node runs from the command line whereas fork() function creates an instance of the existing fork() method and creates multiple workers to perform on the same task.",
    },
    {
      id: 149,
      question: "10- Explain some of the cluster methods in Node.js .",
      answer:
        "Fork(): It creates a new child process from the master. The isMaster returns true if the current process is master or else false. ,isWorker: It returns true if the current process is a worker or else false. ,process: It returns the child process which is global. ,send(): It sends a message from worker to master or vice versa. ,kill(): It is used to kill the current worker.",
    },
  ],
  angularQ: [
    {
      id: 150,
      question: "1. What is Angular, and how does it differ from AngularJS?",
      answer:
        "Angular is a TypeScript-based open-source front-end web application framework developed by Google. It's a complete rewrite of AngularJS, introducing features like a component-based architecture, better performance with ahead-of-time (AOT) compilation, and improved dependency injection.",
    },
    {
      id: 151,
      question: "2-Explain the Angular component lifecycle hooks.",
      answer:
        "Angular components have several lifecycle hooks that allow developers to tap into the lifecycle of a component. Some key hooks include ngOnInit (called after the first ngOnChanges), ngOnChanges (called when an input binding value changes), and ngOnDestroy (called before the component is destroyed).",
    },
    {
      id: 152,
      question:
        "3-How does data binding work in Angular? Explain one-way and two-way data binding.",
      answer:
        "Data binding is a powerful feature in Angular. One-way data binding involves binding data from the component to the view (using interpolation or property binding), while two-way data binding combines property binding and event binding, allowing automatic synchronization between the view and the model",
    },
    {
      id: 153,
      question:
        "4- What is Angular Dependency Injection and why is it important?",
      answer:
        "Angular Dependency Injection is a design pattern where components and services are given their dependencies rather than creating or managing them internally. It promotes code modularity, testability, and maintainability by making components and services more independent and reusable.",
    },
    {
      id: 154,
      question: "5- What is Angular Routing and how is it implemented?",
      answer:
        "Angular Routing is a mechanism that allows navigation from one view to another in a single-page application. It is implemented by defining routes, associating each route with a specific component, and using the Angular router to navigate between these components. Routes can be configured with parameters and guards for more advanced navigation control.",
    },
    {
      id: 155,
      question:
        "6- What are Angular services, and how do they differ from components?",
      answer:
        "Angular services are singleton objects that perform tasks common to multiple components. They are used to share data, logic, or functionality across different parts of an application. Services are distinct from components as they don't have a UI and are designed to be reusable, promoting a modular and maintainable codebase.",
    },
    {
      id: 156,
      question:
        "7-Explain the concept of Angular directives. Provide examples of built-in directives.",
      answer:
        "Angular directives are markers on a DOM element that tell Angular to do something with that element. Built-in directives include structural directives like ngIf (conditionally displaying elements) and ngFor (repeating elements based on an iterable), and attribute directives like ngStyle (applying styles based on conditions) and ngClass (adding or removing CSS classes dynamically).",
    },
    {
      id: 157,
      question:
        "8- What are Angular pipes, and how do they transform data in templates?",
      answer:
        "Angular pipes are used to transform and format data in templates. They are applied in the HTML using the pipe operator (|). Examples include {{ dateValue | date: 'short' }} to format a date and {{ stringValue | uppercase }} to convert a string to uppercase. Custom pipes can also be created for more specific transformations.",
    },
    {
      id: 158,
      question: "9-What is TypeScript? Why is it used?",
      answer:
        "TypeScript is a superset of JavaScript that adds static typing and other features to enhance code quality and maintainability. It is used in Angular for the following reason: -Static Typing: Helps catch errors during development. ,Enhanced IDE Support: Enables better code navigation and autocompletion and Improved Readability: Type annotations make code more understandable.",
    },
    {
      id: 159,
      question: "10- Why is lazy loading required in modules?",
      answer:
        "Lazy loading in Angular is essential for improving application performance by loading modules only when they are needed. This reduces the initial loading time of the application and enhances the user experience. Lazy loading is achieved using the loadChildren property in the route configuration.",
    },
  ],
  nextQ: [
    {
      id: 160,
      question: "1- What is Next.js, and how does it differ from React?",
      answer:
        "Next.js is an open-source framework built on React, designed for creating server-side rendered React applications. The primary distinction is in routing: React employs client-side routing, while Next.js offers server-side routing for faster loading and better SEO. It also includes features like automatic code splitting, static site generation, and dynamic imports.",
    },
    {
      id: 161,
      question: "2-What are the advantages of using Next.js over React?",
      answer:
        "Next.js offers benefits like server-side rendering, automatic code splitting, static site generation, dynamic imports, optimized performance, and easy deployment. It also supports built-in SEO and analytics, simplifying search engine optimization and user engagement tracking.",
    },
    {
      id: 162,
      question:
        "3-What is client-side rendering, and how does it differ from server-side rendering?",
      answer:
        "Client-side rendering (CSR) renders a webpage on the client's browser using JavaScript after receiving initial HTML, CSS, and JavaScript from the server. SSR sends fully rendered HTML to the client, while CSR sends an empty HTML page populated by JavaScript.",
    },
    {
      id: 163,
      question: "4- How do you configure routing in a Next.js application?",
      answer:
        "Next.js employs file-based routing, where creating a file in the pages directory with the desired URL path automatically creates a corresponding page.",
    },
    {
      id: 164,
      question:
        "5-What is the purpose of the getStaticProps function in Next.js?",
      answer:
        "getStaticProps fetches data at build time for static site generation. It's called during the build process and passes the fetched data as props to the page component.",
    },
    {
      id: 165,
      question:
        "6-What is serverless architecture, and how does it relate to Next.js?",
      answer:
        "Serverless architecture, managed by cloud providers, scales resources based on demand. Next.js can work with serverless architecture by deploying to platforms like AWS Lambda or Google Cloud Functions.",
    },
    {
      id: 166,
      question:
        "7-How do you pass data between pages in a Next.js application?",
      answer:
        "Next.js offers various methods to pass data between pages, such as URL query parameters, the Router API, and state management libraries like Redux or React Context. The getServerSideProps function can also be used for server-side data fetching.",
    },
    {
      id: 167,
      question:
        "8-What is the purpose of the getStaticPaths function in Next.js?",
      answer:
        "getStaticPaths generates dynamic paths for pages with dynamic data. This function is used to create possible values for dynamic data, which are then used to generate static files.",
    },
    {
      id: 168,
      question:
        "9-What is the difference between a container component and a presentational component?",
      answer:
        "A container component manages state and logic, while a presentational component focuses on rendering UI based on props from the container component.",
    },
    {
      id: 169,
      question:
        "10- How do you optimize the performance of a Next.js application?",
      answer:
        "Performance optimization strategies include code splitting, lazy loading, image optimization, server-side caching, CDN caching, and using performance monitoring tools.",
    },
  ],
  androidQ: [
    {
      id: 170,
      question: "1-What is Android and the latest version of Android?",
      answer:
        "Android is an operating system that is built basically for Mobile phones. It is based on the Linux Kernel and other open-source software and is developed by Google. It is used for touchscreen mobile devices such as smartphones and tablets. But nowadays these are used in Android Auto cars, TV, watches, cameras, etc. It has been one of the best-selling OS for smartphones. Android OS was developed by Android Inc.",
    },
    {
      id: 171,
      question: "2-What’s Activity in Android?",
      answer:
        "Activity class is one of the very important parts of the Android component. Any app, no matter how small it is (in terms of code and scalability), has at least one Activity class. Unlike most programming languages, in which the main() method is the entry point for that program or application to start its execution, the android operating system initiates the code in an Activity instance by invoking specific callback methods that correspond to specific stages of its lifecycle. So it can be said that An activity is the entry point for interacting with the user..",
    },
    {
      id: 172,
      question: "3-Why is XML used for frontend development in Android? ",
      answer:
        "XML stands for Extensible Markup Language. XML is a markup language much like HTML used to describe data. XML itself is well readable both by humans and machines. Also, it is scalable and simple to develop. In Android, we use XML for designing our layouts because XML is a lightweight language, so it doesn’t make our layout heavy.",
    },
    {
      id: 173,
      question: "4- What are the components of the Android Application?",
      answer:
        "There are some necessary building blocks that an Android application consists of. These loosely coupled components are bound by the application manifest file which contains the description of each component and how they interact. The four main components of android applications are: Activities ,Services ,Content Providers ,Broadcast Receiver ,Intents",
    },
    {
      id: 174,
      question: "5- What is the Dalvik Virtual Machine?",
      answer:
        "DVM is a virtual machine to execute Android applications. The Java bytecode(.class file) generated by the javac compiler is converted into Dalvik bytecode to make the application source files executable on the DVM. Since Android devices have a definite processing capacity, memory, and battery life, the DVM design principle aims to optimize itself so that it can load fastly and run smoothly even on low memory/powered devices. This virtual machine is very efficient in running multiple instances on the same device.",
    },
    {
      id: 175,
      question: "6-What is Toast in Android?",
      answer:
        "A Toast is a short alert message shown on the Android screen for a short interval of time. Android Toast is a short popup notification that is used to display information when we perform any operation in our app. It disappears automatically. If the user wants a permanently visible message, then a notification can be used.",
    },
    {
      id: 176,
      question: "7-How do What’s Service in android?",
      answer:
        "Services in Android are a special component that facilitates an application to run in the background in order to perform long-running operation tasks. The prime aim of a service is to ensure that the application remains active in the background so that the user can operate multiple applications at the same time. A user interface is not desirable for android services as it is designed to operate long-running processes without any user intervention. A service can run continuously in the background even if the application is closed or the user switches to another application.",
    },
    {
      id: 177,
      question: "8-What’s Content Provider in android??",
      answer:
        "In Android, Content Providers are a very important component that serves the purpose of a relational database to store the data of applications. The role of the content provider in the android system is like a central repository in which data of the applications are stored, and it facilitates other applications to securely access and modify that data based on the user requirements.  The Android system allows the content provider to store the application data in several ways. Users can manage to store the application data like images, audio, videos, and personal contact information by storing them in SQLite Database, in files, or even on a network.",
    },
    {
      id: 178,
      question: "9-What’s Broadcast Receiver in android?",
      answer:
        "A container component manages state and logic, while a presentational component focuses on rendering UI based on props from the container component.",
    },
    {
      id: 179,
      question:
        "10- How do you optimize the performance of a Next.js application?",
      answer:
        "Broadcast in android is the system-wide event that can occur when the device starts, when a message is received on the device, when incoming calls are received, or when a device goes to airplane mode, etc. Broadcast Receivers are used to respond to these system-wide events. Broadcast Receivers allow us to register for the system and application events, and when that event happens, then the registered receivers get notified. There are mainly two types of Broadcast Receivers: Static Broadcast Receivers: These types of Receivers are declared in the manifest file and work even if the app is closed. ,Dynamic Broadcast Receivers: These types of receivers work only if the app is active or minimized.",
    },
  ],
  networkّQ: [
    {
      id: 180,
      question: "1-What is Routing?",
      answer:
        "The job of the Data Link layer is to check messages are sent to the right device. Another function of this layer is framing.",
    },
    {
      id: 181,
      question: "2-What is the key advantage of using switches?",
      answer:
        "When a switch receives a signal, it creates a frame out of the bits that were from that signal. With this process, it gains access and reads the destination address, after which it forwards that frame to the appropriate port. This is a very efficient means of data transmission, instead of broadcasting it on all ports.",
    },
    {
      id: 182,
      question: "3-When does network congestion occur?",
      answer:
        "Network congestion occurs when too many users are trying to use the same bandwidth. This is especially true in big networks that do not resort to network segmentation.",
    },
    {
      id: 183,
      question: "4- Which LAN switching method is used in CISCO Catalyst 5000?",
      answer:
        "CISCO Catalyst 5000  uses the Store-and-forward switching method. It stores the entire frame to its buffers and performs a CRC check before deciding whether or not to forward that data frame.",
    },
    {
      id: 184,
      question: "5- What is the role of the LLC sublayer?",
      answer:
        "The LLC sublayer stands for Logical Link Control. It can provide optional services to an application developer. One option is to provide flow control to the Network layer by using stop/start codes. The LLC can also provide error correction.",
    },
    {
      id: 185,
      question: "6-How does RIP differ from IGRP?",
      answer:
        "RIP relies on the number of hops in order to determine the best route to a network. On the other hand, IGRP takes consideration many factors before it decides the best route to take, such as bandwidth, reliability, MTU and hop count.",
    },
    {
      id: 186,
      question:
        "7-What is the function of the Application Layer in networking?",
      answer:
        "The Application Layer supports the communication components of an application and provides network services to application processes that span beyond the OSI reference model specifications. It also synchronizes applications on the server and client.",
    },
    {
      id: 187,
      question: "8-Differentiate User Mode from Privileged Mode.",
      answer:
        "User Mode is used for regular task when using a CISCO router, such as to view system information, connecting to remote devices, and checking the status of the router. On the other hand, privileged mode includes all options that are available for User Mode, plus more. You can use this mode in order to make configurations on the router, including making tests and debugging.",
    },
    {
      id: 188,
      question: "9-What are packets?",
      answer:
        "Packets are the results of data encapsulation. These are data that have been wrapped under the different protocols of the OSI layers. Packets are also referred to as datagrams.",
    },
    {
      id: 189,
      question:
        "10- What are the different types of passwords used in securing a CISCO router?",
      answer:
        "There are actually five types of passwords that can be used. These enable secret, virtual terminal, console, and auxiliary.",
    },
  ],
};

export default InterviewData;
