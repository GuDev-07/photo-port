import { portfolioImages } from "./assets/images";
import { GalleryItem, NavLink, PortfolioData } from "./types";

const coupleGalleryItems: GalleryItem[] = portfolioImages.couples.map(
  (src, index) => ({
    id: `c${index + 1}`,
    category: "couples",
    src,
    alt: `Casal ${String(index + 1).padStart(2, "0")}`,
  }),
);

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#home" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Feedbacks", href: "#feedbacks" },
  { label: "Contato", href: "#contact" },
];

export const PORTFOLIO_DATA: PortfolioData = {
  brand: {
    logoText: "Vinícius Oller",
  },
  hero: {
    greeting: "Prazer, me chamo",
    title: "Vinícius Oller",
    subtitle: `Conto histórias através das lentes.`,
    ctaText: "Acessar portfólio",
  },
  gallery: {
    title: "MEU PORTFÓLIO",
    description:
      "Foram diversas experiências registradas nos últimos anos. De ensaios a famílias, aqui você encontra um pouco do meu trabalho e da minha visão fotográfica.",
    featuredItems: [
      {
        id: "feat1",
        category: "couples",
        src: portfolioImages.couples[11],
        alt: "Casal em destaque",
      },
      {
        id: "feat2",
        category: "couples",
        src: portfolioImages.couples[13],
        alt: "Casal em destaque 2",
      },
    ],
    items: [
      ...coupleGalleryItems,
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
        id: "f3",
        category: "family",
        src: portfolioImages.family[2],
        alt: "Família em ensaio",
      },
      {
        id: "f4",
        category: "family",
        src: portfolioImages.family[3],
        alt: "Família em momento especial",
      },
      {
        id: "f5",
        category: "family",
        src: portfolioImages.family[4],
        alt: "Família em ensaio externo",
      },
      {
        id: "f6",
        category: "family",
        src: portfolioImages.family[5],
        alt: "Família reunida",
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
        alt: "Ensaio individual",
      },
      {
        id: "i4",
        category: "individual",
        src: portfolioImages.individual[3],
        alt: "Retrato individual",
      },
      {
        id: "i5",
        category: "individual",
        src: portfolioImages.individual[4],
        alt: "Ensaio individual externo",
      },
      {
        id: "i6",
        category: "individual",
        src: portfolioImages.individual[5],
        alt: "Retrato artístico",
      },
    ],
  },
  feedbacks: [
    {
      id: "1",
      name: "Isabella & Enzo",
      comment:
        "Ai Vini, encantada em CADA detalhe! Uma mais linda que a outra! Obrigada por todo carinho, e por estar presente nesse momento tão importante em minha vida! Fiquei muito emocionada! De verdade, você é uma pessoa e profissional INCRÍVEL. Não tô nem acreditando nesse presentão.",
      role: "Casal",
    },
    {
      id: "2",
      name: "Hadassa Moreira",
      comment:
        "Com certeza indicaremos muito seu trabalho! Como faz pra parar de olhar as fotos? Já olhei 196363838474940562 vezes desde que tu mandou. Tô apaixonada. Parece cena de filme. Meu Deus.",
      role: "Família",
    },
    {
      id: "3",
      name: "Raíssa Souza",
      comment:
        "Só um feedback positivo: eu entrei em contato com outros fotógrafos também para conhecer o trabalho... você foi super atencioso e o único que se preocupou em entender todas as minhas necessidades. Parabéns.",
      role: "Individual",
    },
  ],
  footer: {
    copyright:
      "© 2026 Vinícius Oller Fotografia. Todos os direitos reservados.",
    contacts: {
      whatsapp: "+55 54 9941-6395",
      instagram: "@viniciusollerfotografo",
      email: "contato@viniciusoller.com",
    },
  },
};
