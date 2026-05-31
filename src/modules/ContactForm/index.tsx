import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Send } from 'lucide-react';
import { apiService } from '../../services/api';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 🔄 Endpoint futuro será conectado aqui (NestJS API)
    await apiService.sendMessage(formData);
    alert('Mensagem enviada com sucesso! (Simulação)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#F4F4F4] text-[#0A231C]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A231C] mb-4">Vamos conversar?</h2>
          <p className="text-gray-600">
            Preencha o formulário abaixo para orçamentos, dúvidas ou apenas para dizer um olá.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all bg-gray-50"
                placeholder="Seu nome completo"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all bg-gray-50"
                placeholder="seu@email.com"
              />
            </div>
          </div>
          
          <div className="flex flex-col mb-8">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#F26419] focus:border-transparent outline-none transition-all bg-gray-50 resize-none"
              placeholder="Como posso te ajudar a contar sua história?"
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" variant="primary" className="flex items-center gap-2">
              <span>Enviar Mensagem</span>
              <Send size={18} />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
