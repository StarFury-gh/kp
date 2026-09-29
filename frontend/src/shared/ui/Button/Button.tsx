import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  children?: ReactNode;
}

function getClass(variant: ButtonVariant | undefined) {
  const defaultClass =
    "flex flex-row gap-2 px-4 py-1 text-tprimary cursor-pointer";
  let additional = "";
  if (variant == "primary" || !variant) {
    additional =
      "bg-primary rounded-full hover:bg-primary-hover transition-colors duration-200 shadow-lg shadow-primary-shadow";
  } else if (variant == "secondary") {
    additional =
      "rounded-full border-2 border-primary hover:bg-primary transition-all duration-200";
  }
  return `${defaultClass} ${additional}`;
}

function Button(props: ButtonProps) {
  return <button className={getClass(props.variant)}>{props.children}</button>;
}

export default Button;
