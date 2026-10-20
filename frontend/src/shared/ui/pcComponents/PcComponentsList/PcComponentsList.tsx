import { type Component } from "@/shared/types";

import PcComponentCard from "../PcComponentCard";

interface PcComponentsListProps {
  components: Component[];
  onComponentAdd?: (c: Component) => void;
}

function PcComponentsList(props: PcComponentsListProps) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {props.components.map((component) => {
        return (
          <PcComponentCard
            key={component.id}
            component={component}
            onAdd={props.onComponentAdd}
          />
        );
      })}
    </div>
  );
}

export default PcComponentsList;
