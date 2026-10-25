import { type Component, type ComponentType } from "@/shared/types";

import PcComponentCard from "../PcComponentCard";

interface PriceRange {
  min?: number;
  max?: number;
}

interface PcComponentsFilters {
  type?: ComponentType;
  priceRange?: PriceRange;
}

interface PcComponentsListProps {
  components: Component[];
  onComponentAdd?: (c: Component) => void;
  filters?: PcComponentsFilters;
}

function PcComponentsList(props: PcComponentsListProps) {
  const { components, filters } = props;

  const filtered = components.filter((component) => {
    if (filters) {
      if (filters.type && component.type !== filters.type) {
        return false;
      }
      if (filters.priceRange) {
        const { min, max } = filters.priceRange;
        if (min !== undefined && component.price < min) return false;
        if (max !== undefined && component.price > max) return false;
      }
    }
    return true;
  });

  return (
    <div className="grid grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-3">
      {filtered.map((component) => (
        <PcComponentCard
          key={component.id}
          component={component}
          onAdd={props.onComponentAdd}
        />
      ))}
    </div>
  );
}

export default PcComponentsList;
