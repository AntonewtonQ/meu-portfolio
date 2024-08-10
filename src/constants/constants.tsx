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
import logo from "../assets/back.png";

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
    title: "Desenvolvimento",
    content:
      "Desenvolvemos soluções web e mobile de alta performance, utilizando as tecnologias mais avançadas e as melhores práticas do mercado.",
    backgroundImage: logo,
  },
  {
    icon: LampDesk,
    title: "Design",
    content:
      "Criamos designs modernos e funcionais, garantindo uma experiência de usuário intuitiva e visualmente agradável.",
    backgroundImage: logo,
  },
  {
    icon: Book,
    title: "Seo",
    content:
      "Otimização para motores de busca para garantir que seu site tenha o melhor desempenho nos resultados de pesquisa.",
    backgroundImage: logo,
  },
  {
    icon: Accessibility,
    title: "Gerenciamento",
    content:
      "Oferecemos serviços de gerenciamento de projetos para garantir que tudo seja entregue no prazo e dentro do orçamento.",
    backgroundImage: logo,
  },
  {
    icon: Rocket,
    title: "Produção",
    content:
      "Damos vida às suas ideias, desde a concepção até a implementação final, garantindo a entrega de produtos de alta qualidade.",
    backgroundImage: logo,
  },
];
