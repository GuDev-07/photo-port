import { ArrowUp, Camera, Instagram, Mail } from "lucide-react";
import React from "react";
import { NAV_LINKS, PORTFOLIO_DATA } from "../../constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { buildWhatsAppUrl } from "../../shared/utils/whatsapp";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ delay: 200 });
  const { footer, brand } = PORTFOLIO_DATA;
  const whatsappLink = buildWhatsAppUrl(footer.contacts.whatsapp, "");
  const instagramHandle = footer.contacts.instagram.replace("@", "");
  const instagramLink = `https://instagram.com/${instagramHandle}`;
  const quickLinks = NAV_LINKS.filter((link) => link.href !== "#home");

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={ref}
      className={`relative bg-[#061511] text-gray-200 py-16 border-t border-gray-800/60 animate-fade-in ${isVisible ? "visible" : ""}`}
    >
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
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4 text-[#F6AE2D]" />
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
              <li>Gramado - RS</li>
              <li>Seg a Dom, 9h às 19h</li>
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

        <div className="h-px bg-linear-to-r from-transparent via-gray-800 to-transparent" />

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-xs text-gray-500 text-center">
          <p>{footer.copyright}</p>
        </div>
      </div>

      <button
        onClick={handleScrollTop}
        className="group fixed md:absolute right-6 bottom-6 md:bottom-auto md:top-6 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-full border border-white/20 shadow-lg backdrop-blur transition cursor-pointer"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        <span className="text-xs font-medium hidden sm:inline">Topo</span>
      </button>
    </footer>
  );
};
