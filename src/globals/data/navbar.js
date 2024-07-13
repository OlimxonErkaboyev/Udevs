import {
  devolepment,
  phone,
  userInterface,
  ITconsulting,
  delever,
  eng,
  goodzone,
  iman,
  optimization,
  rus,
  down_arrow,
  smsuz,
} from "../../assets/images/navbar";

export const data = {
  navbar: [
    {
      title: "Direction",
      href: "#direction",
    },
    {
      title: "Command",
      href: "#command",
    },
    {
      title: "Services",
      dropTitle: "Services",
      img: down_arrow,
      options: [
        {
          title: "Development of mobile applications",
          href: "#application",
          img: phone,
        },
        {
          title: "Development and implementation ERP systems",
          href: "#system",
          img: devolepment,
        },
        {
          title: "User interface, User experience design",
          href: "#design",
          img: userInterface,
        },
        {
          title: "IT consulting",
          href: "#consult",
          img: ITconsulting,
        },
        {
          title: "Optimization IT consulting infrastructure",
          href: "#optimization",
          img: optimization,
        },
      ],
    },
    {
      title: "Tools",
      href: "#tools",
    },
    {
      title: "Clients",
      href: "#clients",
    },
    {
      title: "Portfolio",
      dropTitle: "Portfolio",
      img: down_arrow,
      options: [
        {
          title: "Delever",
          href: "#delever",
          img: delever,
        },
        {
          title: "SMSuz",
          href: "#smsuz",
          img: smsuz,
        },
        {
          title: "Goodzone",
          href: "#goodzone",
          img: goodzone,
        },
        {
          title: "Iman",
          href: "#iman",
          img: iman,
        },
      ],
    },
    {
      title: "Language",
      img: down_arrow,
      class: "site-header__dropdown__lang",
      classList: "site-header__dropdown__language_list",
      options: [
        {
          title: "Rus",
          href: "#rus",
          img: rus,
        },
        {
          title: "Eng",
          href: "#eng",
          img: eng,
        },
      ],
    },
  ],
  burger: [
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "Clients",
      href: "#clients",
    },
    {
      title: "Command",
      href: "#command",
    },
  ],
};
