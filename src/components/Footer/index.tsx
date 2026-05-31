import {
  ArrowUp,
  Camera,
  FileDown,
  Instagram,
  Mail,
  MessageCircle,
} from "lucide-react";
import React from "react";
import { NAV_LINKS, PORTFOLIO_DATA } from "../../constants";

export const Footer: React.FC = () => {
  const { footer, brand } = PORTFOLIO_DATA;
  const whatsappLink = `https://wa.me/${footer.contacts.whatsapp.replace(/\D/g, "")}`;
  const instagramHandle = footer.contacts.instagram.replace("@", "");
  const instagramLink = `https://instagram.com/${instagramHandle}`;
  const quickLinks = NAV_LINKS.filter((link) => link.href !== "#home");
  const pdfHref = "/portfolio.pdf";

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#061511] text-gray-200 py-16 border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-lg shadow-black/20 animate-pulse">
                <Camera className="h-5 w-5 text-[#F6AE2D]" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                {brand.logoText}
              </h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Gostou? Acesse meu portfólio completo! 👇🏻
            </p>
            <a
              href={pdfHref}
              download
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#F26419] hover:bg-[#d95612] px-4 py-2 rounded-full shadow-lg shadow-[#F26419]/30 transition-colors"
            >
              <FileDown className="h-4 w-4" />
              Baixar portfólio (PDF)
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[#F6AE2D]" />
                <a
                  href={whatsappLink}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: {footer.contacts.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-[#F6AE2D]" />
                <a
                  href={instagramLink}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram: {footer.contacts.instagram}
                </a>
              </li>
              {footer.contacts.email && (
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#F6AE2D]" />
                  <a
                    href={`mailto:${footer.contacts.email}`}
                    className="hover:text-white transition-colors"
                  >
                    E-mail: {footer.contacts.email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
              Atendimento
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Gramado - RS </li>
              <li>Seg á Dom, 9h - 19h</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-xs text-gray-500 text-center">
          <p>{footer.copyright}</p>
        </div>
      </div>

      <button
        onClick={handleScrollTop}
        className="group fixed md:absolute right-6 bottom-6 md:bottom-auto md:top-6 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-full border border-white/20 shadow-lg backdrop-blur transition"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        <span className="text-xs font-medium hidden sm:inline">Topo</span>
      </button>
    </footer>
  );
};
