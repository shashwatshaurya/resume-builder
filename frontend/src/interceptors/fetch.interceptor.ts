import { RequestConfig, requestInterceptor } from "./request.interceptor";
import { ApiResponse, responseInterceptor } from "./response.interceptor";

export const fetchWithInterceptors = async <T>(
  url: string,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  try {
    // Apply request interceptor
    const interceptedConfig = await requestInterceptor(config);

    // Make the actual fetch call
    const response = await fetch(url, interceptedConfig);

    // Apply response interceptor
    return await responseInterceptor<T>(response, interceptedConfig);
  } catch (error: any) {
    // Re-throw API errors
    if (error.name === "ApiError") {
      throw error;
    }

    // Handle network or other errors
    throw new Error(`Network error: ${error.message}`);
  }
};
