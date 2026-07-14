import { useState } from "react";
import { apiService } from "../services/apiWhatsApp";

interface FormState {
  name: string;
  phone: string;
  message: string;
}

export function useContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    try {
      await apiService.sendMessage(form);
      setStatus("success");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, status, handleChange, handleSubmit };
}
