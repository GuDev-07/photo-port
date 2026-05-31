import { portfolioImages } from "./assets/images";
import { NavLink, PortfolioData } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#home" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Feedbacks", href: "#feedbacks" },
  { label: "Contato", href: "#contact" },
];

export const PORTFOLIO_DATA: PortfolioData = {
  brand: {
    logoText: "mkd", // 🔄 Logo pode ser alterada aqui
  },
  hero: {
    greeting: "Prazer, me chamo",
    title: "Vinícius Oller", // 🔄 Texto do header pode ser alterado aqui
    subtitle: `Sou um fotógrafo apaixonado por contar histórias através das minhas lentes! Confira meu trabalho`,
    ctaText: "Acessar portfólio",
  },
  gallery: {
    title: "MEU PORTFÓLIO", // 🔄 Título do portfólio pode ser alterado aqui
    description:
      "Foram diversas histórias capturadas através das minhas lentes. De ensaios á famílias, aqui você encontra um pouco do meu trabalho e da minha visão fotográfica...",
    items: [
      {
        id: "c1",
        category: "couples",
        src: portfolioImages.couples[0],
        alt: "Casal ao pôr do sol",
      },
      {
        id: "c2",
        category: "couples",
        src: portfolioImages.couples[1],
        alt: "Casal abraçado",
      },
      {
        id: "c3",
        category: "couples",
        src: portfolioImages.couples[2],
        alt: "Casal sorrindo",
      },
      {
        id: "f1",
        category: "family",
        src: portfolioImages.family[0],
        alt: "Família no parque",
      },
      {
        id: "f2",
        category: "family",
        src: portfolioImages.family[1],
        alt: "Mãe e filho",
      },
      {
        id: "i1",
        category: "individual",
        src: portfolioImages.individual[0],
        alt: "Ensaio individual ao ar livre",
      },
      {
        id: "i2",
        category: "individual",
        src: portfolioImages.individual[1],
        alt: "Retrato editorial",
      },
      {
        id: "i3",
        category: "individual",
        src: portfolioImages.individual[2],
        alt: "Retrato profissional",
      },
    ],
  },
  feedbacks: [
    {
      id: "1",
      name: "Ana & Lucas",
      comment:
        "As fotos ficaram simplesmente perfeitas! Conseguiram captar toda a emoção do nosso dia de uma forma tão natural e leve. Recomendamos de olhos fechados!",
      role: "Casamento",
    },
    {
      id: "2",
      name: "Família Silva",
      comment:
        "Fizemos um ensaio de família e o resultado foi incrível. As crianças ficaram super à vontade e as fotos transmitem exatamente a nossa essência.",
      role: "Ensaio Família",
    },
    {
      id: "3",
      name: "Mariana Costa",
      comment:
        "Profissionalismo impecável. Desde o primeiro contato até a entrega das fotos, tudo foi feito com muito carinho e atenção aos detalhes.",
      role: "Ensaio Individual",
    },
  ],
  footer: {
    copyright:
      "© 2026 Vinícius Oller Fotografia. Todos os direitos reservados.", // 🔄 Texto do footer pode ser alterado aqui
    contacts: {
      whatsapp: "+55 12 98888-9999",
      instagram: "@viniciusoller.foto",
      email: "contato@viniciusoller.com",
    },
  },
};
