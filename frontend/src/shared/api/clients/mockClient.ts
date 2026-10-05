import { MockComponents } from "../mock/mockComponents";
import { type Component } from "@/shared/types";

interface APIResponse {
  status: boolean;
  message?: string;
  item?: Component;
  items?: Component[];
}

class MockAPIClient {
  async get(url: string): Promise<APIResponse> {
    if (url === "/components") {
      return {
        status: true,
        items: MockComponents,
      };
    }

    return {
      status: false,
      message: "notFound",
    };
  }
}

export default MockAPIClient;
