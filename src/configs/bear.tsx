import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:user",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! Come get to know about me..."
      },
      {
        id: "biography",
        title: "Biography",
        file: "markdown/biography.md",
        icon: "i-icon-park-outline:github",
        excerpt: "A little story about where I began..."
      },
      {
        id: "technologies",
        title: "Technologies",
        file: "markdown/technologies.md",
        icon: "i-octicon:browser",
        excerpt: "Some things tech I know..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-fa-solid:file",
    md: [
      {
        id: "wat2watch",
        title: "What 2 Watch",
        file: "https://raw.githubusercontent.com/KerryMin/what2watch/main/README.md",
        icon: "i-fa-solid:film",
        excerpt: "A movie recommendation system based on your taste...",
        link: "https://github.com/KerryMin/what2watch"
      },
      {
        id: "portfolio",
        title: "Personal Portfolio",
        file: "https://raw.githubusercontent.com/KerryMin/portfolio/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "A personal portfolio website to showcase my projects...",
        link: "https://github.com/KerryMin/portfolio"
      }
    ]
  },
  {
    id: "Contact",
    title: "Contact",
    icon: "i-fa-solid:address-book",
    md: [
      {
        id: "contact",
        title: "Contact",
        file: "markdown/contact.md",
        icon: " ",
        excerpt: "Call me, beep me, if you wanna reach me..."
      }
    ]
  },
  {
    id: "Resume",
    title: "Resume",
    icon: "i-fa-solid:file",
    md: [
      {
        id: "resume",
        title: "Resume",
        file: "markdown/resume.md",
        icon: " ",
        excerpt: "Experience sheet"
      }
    ]
  }
];

export default bear;
