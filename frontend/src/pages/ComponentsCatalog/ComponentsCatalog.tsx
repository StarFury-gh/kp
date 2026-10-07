import { PcComponentsList } from "@/shared/ui";
import useComponents from "@/shared/hooks/useComponents";

function ComponentsCatalog() {
  const { components } = useComponents();

  return <PcComponentsList components={components} />;
}

export default ComponentsCatalog;
