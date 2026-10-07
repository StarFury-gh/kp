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
    const baseClasses =
      "w-full rounded-lg px-4 py-2 text-sm outline-none transition-all duration-200 bg-bg-sec text-tprimary border-2 border-l-primary border-bg-sec focus:border-primary placeholder:text-[--text-secondary]";
    const stateClasses = error
      ? "border-[--red] focus:border-[--red-hover] focus:shadow-[0_0_0_2px_var(--shadow-color)]"
      : "focus:border-[--green] focus:shadow-[0_0_0_2px_var(--shadow-color)]";
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

    const inputClasses =
      `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`.trim();

    const renderInput = () => (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={id} className="text-xs text-tsecondary">
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
            className={inputClasses}
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
            className={inputClasses}
          />
        )}
        {error && <span className="text-xs text-[--red]">{error}</span>}
      </div>
    );

    return renderInput();
  },
);

export default Input;
