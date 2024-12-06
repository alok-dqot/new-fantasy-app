import env from "@/configs/env";
import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

// const baseURL = env.base_url
const baseURL = "https://api.sportswiz.live/score";

// Create an Axios instance with custom configuration
const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Define the response and error types for your API calls
interface ApiResponse<T> {
  data: T;
}

interface ApiError {
  message: string;
  status?: number;
}

async function getToken(): Promise<string> {
  const authData = {
    access_key: "22a6bcPZB7GGyORcugmSjjPKItXXCP_CKR",
    secret_key: "Dlresuvl2jkiCN1wSWYJBRB6jBlmklYH",
    extend: false,
  };
  const postDataResponse = await post<string>("/auth", authData);
  localStorage.setItem("token", postDataResponse.data.token);
  return postDataResponse.data.token;
}

// Set up request headers with authorization token
api.interceptors.request.use(async (config) => {
  // const token = localStorage.getItem('token')

  // local token
  // const token = '22a6bcPZB7GGyORcugmSjjPKItXXCP_CKR'

  //main server token
  // const token = '22P3Q-Yyy9vEb8v2_eX8MigPcGYckXsuFB'

  // live token
  const token = "22P3Q-Yyy9vEb8v2_eX8MigPcGYckXsuFB";

  // config.headers['Authorization'] = `Bearer ${token}`
  return config;
});

// Helper function to handle API errors
async function handleApiError(error: AxiosError<ApiError>): Promise<void> {
  if (error.response) {
    if (error.response.status === 401) {
      const token = await getToken();
    }
    console.error("API Error:", error.response.status, error.response.data);
  } else {
    console.error("Network Error:", error.message);
  }
}

interface GetParams {
  query?: any;
}

export async function get<T>(
  endpoint: string,
  options?: GetParams
): Promise<T | any> {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await api.get(endpoint, {
      params: options?.query,
    });

    return response.data as any;
  } catch (error: any) {
    handleApiError(error);
    throw error?.message || error?.response?.message;
  }
}

export async function post<T>(endpoint: string, data: any): Promise<T | any> {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await api.post(
      endpoint,
      data
    );
    return response.data as any;
  } catch (error: any) {
    handleApiError(error);
    throw error?.message || error?.response?.message;
  }
}

const Api = {
  get,
  post,
};

export default Api;
