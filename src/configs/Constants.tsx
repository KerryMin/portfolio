import { TerminalData, WebsitesData } from "~/types";

const constants = {
  name: "Kerryann Minott",
  email: "kerrym175@gmail.com",
  github: "https://github.com/KerryMin?tab=projects",
  linkedIn: "https://www.linkedin.com/in/kerryann-minott-31b715221/",
  twitter: "https://twitter.com/KerrMin_?t=cK09B9FhTUAcf4rSZM7LDw&s=31",
  terminalData: terminalData(),
  safariSnsLinks: safariSnsLinks(),
  vsCode: {
    title: "Visual Studio Code",
    repo: ""
  }
  // appDock: appDock()
};

function terminalData(): TerminalData[] {
  return [
    {
      id: "about",
      title: "about",
      type: "folder",
      children: [
        {
          id: "about-bio",
          title: "bio.txt",
          type: "file",
          content: (
            <div className="py-1">
              <div>
                Hi, my name is Kerryann Minott. I'm a Frontend React Engineer. I live for
                all things JavaScript in the frontend and even a little on the backend.
              </div>
            </div>
          )
        },
        {
          id: "about-interests",
          title: "interests.txt",
          type: "file",
          content:
            "Frontend React Development | Building Dynamic Web Applications | JavaScript"
        },
        {
          id: "about-who-cares",
          title: "who-cares.txt",
          type: "file",
          content: "I consider myself to be a frontline warrior!"
        },
        {
          id: "about-contact",
          title: "contact.txt",
          type: "file",
          content: (
            <ul className="list-disc ml-6">
              <li>
                Email:{" "}
                <a
                  className="text-blue-300"
                  href="mailto:kerrym175@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  kerrym175@gmail.com
                </a>
              </li>
              <li>
                Github:{" "}
                <a
                  className="text-blue-300"
                  href="https://github.com/KerryMin?tab=projects"
                  target="_blank"
                  rel="noreferrer"
                >
                  @KerryMin
                </a>
              </li>
              <li>
                Linkedin:{" "}
                <a
                  className="text-blue-300"
                  href="https://www.linkedin.com/in/kerryann-minott-31b715221/"
                  target="_blank"
                  rel="noreferrer"
                >
                  xiaohan-zou
                </a>
              </li>
            </ul>
          )
        }
      ]
    },
    {
      id: "dream",
      title: "dream.txt",
      type: "file",
      content: (
        <div className="py-1">
          <div>
            <span className="text-yellow-400">while</span>(
            <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
          </div>
          <div>
            <span className="text-blue-400 ml-9">money</span>
            <span className="text-yellow-400">++</span>;
          </div>
          <div>
            <span>{"}"}</span>
          </div>
        </div>
      )
    }
  ];
}

function safariSnsLinks(): WebsitesData {
  return {
    favorites: {
      title: "SNS Links",
      sites: [
        {
          id: "my-github",
          title: "Github",
          img: "img/sites/github.svg",
          link: "https://github.com/Renovamen"
        },
        {
          id: "my-linkedin",
          title: "Linkedin",
          img: "img/sites/linkedin.svg",
          link: "https://www.linkedin.com/in/xiaohan-zou"
        },
        {
          id: "my-twitter",
          title: "Twitter",
          img: "img/sites/twitter.svg",
          link: "https://twitter.com/KerrMin_?t=cK09B9FhTUAcf4rSZM7LDw&s=31"
        },
        {
          id: "my-email",
          title: "Email",
          img: "img/sites/gmail.svg",
          link: "mailto:kerrym175@gmail.com"
        }
      ]
    },
    freq: {
      title: "Frequently Visited",
      sites: [
        {
          id: "github",
          title: "Github",
          img: "img/sites/github.svg",
          link: "https://github.com/"
        },
        {
          id: "twitter",
          title: "Twitter",
          img: "img/sites/twitter.svg",
          link: "https://www.twitter.com/"
        },
        {
          id: "linkedin",
          title: "LinkedIn",
          img: "img/sites/linkedin.svg",
          link: "https://linkedin.com/"
        },
        {
          id: "pinterest",
          title: "Pinterest",
          img: "img/sites/pinterest.svg",
          link: "https://www.pinterest.com/"
        },
        {
          id: "medium",
          title: "Medium",
          img: "img/sites/medium.svg",
          link: "https://www.medium.com//"
        },
        {
          id: "looper",
          title: "Looper",
          img: "img/sites/looper.svg",
          link: "https://www.looper.com/"
        },
        {
          id: "manhwatop",
          title: "ManhwaTop",
          img: "img/sites/manhwatop.jpeg",
          link: "https://www.manhwatop.com/"
        },
        {
          id: "leetcode",
          title: "LeetCode",
          img: "img/sites/leetcode.svg",
          link: "https://leetcode.com/"
        },
        {
          id: "reddit",
          title: "Reddit",
          img: "img/sites/reddit.svg",
          link: "https://www.reddit.com/"
        },
        {
          id: "hacker-news",
          title: "Hacker News",
          img: "img/sites/hacker.svg",
          link: "https://news.ycombinator.com/"
        },
        {
          id: "steam",
          title: "Steam",
          img: "img/sites/steam.svg",
          link: "https://store.steampowered.com/"
        }
      ]
    }
  };
}

export default constants;
