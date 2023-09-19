// import Terminal from "~/components/apps/Terminal";
import Safari from "~/components/apps/Safari";
import Bear from "~/components/apps/Bear";
import VSCode from "~/components/apps/VSCode";

import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "bear",
    title: "About Me",
    desktop: true,
    show: true,
    width: 1024,
    height: 600,
    img: "img/icons/finder.png",
    content: <Bear />
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    show: false,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    img: "img/icons/safari.png",
    content: <Safari />
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    show: false,
    img: "img/icons/vscode.png",
    content: <VSCode />
  },
  // TODO: Add terminal
  // {
  //   id: "terminal",
  //   title: "Terminal",
  //   desktop: true,
  //   show: false,
  //   img: "img/icons/terminal.png",
  //   content: <Terminal />
  // },
  {
    id: "email",
    title: "Mail",
    desktop: false,
    img: "img/icons/mail.png",
    link: "mailto:kerrym175@gmail.com"
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/KerryMin?tab=projects"
  }
];

export default apps;
