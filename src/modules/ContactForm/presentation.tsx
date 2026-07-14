import { Send } from "lucide-react";
import React from "react";
import { Button } from "../../components/Button/presentation";
import { useContactForm } from "../../hooks/useContactForm";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { applyMask } from "../../shared/utils/masks";

export const ContactForm: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ delay: 100 });

  const { form, loading, status, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-24 bg-[#F4F4F4] text-[#0A231C] ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A231C] mb-4">
            Vamos conversar?
          </h2>
          <p className="text-gray-600">
            Preencha o formulário abaixo para orçamentos, dúvidas ou apenas para
            dizer um olá.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => handleChange("name")(e.target.value)}
                required
                className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all bg-gray-50"
                placeholder="Seu nome completo"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={(e) =>
                  handleChange("phone")(applyMask(e.target.value, "phone"))
                }
                required
                className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all bg-gray-50"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>

          <div className="flex flex-col mb-8">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700 mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={(e) => handleChange("message")(e.target.value)}
              required
              rows={5}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all bg-gray-50 resize-none"
              placeholder="Como posso te ajudar a contar sua história?"
            />
          </div>

          {status === "success" && (
            <p className="text-green-600 text-sm mb-4">
              Mensagem enviada! Entrarei em contato em breve.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm mb-4">
              Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
            </p>
          )}

          <div className="flex justify-end">
            <Button
              type="submit"
              variant="primary"
              className="flex items-center gap-2"
              disabled={loading}
            >
              <span>{loading ? "Enviando..." : "Enviar Mensagem"}</span>
              <Send size={18} />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
