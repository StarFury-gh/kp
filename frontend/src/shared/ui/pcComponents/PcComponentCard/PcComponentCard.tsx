import { Button } from "@shared/ui";
import type { Component } from "@/shared/types";

interface PcComponentCardProps {
  component: Component;
  onAdd?: (c: Component) => void;
}

const PlaceHolderPath = "/photos/placeholder.png";

/* ProductCard / Default по макету) */
function PcComponentCard(props: PcComponentCardProps) {
  const price = new Intl.NumberFormat("ru-RU").format(props.component.price);

  return (
    <article
      className="flex w-full flex-col items-start gap-4 overflow-hidden rounded-xl border border-border bg-bg-sec p-4 transition-all duration-200 hover:border-primary hover:shadow-(--shadow)"
      data-id={props.component.id}
    >
      <img
        className="h-60 w-full rounded-lg object-cover"
        src={props.component.image || PlaceHolderPath}
        alt={props.component.name}
        loading="lazy"
      />

      {/* Product details */}
      <div className="flex w-full flex-col gap-2">
        <h3 className="min-h-12 text-base text-tprimary">
          {props.component.name}
        </h3>
        <p className="text-sm text-tsecondary">{props.component.type}</p>
      </div>

      {/* Purchase row */}
      <div className="mt-auto flex w-full items-center justify-between">
        <span className="font-mono text-xl text-tprimary">{price} ₽</span>
        {props.onAdd && (
          <Button onClick={() => props.onAdd?.(props.component)}>
            В корзину
          </Button>
        )}
      </div>
    </article>
  );
}

export default PcComponentCard;
