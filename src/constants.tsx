import { portfolioImages } from "./assets/images";
import { GalleryItem, NavLink, PortfolioData } from "./types";

const toGalleryItem = (
  image: { thumb: string; full: string },
  id: string,
  category: GalleryItem["category"],
  alt: string,
): GalleryItem => ({
  id,
  category,
  src: image.thumb,
  fullSrc: image.full,
  alt,
});

const coupleGalleryItems: GalleryItem[] = portfolioImages.couples.map(
  (image, index) =>
    toGalleryItem(
      image,
      `c${index + 1}`,
      "couples",
      `Casal ${String(index + 1).padStart(2, "0")}`,
    ),
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
      toGalleryItem(
        portfolioImages.couples[11],
        "feat1",
        "couples",
        "Casal em destaque",
      ),
      toGalleryItem(
        portfolioImages.couples[13],
        "feat2",
        "couples",
        "Casal em destaque 2",
      ),
    ],
    items: [
      ...coupleGalleryItems,
      toGalleryItem(portfolioImages.family[0], "f1", "family", "Família no parque"),
      toGalleryItem(portfolioImages.family[1], "f2", "family", "Mãe e filho"),
      toGalleryItem(
        portfolioImages.family[2],
        "f3",
        "family",
        "Família em ensaio",
      ),
      toGalleryItem(
        portfolioImages.family[3],
        "f4",
        "family",
        "Família em momento especial",
      ),
      toGalleryItem(
        portfolioImages.family[4],
        "f5",
        "family",
        "Família em ensaio externo",
      ),
      toGalleryItem(
        portfolioImages.family[5],
        "f6",
        "family",
        "Família reunida",
      ),
      toGalleryItem(
        portfolioImages.individual[0],
        "i1",
        "individual",
        "Ensaio individual ao ar livre",
      ),
      toGalleryItem(
        portfolioImages.individual[1],
        "i2",
        "individual",
        "Retrato editorial",
      ),
      toGalleryItem(
        portfolioImages.individual[2],
        "i3",
        "individual",
        "Ensaio individual",
      ),
      toGalleryItem(
        portfolioImages.individual[3],
        "i4",
        "individual",
        "Retrato individual",
      ),
      toGalleryItem(
        portfolioImages.individual[4],
        "i5",
        "individual",
        "Ensaio individual externo",
      ),
      toGalleryItem(
        portfolioImages.individual[5],
        "i6",
        "individual",
        "Retrato artístico",
      ),
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
