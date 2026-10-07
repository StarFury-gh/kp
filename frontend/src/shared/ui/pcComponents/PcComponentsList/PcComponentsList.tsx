import { type Component } from "@/shared/types";

import PcComponentCard from "../PcComponentCard";

interface PcComponentsListProps {
  components: Component[];
}

function PcComponentsList(props: PcComponentsListProps) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {props.components.map((component) => {
        return (
          <PcComponentCard
            id={component.id}
            name={component.name}
            type={component.type}
            price={component.price}
            image={component.image}
          ></PcComponentCard>
        );
      })}
    </div>
  );
}

export default PcComponentsList;
