import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
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
    icon: "i-octicon:repo",
    md: [
      {
        id: "flint",
        title: "Flint",
        file: "https://raw.githubusercontent.com/Renovamen/flint/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "A deep learning framework implemented in Numpy...",
        link: "https://github.com/Renovamen/flint"
      },
      {
        id: "portfolio-macos",
        title: "Portfolio macOS",
        file: "https://raw.githubusercontent.com/Renovamen/playground-macos/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://github.com/Renovamen/playground-macos"
      },
      {
        id: "oh-my-cv",
        title: "Oh, My CV!",
        file: "https://raw.githubusercontent.com/Renovamen/oh-my-cv/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "Write your curriculum vitae / resume in Markdown online...",
        link: "https://ohmycv.app"
      }
    ]
  },
  {
    id: "Contact",
    title: "Contact",
    icon: "i-octicon:repo",
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
    icon: "i-octicon:repo",
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
