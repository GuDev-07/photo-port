// src/utils/masks.ts
export type MaskPattern = "phone";

const onlyDigits = (value: string) => value.replace(/\D+/g, "");

export function applyMask(value: string, mask: MaskPattern): string {
  const digits = onlyDigits(value);

  switch (mask) {
    case "phone": {
      const d = digits.slice(0, 11);
      if (d.length <= 2) return d.length ? `(${d}` : "";
      if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
      if (d.length <= 10)
        return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
      return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
    }

    default:
      return value;
  }
}
