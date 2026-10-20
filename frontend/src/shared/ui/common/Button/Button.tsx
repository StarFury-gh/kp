import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  notRounded?: boolean;
}

function getClass(
  variant: ButtonVariant | undefined,
  notRounded: boolean | undefined,
) {
  const defaultClass =
    "flex flex-row justify-center gap-2 px-4 py-1 text-tprimary cursor-pointer active:ring-4 ring-primary/50 transition-shadow";
  let additional = "";
  if (variant == "primary" || !variant) {
    additional =
      "bg-primary hover:bg-primary-hover transition-colors duration-200 shadow-lg shadow-primary-shadow";
  } else if (variant == "secondary") {
    additional =
      "border-2 border-primary hover:bg-primary transition-all duration-200";
  }

  // if rounded
  if (!notRounded) {
    additional += " rounded-full";
  }

  return `${defaultClass} ${additional}`;
}

function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type={props.type ?? "button"}
      className={getClass(props.variant, props.notRounded)}
    >
      {props.children}
    </button>
  );
}

export default Button;
