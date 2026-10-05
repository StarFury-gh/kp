import PcComponentCard from "@/shared/ui/PcComponentCard";
import useComponents from "@/shared/hooks/useComponents";

function ComponentsCatalog() {
  const { components } = useComponents();

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {components.map((component) => {
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

export default ComponentsCatalog;
