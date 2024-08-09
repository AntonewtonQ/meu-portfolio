import {
  Accessibility,
  Book,
  Crop,
  Facebook,
  Github,
  Instagram,
  LampDesk,
  Linkedin,
  Pencil,
  Rocket,
} from "lucide-react";
import logo from "../assets/avatar.png";

export const navItems = [
  { label: "Sobre", href: "#" },
  { label: "Projetos", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const socialLinks = [
  {
    icon: <Instagram />,
    label: "Instagram",
    href: "#",
  },
  {
    icon: <Facebook />,
    label: "Facebook",
    href: "#",
  },
  {
    icon: <Github />,
    label: "Github",
    href: "#",
  },
  {
    icon: <Linkedin />,
    label: "Linkedin",
    href: "#",
  },
];

export const ServiceData = [
  {
    icon: Crop,
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: logo,
  },
  {
    icon: Pencil,
    title: "Branding",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: logo,
  },
  {
    icon: LampDesk,
    title: "Design",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: logo,
  },
  {
    icon: Book,
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: logo,
  },
  {
    icon: Accessibility,
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: logo,
  },
  {
    icon: Rocket,
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: logo,
  },
];
