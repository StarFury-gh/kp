import type { ComponentType } from "@/shared/types";

interface BuildStepsProps {
  steps: ComponentType[];
  current: ComponentType;
  onStepChange: (s: ComponentType) => void;
}

function BuildSteps(props: BuildStepsProps) {
  return (
    <div className="flex flex-row justify-around">
      {props.steps.map((step) => {
        return (
          <div
            onClick={() => props.onStepChange(step)}
            className={`px-4 py-2 rounded-full flex flex-row items-center justify-center transition-colors hover:border-primary border-2 border-primary/30 cursor-pointer ${step === props.current ? "bg-primary" : "bg-(--bg-secondary)"}`}
          >
            <p
              className={`${step === props.current ? "text-tblack" : "text-tsecondary"}`}
            >
              {step}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default BuildSteps;
