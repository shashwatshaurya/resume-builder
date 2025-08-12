import { RequestConfig } from "./request.interceptor";

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
  requestTime?: number;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public data?: any
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export const responseInterceptor = async <T>(
  response: Response,
  config: RequestConfig
): Promise<ApiResponse<T>> => {
  const endTime = Date.now();
  const requestTime = config.startTime ? endTime - config.startTime : 0;

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new ApiError(
      response.status,
      errorData.message || response.statusText,
      errorData
    );
  }

  const data = await response.json();

  return {
    data,
    status: response.status,
    message: response.statusText,
    requestTime
  };
};
