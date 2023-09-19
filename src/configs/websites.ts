import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "Personal Links",
    sites: [
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/KerryMin?tab=projects"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/kerryann-minott-31b715221/"
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
      }
    ]
  }
};

export default websites;
