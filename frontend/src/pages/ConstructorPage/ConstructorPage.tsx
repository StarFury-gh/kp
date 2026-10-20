import useComponents from "@/shared/hooks/useComponents";
import { PcComponentsList, CurrentBuild } from "@/shared/ui";
import { type Component } from "@/shared/types";
import { useState } from "react";

function ConstructorPage() {
  const { components } = useComponents();

  const [currentComponents, setCurrentComponents] = useState<Component[]>([]);

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
        <div>
          <PcComponentsList
            components={components}
            onComponentAdd={onAddComponent}
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
