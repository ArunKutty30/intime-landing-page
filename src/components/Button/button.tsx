import React, { ButtonHTMLAttributes, ReactNode } from "react";

import "./button.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

const Button: React.FC<IButton> = ({ children, variant = "primary", ...rest }) => {
  const getClassName = (type: string) => {
    switch (type) {
      case "secondary":
        return "btn-secondary";
      default:
        return "btn-primary";
    }
  };

  return (
    <button className={getClassName(variant)} {...rest}>
      {children}
    </button>
  );
};

export default Button;