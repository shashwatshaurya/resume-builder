import { getAuthToken } from "@/utils/auth";

export interface RequestConfig extends RequestInit {
  startTime?: number;
}

export const requestInterceptor = async (
  config: RequestConfig
): Promise<RequestConfig> => {
  // Add authentication header if token exists
  const token = getAuthToken();
  if (token) {
    config.headers = {
      ...config.headers,
      sso_token: token
    };
  }

  // Add default headers
  config.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...config.headers
  };

  // Add request timing
  config.startTime = Date.now();

  return config;
};
