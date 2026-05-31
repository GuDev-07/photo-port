# 📸 Landing Page

> Site profissional de portfólio e contato para fotógrafo especializado em fotografias de Gramado

---

## Visão geral

Landing page moderna desenvolvida em React com foco em performance visual e experiência do usuário. O conteúdo é centralizado em um único arquivo de dados, facilitando atualizações de texto, fotos e informações de contato sem precisar mexer nos componentes.

---

## Tecnologias utilizadas

| React | Interface e componentes |
| TypeScript | Tipagem estática |
| Vite | Build e dev server |
| TailwindCSS | Estilização utilitária |

---

## Estrutura do projeto

```
src/
├── assets/
│   ├── images.ts
│   └── portfolio/
│       ├── ensaios/
│       ├── casais/
│       └── familias/
│
├── components/
│   ├── Navbar/                    # Barra de navegação com menu mobile
│   ├── Footer/                    # Rodapé com links e contatos
│   ├── Button/                    # Botão reutilizável
│   └── OptimizedImage/            # Componente de imagem com lazy loading e fade-in
│
├── modules/
│   ├── Hero/                      # Seção inicial com foto de destaque e CTA
│   ├── PortfolioGallery/          # Galeria com filtro por categoria
│   ├── FeedbackSection/           # Depoimentos de clientes
│   └── ContactForm/               # Formulário de contato integrado ao EmailJS
│
├── pages/
│   └── Home/                      # Orquestrador — monta todas as seções
│
├── services/
│   └── api.ts                     # Integração com EmailJS
│
├── hooks/
│   └── useScrollAnimation.ts      # Hook de animação com Intersection Observer
│
├── types/
│   └── index.ts                   # Interfaces TypeScript do projeto
│
├── constants.tsx                  # ⭐ Fonte central de todo o conteúdo do site
├── App.tsx                        # Ponto de entrada React
├── main.tsx                       # Bootstrap da aplicação
└── index.css                      # Estilos globais, Tailwind e fontes
```

---

## Como rodar o projeto

### Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn
