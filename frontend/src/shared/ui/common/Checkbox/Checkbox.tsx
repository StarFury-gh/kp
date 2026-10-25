import type { ChangeEvent } from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

/* Видовой квадрат: не отмечен — серая рамка, отмечен — зелёный с галочкой.
   Переключение мгновенное и через overflow-hidden, чтобы подсветка не проступала
   по кадрам прозрачности. */
function Checkbox({ checked, onChange, disabled = false }: CheckboxProps) {
  return (
    <span
      className={`relative inline-flex size-4 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-sm border transition-colors duration-150 ${
        checked ? "border-primary bg-primary" : "border-border bg-bg-sec"
      } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
        disabled={disabled}
        className="sr-only"
      />
      {checked && (
        <img
          src="/icons/CheckboxChecked.svg"
          alt=""
          className="absolute inset-0 size-full"
        />
      )}
    </span>
  );
}

export default Checkbox;
