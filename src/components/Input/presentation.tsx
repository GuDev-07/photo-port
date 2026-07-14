import React, { useMemo, useState } from "react";
import { applyMask, MaskPattern } from "../../utils/maskUtils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  mask?: MaskPattern;
  onChangeText?: (masked: string, unmasked: string) => void;
  secureTextEntry?: boolean;
}

const EyeOpenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M3 4.5 21 19.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M10.6 10.7a2.6 2.6 0 0 0 3.6 3.6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M9.2 5.4C10.1 5.1 11 5 12 5c6.5 0 10 7 10 7a18.8 18.8 0 0 1-4.2 5.1"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.1 7.1A18.3 18.3 0 0 0 2 12s3.5 7 10 7c1.3 0 2.5-.2 3.5-.6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Input({
  label,
  error,
  className,
  mask,
  onChangeText,
  secureTextEntry,
  type,
  onChange,
  value,
  defaultValue,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = !!secureTextEntry;

  const computedType = useMemo(() => {
    if (!isPassword) return type ?? "text";
    return showPassword ? "text" : "password";
  }, [isPassword, showPassword, type]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (mask) {
      const masked = applyMask(raw, mask);
      const unmasked = raw.replace(/\D+/g, "");
      onChangeText?.(masked, unmasked);
      onChange?.({
        ...e,
        target: { ...e.target, value: masked },
      } as React.ChangeEvent<HTMLInputElement>);
      return;
    }
    onChangeText?.(raw, raw.replace(/\D+/g, ""));
    onChange?.(e);
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div
        className={`h-14 flex items-center border rounded-lg px-4 bg-white ${
          error ? "border-red-500" : "border-gray-300"
        } ${className ?? ""}`}
      >
        <input
          {...props}
          id={props.id}
          type={computedType}
          className="flex-1 bg-transparent text-base outline-none"
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
        />
        {isPassword && (
          <button
            type="button"
            className="ml-2 cursor-pointer text-gray-400 flex items-center"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showPassword ? <EyeOffIcon /> : <EyeOpenIcon />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
