import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyle =
    "px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out";

  const variants = {
    primary:
      "bg-[#E87A3C] text-white hover:bg-[#D3662F] shadow-lg shadow-[#E87A3C]/30", // Laranja suave
    secondary:
      "bg-[#F6AE2D] text-[#0A231C] hover:bg-[#E09A20] shadow-lg shadow-[#F6AE2D]/30", // Amarelo
    outline:
      "border-2 border-[#E87A3C] text-[#E87A3C] hover:bg-[#E87A3C] hover:text-white",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
