import { PORTFOLIO_DATA } from "../constants";
import { buildWhatsAppUrl } from "../shared/utils/whatsapp";

interface MessageData {
  name: string;
  phone: string;
  message: string;
}

export const apiService = {
  sendMessage: (data: MessageData): Promise<void> => {
    const url = buildWhatsAppUrl(
      PORTFOLIO_DATA.footer.contacts.whatsapp,
      data.message,
    );

    window.open(url, "_blank", "noopener,noreferrer");
    return Promise.resolve();
  },
};
