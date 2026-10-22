import { Button } from "@shared/ui";
import type { Component } from "@/shared/types";

interface PcComponentCardProps {
  component: Component;
  onAdd?: (c: Component) => void;
}

const PlaceHolderPath = "/photos/placeholder.png";

function PcComponentCard(props: PcComponentCardProps) {
  return (
    <div
      className="bg-(--bg-secondary) border border-(--border-color) rounded-xl p-4 flex flex-col gap-3 duration-200 hover:-translate-y-1 transition-transform"
      data-id={props.component.id}
    >
      <img
        className="w-full h-70 object-cover rounded-lg"
        src={props.component.image || PlaceHolderPath}
        alt={props.component.name}
        loading="lazy"
      />
      <h3 className="text-base font-semibold text-(--text-primary) m-0">
        {props.component.name}
      </h3>
      <p className="text-sm text-(--text-secondary) m-0">
        {props.component.type}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold text-(--primary)">
          {props.component.price} ₽
        </span>
        {props.onAdd && (
          <Button
            variant="secondary"
            onClick={() => props.onAdd?.(props.component)}
          >
            <img src="/icons/AddIcon.svg" alt="+" />
            Добавить
          </Button>
        )}
      </div>
    </div>
  );
}

export default PcComponentCard;
