import type { Component } from "@/shared/types";

interface CurrentBuildComponentProps {
  component: Component;
}

function CurrentBuildComponent({ component }: CurrentBuildComponentProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-(--border-color) bg-(--bg-secondary) p-3 transition-colors hover:border-(--primary)">
      {component.image && (
        <img
          src={component.image}
          alt={component.name}
          className="h-12 w-12 shrink-0 rounded-md object-cover"
        />
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-(--text-primary)">
          {component.name}
        </p>
        <p className="text-xs text-(--text-secondary)">{component.type}</p>
      </div>
      <p className="shrink-0 text-sm font-semibold text-(--primary)">
        {component.price} ₽
      </p>
    </div>
  );
}

export default CurrentBuildComponent;
