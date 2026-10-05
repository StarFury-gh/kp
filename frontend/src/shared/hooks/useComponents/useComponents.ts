import { useEffect, useState } from "react";
import { type Component } from "@/shared/types";
import { MockAPIClient } from "@/shared/api/clients";

export default function useComponents() {
  const [components, setComponents] = useState<Component[]>([]);

  const apiClient = new MockAPIClient();

  useEffect(() => {
    const fetchComponents = async () => {
      const response = await apiClient.get("/components");
      if (response.status && response.items) {
        setComponents(response.items);
      }
    };
    fetchComponents();
  }, []);

  return { components };
}
