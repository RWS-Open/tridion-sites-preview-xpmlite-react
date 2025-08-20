import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

export class AxiosClient {
    private axiosInstance: AxiosInstance;
    
    constructor(baseUrl: string) {
        this.axiosInstance = axios.create({
            baseURL:baseUrl,
            headers:{
                'Content-Type':"application/json"
            }
        })
    }
    // Method to set default headers or interceptors
  setDefaultHeaders(headers: Record<string, string>): void {
    this.axiosInstance.defaults.headers = {
      ...this.axiosInstance.defaults.headers,
      ...headers,
    };
  }

  async post<T>(url:string, data:string, config?:AxiosRequestConfig):Promise<AxiosResponse<T>>{
    try{
        const response = await this.axiosInstance.post<T>(url, data, config)
        return response;
    }catch(error:any){
        throw new Error("Failed to fetch the data", error)
    }
  }
}
