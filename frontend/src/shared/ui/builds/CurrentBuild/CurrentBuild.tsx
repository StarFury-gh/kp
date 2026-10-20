import type { Component, ComponentType } from "@/shared/types";
import CurrentBuildComponent from "../CurrentBuildComponent";

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
  if (props.components.length === 0) {
    return (
      <p className="py-6 text-center text-sm text-(--text-secondary)">
        Список компонентов пуст
      </p>
    );
  }

  const addedTypes = new Set(props.components.map((c) => c.type));
  const missingComponents = neededComponents.filter(
    (nc) => !addedTypes.has(nc.toLowerCase() as ComponentType),
  );

  return (
    <div className="mt-2 flex flex-col justify-between gap-2 ">
      <p>Сборка должна содержать:</p>
      <ul>
        {neededComponents.map((nc, idx) => (
          <li
            key={idx}
            className={
              addedTypes.has(nc)
                ? "text-(--text-primary)"
                : "text-(--text-secondary) line-through"
            }
          >
            {nc}
          </li>
        ))}
      </ul>
      {missingComponents.length > 0 && (
        <p className="text-sm text-red-500">
          Не добавлено:{" "}
          {missingComponents.map((mc) => mc.toLowerCase()).join(", ")}
        </p>
      )}
      {props.components.map((c) => (
        <CurrentBuildComponent key={c.id} component={c} />
      ))}
      <p className="text-(--text-secondary)">
        Итоговая цена:{" "}
        {props.components.reduce((acc, item) => acc + item.price, 0)}₽
      </p>
    </div>
  );
}

export default CurrentBuild;
