import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Shinki Gulati",
  title: "Hi I'm Web Developer",
  subTitle: emoji(
    "I’m a passionate front-end developer seeking an exciting role in an established IT company. My goal is to collaborate with talented teams, tackle challenging projects, and leverage the latest technologies to create exceptional user experiences."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1D9xTNZ6Gom16Ts3h1QEnqp35zyqxeji6/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/shinkigulati1008",
  linkedin: "https://www.linkedin.com/in/shinki-gulati",
  gmail: "shinkigulati@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Experienced Senior Front End/UI Developer with 10+ years of expertise in HTML, CSS, and JavaScript, including extensive experience with SAP UI5. Specializes in Angular, React, and Redux for state management, translating design concepts into efficient front-end code. Adept at estimating timelines and costs, and collaborating with cross-functional teams to ensure seamless user experiences.",
  skills: [
    emoji(
      "⚡ Create engaging and user-friendly interfaces for your websites and mobile apps that captivate and delight users."
    ),
    emoji("⚡ Building fast, device-friendly websites with Progressive Web Applications (PWAs) in regular and Single Page Application (SPA) setups"),
    emoji(
      "⚡ Integration of third party services such as Firebase and Google Analytics"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
      color: "#dd4b24"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
      color: "#016db5"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
      color: "#c76395"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      color: "#e8d44d"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
      color: "#5ed3f3"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
      color: "#6fb450"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular",
      color: "#bd002e"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
      color: "#dc2d35"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
      color: "#2683ca"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php",
      color: "#7277ad"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
      color: "#f4c43d"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress",
      color: "#4fa5ca"
    },
    {
      skillName: "drupal",
      fontAwesomeClassname: "fab fa-drupal",
      color: "#026eb4"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
      color: "#026eb4"
    },
    {
      skillName: "SAP UI5",
      iconUrl: "/sapui5.png",
      color: "#026eb4"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend - React/Angular/Javascript/SAP UI5", 
      progressPercentage: "90%"
    },
    {
      Stack: "Backend - Node/Express/PHP ",
      progressPercentage: "70%"
    },
    {
      Stack: "MySql/DataBases/MongoDB",
      progressPercentage: "60%"
    },
    {
      Stack: "CI-CD/GIT/Azure",
      progressPercentage: "60%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      color: "#3fa6bb",
      role: "Senior Software Engineer",
      company: "Prudential Accounting",
      companylogo: require("./assets/images/Prudential-Logo-PNG.png"),
      date: "Feb 2023 – Present",
      descBullets: [
        "Specialize in React for creating user-friendly front-ends and use Node JS for seamless backend API integration",
        "In a firm with a team size of 9-10 people, I reported directly to the CEO, contributing to more strategic software initiatives.",
        "I configure the CRM platform to precisely meet evolving business needs, utilizing NODE JS to seamlessly integrate APIs for robust functionality."
      ]
    },
    {
      color: "#db283e",
      role: "Senior Software Engineer",
      company: "Net Solutions",
      companylogo: require("./assets/images/net_solutions_logo_black.png"),
      date: "Oct 2021 – June 2023",
      descBullets: [
        "Effectively utilized Angular 10,11 and 13 tapping into its capabilities to contribute to the development and enhancement of web applications",
        "JIRA has been a pivotal tool for project management, enabling collaboration, progress tracking and transparent communication within the team",
        "Leveraging Azure for cloud-based solutions, I've played a key role in creating and approving merge requests of team"
      ]
    },
    {
      color: "#e35d25",
      role: "Junior Team Lead",
      company: "Signity Software Solutions",
      companylogo: require("./assets/images/Signity.png"),
      date: "Nov 2013 – Oct 2021",
      descBullets: [
        "I've been all about clear communication, leading training programs, and exceeding expectations in React, Angular, JavaScript, and project management",
        "I've also dived into PHP frameworks (like CakePHP, Codeigniter, Phalcon), GIT, MySQL, CI/CD, leadership, and analytics",
        "For the team, I've been the one doing ongoing performance evaluations, giving constructive feedback, and recognizing achievements to drive continuous improvement"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};



// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+64 22 691 6724",
  email_address: "shinkigulati@gmail.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  contactInfo,
  isHireable
};
