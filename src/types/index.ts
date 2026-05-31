export interface NavLink {
  label: string;
  href: string;
}

export interface GalleryItem {
  id: string;
  category: "family" | "couples" | "individual";
  src: string;
  alt: string;
}

export interface FeedbackItem {
  id: string;
  name: string;
  comment: string;
  role?: string;
}

export interface PortfolioData {
  brand: {
    logoText: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    ctaText: string;
  };
  gallery: {
    title: string;
    description: string;
    items: GalleryItem[];
  };
  feedbacks: FeedbackItem[];
  footer: {
    copyright: string;
    contacts: {
      whatsapp: string;
      instagram: string;
      email?: string;
    };
  };
}
