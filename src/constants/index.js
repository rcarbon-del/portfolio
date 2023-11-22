import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    elem,
    jhs,
    shs,
    mom,
    dad,
    withsir,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "receiver",
      title: "Admin",
    },
  ];
  
  const services = [
    {
      title: "Communication",
      icon: web,
      percentage: "65%",
    },
    {
      title: "Programming",
      icon: mobile,
      percentage: "20%",
    },
    {
      title: "Critical Thinking",
      icon: backend,
      percentage: "70%",
    },
    {
      title: "Adaptability",
      icon: creator,
      percentage: "90%",
    },
    {
      title: "Teamwork",
      icon: creator,
      percentage: "90%",
    },
    {
      title: "Problem Solving",
      icon: web,
      percentage: "65%",
    },
    {
      title: "Public Speaking",
      icon: mobile,
      percentage: "20%",
    },
    {
      title: "Responsiveness",
      icon: creator,
      percentage: "90%",
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My Elementary School Experience",
      description:
        "I graduated elementary school at Manuel L. Quezon Elementary School in 2017 with high marks.",
      image: elem,
    },
    {
      name: "My Junior High School Experience",
      description:
        "I graduated junior high school at Baguio City National Science High School in 2021 with high marks.",
      image: jhs,
    },
    {
      name: "My Senior High School Experience",
      description:
        "I graduated senior high school at Baguio City National Science High School in 2023 with high marks.",
      image: shs,
    },
    {
      name: "Hug with my mother, Elvie",
      description:
        "Thank you for always supporting me and helping me in every way possible Mom.",
      image: mom,
    },
    {
      name: "Handshake with my father, Edgar",
      description:
        " Thank you for everything you have done and will do in the future, Dad!",
      image: dad,
    },
    {
      name: "With Sir Jeremiah Pasion",
      description:
        "A picture with one of the newer professors here in UC CITCS.",
      image: withsir,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };