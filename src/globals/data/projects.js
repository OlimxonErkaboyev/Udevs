import {
  adminPanel,
  crossPlatform,
  mDesign,
  wDesign,
  website,
  deleverImg,
  deliveryIcon,
  smsIcon,
  smsImg,
  goodzone,
  goodzoneIcon,
  goodzoneImg,
  iman,
  imanIcon,
  imanImg,
} from "../../assets/images/projects";

export const data = [
  {
    title: "Delever",
    path: "delever",
    color_title: "#ff5722",
    badge_icon: { img: deliveryIcon, title: "Delevery", bg: "#ff572233" },
    description:
      "Delever - Delivery service automation targeted at both consumers and restaurants.",
    branch: "What we did?",
    img: deleverImg,
    cards: [
      {
        title: "Website",
        icon: website,
      },
      {
        title: "Admin panel",
        icon: adminPanel,
      },
      {
        title: "Crossplatform",
        icon: crossPlatform,
      },
      {
        title: "Web design",
        icon: wDesign,
      },
      {
        title: "Mobile design",
        icon: mDesign,
      },
    ],
  },

  {
    title: "Smsuz.uz",
    path: "smsuz",
    color_title: "#1B5BF7",
    badge_icon: { img: smsIcon, title: "Notification", bg: "#DAE3FA" },
    description: "Smsuz.uz - It is a platform for bulk SMS messaging.",
    branch: "What we did?",
    img: smsImg,
    reverse: true,
    cards: [
      {
        title: "Website",
        icon: website,
      },
      {
        title: "Admin panel",
        icon: adminPanel,
      },
      {
        title: "Crossplatform",
        icon: crossPlatform,
      },
    ],
  },
  {
    title: { img: goodzone, isString: true },
    path: "goodzone",
    color_title: "#F50000",
    badge_icon: { img: goodzoneIcon, title: "E-Commerce", bg: "#FDCCCC" },
    description:
      "Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.",
    branch: "What we did?",
    img: goodzoneImg,
    cards: [
      {
        title: "Website",
        icon: website,
      },
      {
        title: "Admin panel",
        icon: adminPanel,
      },
      {
        title: "Crossplatform",
        icon: crossPlatform,
      },
      {
        title: "Web design",
        icon: wDesign,
      },
      {
        title: "Mobile design",
        icon: mDesign,
      },
    ],
  },
  {
    title: { img: iman, isString: true },
    path: "iman",
    color_title: "#01CAB0",
    badge_icon: { img: imanIcon, title: "Finance", bg: "#CCF4EF" },
    description:
      "Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.",
    branch: "What we did?",
    reverse: true,
    img: imanImg,
    cards: [
      {
        title: "Website",
        icon: website,
      },
      {
        title: "Admin panel",
        icon: adminPanel,
      },
      {
        title: "Crossplatform",
        icon: crossPlatform,
      },
    ],
  },
];
