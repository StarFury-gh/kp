import type { Component, ComponentType } from "@/shared/types";
import CurrentBuildComponent from "../CurrentBuildComponent";
import NeededComponent from "../NeededComponent";

const neededComponents: ComponentType[] = [
  "процессор",
  "блок питания",
  "видеокарта",
  "жёсткий диск",
  "оперативная память",
];

interface CurrentBuildProps {
  components: Component[];
}

function CurrentBuild(props: CurrentBuildProps) {
  const addedTypes = new Set(props.components.map((c) => c.type.toLowerCase()));

  const missingComponents = neededComponents.filter(
    (nc) => !addedTypes.has(nc.toLowerCase() as ComponentType),
  );

  return (
    <div className="mt-2 flex h-[600px] flex-col gap-2 overflow-y-auto">
      {props.components.length === 0 ? (
        <div className="flex flex-col gap-2">
          {neededComponents.map((mc) => (
            <NeededComponent key={mc} type={mc} />
          ))}
        </div>
      ) : (
        <>
          {missingComponents.length > 0 && (
            <div className="flex flex-col gap-2">
              {missingComponents.map((mc) => (
                <NeededComponent key={mc} type={mc} />
              ))}
            </div>
          )}

          {props.components.map((c) => (
            <CurrentBuildComponent key={c.id} component={c} />
          ))}
        </>
      )}

      <p className="mt-auto text-tsecondary">
        Итоговая цена:{" "}
        {props.components.reduce((acc, item) => acc + item.price, 0)}₽
      </p>
    </div>
  );
}

export default CurrentBuild;
