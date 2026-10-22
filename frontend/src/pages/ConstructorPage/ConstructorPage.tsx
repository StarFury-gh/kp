import useComponents from "@/shared/hooks/useComponents";
import { PcComponentsList, CurrentBuild, BuildSteps } from "@/shared/ui";
import type { Component, ComponentType } from "@/shared/types";
import { useState } from "react";

const buildingSteps: ComponentType[] = [
  "видеокарта",
  "процессор",
  "блок питания",
  "жёсткий диск",
  "оперативная память",
];

function ConstructorPage() {
  const { components } = useComponents();

  const [currentComponents, setCurrentComponents] = useState<Component[]>([]);
  const [currentStep, setCurrentStep] = useState<ComponentType>(
    buildingSteps[0],
  );

  const onStepChange = (step: ComponentType) => {
    setCurrentStep(step);
  };

  const onAddComponent = (c: Component) => {
    setCurrentComponents((prev) => {
      const existingIndex = prev.findIndex((comp) => comp.type === c.type);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = c;
        return updated;
      }
      return [...prev, c];
    });
  };

  return (
    <div className="grid grid-cols-3 p-4 gap-4">
      <div className="col-span-2">
        {/* items */}
        <BuildSteps
          steps={buildingSteps}
          current={currentStep}
          onStepChange={onStepChange}
        ></BuildSteps>
        <div>
          <PcComponentsList
            components={components}
            onComponentAdd={onAddComponent}
            filters={{
              type: currentStep,
            }}
          />
        </div>
      </div>
      {/* current config */}
      <div className="rounded-lg border border-(--border-color) bg-(--bg-secondary) p-4">
        <h3 className="text-lg font-semibold text-(--text-primary)">
          Текущая конфигурация
        </h3>
        <CurrentBuild components={currentComponents} />
      </div>
    </div>
  );
}

export default ConstructorPage;
