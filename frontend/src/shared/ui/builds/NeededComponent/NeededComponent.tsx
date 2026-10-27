import type { ComponentType } from "@/shared/types";

interface NeededComponentProps {
  type: ComponentType;
}

const iconMap: Record<ComponentType, string> = {
  процессор: "/icons/CPUIcon.svg",
  видеокарта: "/icons/GPUIcon.svg",
  "оперативная память": "/icons/RAMIcon.svg",
  "жёсткий диск": "/icons/SSDIcon.svg",
  "блок питания": "/icons/PowerUnitIcon.svg",
};

const labelMap: Record<ComponentType, string> = {
  процессор: "Процессор",
  видеокарта: "Видеокарта",
  "оперативная память": "Оперативная память",
  "жёсткий диск": "Жёсткий диск",
  "блок питания": "Блок питания",
};

function NeededComponent({ type }: NeededComponentProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-bg px-3 py-2">
      <div className="flex size-10 items-center justify-center rounded-md bg-bg-sec">
        <img src={iconMap[type]} alt={labelMap[type]} className="size-6" />
      </div>
      <span className="text-sm text-tsecondary">{labelMap[type]}</span>
    </div>
  );
}

export default NeededComponent;
