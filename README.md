# 📸 Vinícius Oller — Landing Page

> Site profissional de portfólio e contato para fotógrafo especializado em casais, famílias e ensaios em Gramado - RS.

---

## Visão geral

Landing page moderna desenvolvida em React com foco em performance visual e experiência do usuário. O conteúdo é centralizado em um único arquivo de dados, facilitando atualizações de texto, fotos e informações de contato sem precisar mexer nos componentes.

---

## Tecnologias utilizadas

| Tecnologia  | Finalidade              |
| ----------- | ----------------------- |
| React 18    | Interface e componentes |
| TypeScript  | Tipagem estática        |
| Vite        | Build e dev server      |
| TailwindCSS | Estilização utilitária  |

---

## Estrutura do projeto

src/
├── assets/
│ ├── images.ts # Índice central de todas as imagens
│ └── portfolio/
│ ├── couples/ # Fotos de casais
│ ├── family/ # Fotos de famílias
│ └── individual/ # Ensaios individuais
│
├── components/
│ ├── Button/ # Botão reutilizável com variantes primary/outline
│ └── Input/ # Input com suporte a máscara e toggle de senha
│
├── modules/
│ ├── Hero/ # Seção inicial com foto de fundo e CTA
│ ├── Navbar/ # Barra de navegação com menu mobile
│ ├── PortfolioGallery/ # Galeria com filtro por categoria e lightbox
│ ├── FeedbackSection/ # Depoimentos — grid no desktop, carrossel no mobile
│ ├── ContactForm/ # Formulário de contato integrado ao WhatsApp
│ └── Footer/ # Rodapé com links, contatos e botão de topo
│
├── pages/
│ └── Home/ # Orquestrador — monta todas as seções
│
├── services/
│ └── apiWhatsApp.ts # Integração com WhatsApp API
│
├── hooks/
│ ├── useScrollAnimation.ts # Animações de entrada com Intersection Observer
│ ├── useCarousel.ts # Lógica de carrossel com auto-avanço
│ ├── useContactForm.ts # Estado e submit do formulário de contato
│ ├── useNavbar.ts # Toggle do menu mobile
│ └── index.ts # Barrel export dos hooks
│
├── utils/
│ └── masks.ts # Máscara de telefone para o formulário
│
├── types/
│ └── index.ts # Interfaces TypeScript: GalleryItem, FeedbackItem, PortfolioData
│
├── constants.tsx # Fonte central de todo o conteúdo do site
├── App.tsx # Ponto de entrada React
├── main.tsx # Bootstrap da aplicação
└── index.css # Estilos globais, Tailwind, fontes e classes de animação
