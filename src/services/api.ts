// Camada preparada para comunicação com API (NestJS)
// Não implementar API ainda, apenas a estrutura.

export const apiService = {
  sendMessage: async (data: any) => {
    // 🔄 Endpoint futuro será conectado aqui
    console.log('Enviando para API:', data);
    return Promise.resolve({ success: true });
  }
};
