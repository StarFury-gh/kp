import type { Manufacturer, PcComponentsFilters } from "@/shared/types";
import { useState } from "react";
import Checkbox from "../common/Checkbox";

interface CatalogFiltersProps {
  filters?: PcComponentsFilters;
  onFiltersChange?: (filters: PcComponentsFilters) => void;
}

const manufacturers: Manufacturer[] = [
  "Intel",
  "AMD",
  "Nvidia",
  "Kingston",
  "G.Skill",
  "Corsair",
  "Samsung",
  "WD",
  "Seasonic",
  "be quiet!",
];

function CatalogFilters({ filters = {}, onFiltersChange }: CatalogFiltersProps) {
  const [localFilters, setLocalFilters] = useState<PcComponentsFilters>(filters);

  const updateFilters = (newFilters: PcComponentsFilters) => {
    setLocalFilters(newFilters);
    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
  };

  const handleManufacturerChange = (manufacturer: Manufacturer) => {
    const newFilters = { ...localFilters };
    if (newFilters.manufacturer === manufacturer) {
      delete newFilters.manufacturer;
    } else {
      newFilters.manufacturer = manufacturer;
    }
    updateFilters(newFilters);
  };

  const handlePriceChange = (field: "min" | "max", value: string) => {
    const numValue = value === "" ? undefined : Number(value);
    const priceRange = { ...(localFilters.priceRange || {}) };
    
    if (numValue === undefined || isNaN(numValue)) {
      delete priceRange[field];
    } else {
      priceRange[field] = numValue;
    }
    
    const newFilters = { ...localFilters };
    if (Object.keys(priceRange).length === 0) {
      delete newFilters.priceRange;
    } else {
      newFilters.priceRange = priceRange;
    }
    updateFilters(newFilters);
  };

  return (
    <aside className="rounded-lg border border-border bg-bg-sec p-4 h-fit">
      <h3 className="mb-4 text-lg font-semibold text-tprimary">Фильтры</h3>
      
      <div className="mb-6">
        <h4 className="mb-2 text-sm font-medium text-tprimary">Производитель</h4>
        <div className="flex flex-col gap-2">
          {manufacturers.map((manufacturer) => (
            <label
              key={manufacturer}
              className="flex cursor-pointer items-center gap-2 text-sm text-tsecondary hover:text-tprimary"
            >
              <Checkbox
                checked={localFilters.manufacturer === manufacturer}
                onChange={() => handleManufacturerChange(manufacturer)}
              />
              <span>{manufacturer}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-medium text-tprimary">Цена, ₽</h4>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-tsecondary">
              От: {localFilters.priceRange?.min ?? 0}
            </span>
            <input
              type="range"
              min={0}
              max={200000}
              step={1000}
              value={localFilters.priceRange?.min ?? 0}
              onChange={(e) => handlePriceChange("min", e.target.value)}
              className="w-full accent-primary"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-tsecondary">
              До: {localFilters.priceRange?.max ?? 200000}
            </span>
            <input
              type="range"
              min={0}
              max={200000}
              step={1000}
              value={localFilters.priceRange?.max ?? 200000}
              onChange={(e) => handlePriceChange("max", e.target.value)}
              className="w-full accent-primary"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CatalogFilters;
