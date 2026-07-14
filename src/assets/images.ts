export interface OptimizedImage {
  thumb: string;
  full: string;
}

const imageBase = `${import.meta.env.BASE_URL}images`;

function imagePair(folder: string, name: string): OptimizedImage {
  return {
    thumb: `${imageBase}/${folder}/${name}-thumb.webp`,
    full: `${imageBase}/${folder}/${name}-full.webp`,
  };
}

export const heroBackground = `${imageBase}/hero.webp`;

export const portfolioImages = {
  couples: [
    "casal1",
    "casal2",
    "casal3",
    "casal4",
    "casal5",
    "casal6",
    "casal7",
    "casal8",
    "casal9",
    "casal10",
    "casal11",
    "casal12",
    "casal13",
    "casal14",
  ].map((name) => imagePair("casais", name)),
  family: ["familia1", "familia2", "familia3", "familia4", "familia5", "familia6"].map(
    (name) => imagePair("familia", name),
  ),
  individual: [
    "ensaio1",
    "ensaio2",
    "ensaio3",
    "ensaio4",
    "ensaio5",
    "ensaio6",
  ].map((name) => imagePair("ensaios", name)),
} as const;
