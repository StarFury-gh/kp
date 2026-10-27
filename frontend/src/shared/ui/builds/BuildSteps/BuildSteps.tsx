import type { ComponentType } from "@/shared/types";

interface BuildStepsProps {
  steps: ComponentType[];
  current: ComponentType;
  onStepChange: (s: ComponentType) => void;
}

const stepLabels: Record<ComponentType, string> = {
  видеокарта: "Видеокарта",
  процессор: "Процессор",
  "блок питания": "Блок питания",
  "жёсткий диск": "Накопитель",
  "оперативная память": "ОЗУ",
};

function BuildSteps(props: BuildStepsProps) {
  return (
    <div className="mb-4 grid grid-cols-5 gap-2">
      {props.steps.map((step) => {
        const isActive = step === props.current;
        return (
          <button
            key={step}
            onClick={() => props.onStepChange(step)}
            className={`flex h-14 flex-col items-start justify-center rounded-lg border px-3 text-left transition-colors ${
              isActive
                ? "border-primary bg-bg-sec"
                : "border-border bg-bg-sec hover:border-primary/50"
            }`}
          >
            <span
              className={`text-xs ${
                isActive ? "text-primary" : "text-tsecondary"
              }`}
            >
              {isActive ? "Выбирается" : "Этап"}
            </span>
            <span
              className={`text-sm font-medium ${
                isActive ? "text-tprimary" : "text-tsecondary"
              }`}
            >
              {stepLabels[step]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default BuildSteps;
