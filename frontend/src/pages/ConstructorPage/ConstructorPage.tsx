import useComponents from "@/shared/hooks/useComponents";
import {
  PcComponentsList,
  CurrentBuild,
  BuildSteps,
  CatalogFilters,
} from "@/shared/ui";
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
  const [filters, setFilters] = useState({ type: currentStep });

  const onStepChange = (step: ComponentType) => {
    setCurrentStep(step);
    setFilters((prev) => ({ ...prev, type: step }));
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
    <div className="grid grid-cols-4 items-start gap-4 p-4">
      <CatalogFilters filters={filters} onFiltersChange={() => setFilters} />
      <div className="col-span-2">
        {/* items */}
        <BuildSteps
          steps={buildingSteps}
          current={currentStep}
          onStepChange={onStepChange}
        />
        <div>
          <PcComponentsList
            components={components}
            onComponentAdd={onAddComponent}
            filters={filters}
          />
        </div>
      </div>
      {/* current config */}
      <div className="rounded-lg border border-border bg-bg-sec p-4">
        <h3 className="text-lg font-semibold text-tprimary">
          Текущая конфигурация
        </h3>
        <CurrentBuild components={currentComponents} />
      </div>
    </div>
  );
}

export default ConstructorPage;
