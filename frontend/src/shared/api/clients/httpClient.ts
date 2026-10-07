interface APIResponse {
  status: boolean;
  data?: object;
  message?: string;
  code?: number;
}

class HTTPClient {
  #baseUrl;

  constructor(baseUrl: string | undefined) {
    this.#baseUrl = baseUrl;
  }

  async get(endpoint: string): Promise<APIResponse> {
    const additionalString = endpoint.startsWith("/")
      ? endpoint
      : `/${endpoint}`;
    const response = await fetch(`${this.#baseUrl}${additionalString}`);
  }
}

export default HTTPClient;
