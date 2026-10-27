import type { ComponentType, Manufacturer } from "./Component";

export interface PriceRange {
  min?: number;
  max?: number;
}

export interface PcComponentsFilters {
  type?: ComponentType;
  manufacturer?: Manufacturer;
  priceRange?: PriceRange;
}
