import { forwardRef, useId } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onError?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: string;
  name?: string;
  disabled?: boolean;
  error?: string;
  multiline?: boolean;
  rows?: number;
  className?: string;
}

const fieldBase =
  "w-full rounded-lg border border-border bg-bg-sec px-4 text-sm text-tprimary outline-none transition-colors duration-200 placeholder:text-tsecondary";
const stateClasses = (error?: string) =>
  error
    ? "border-accent hover:border-accent-hover"
    : "focus:border-primary";
const disabledClasses = "opacity-50 cursor-not-allowed";

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      type = "text",
      name,
      disabled = false,
      error,
      multiline = false,
      rows = 4,
      className = "",
    },
    ref,
  ) => {
    const id = useId();

    const classes = (additional: string) =>
      `${fieldBase} ${stateClasses(error)} ${additional} ${className}`.trim();

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={id} className="text-sm text-tprimary">
            {label}
          </label>
        )}
        {multiline ? (
          <textarea
            id={id}
            name={name}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            rows={rows}
            className={classes(disabled ? disabledClasses : "resize-none py-3")}
          />
        ) : (
          <input
            id={id}
            name={name}
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={classes(disabled ? disabledClasses : "h-12")}
          />
        )}
        {error && <span className="text-xs text-accent">{error}</span>}
      </div>
    );
  },
);

export default Input;
