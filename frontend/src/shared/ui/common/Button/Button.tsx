import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "default";

interface ButtonProps {
  variant?: ButtonVariant;
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function getClass({ variant = "primary", disabled = false }: ButtonProps) {
  const defaultClass =
    "flex flex-row justify-center items-center rounded gap-2 px-6 py-2 cursor-pointer transition-shadow";

  let additional = "";

  if (disabled) {
    additional = "bg-tsecondary";
  } else if (variant == "primary") {
    additional =
      "bg-primary text-tblack active:ring-4 ring-primary/50 hover:bg-primary-hover";
  } else if (variant == "secondary") {
    additional =
      "border-2 text-primary active:ring-4 ring-primary/50 hover:shadow-lg shadow-primary-shadow";
  } else if (variant == "danger") {
    additional =
      "bg-accent active:ring-4 ring-accent/50 hover:bg-(--accent-hover)";
  }
  return `${defaultClass} ${additional}`;
}

function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type={props.type ?? "button"}
      className={getClass(props)}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
