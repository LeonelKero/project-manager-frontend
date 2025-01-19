import { AxiosResponse } from "axios";
import apiClient from "./apiClient";

class AbstractApiService<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    async get(uri?: string, params?: any): Promise<AxiosResponse<T[], any>> {
        return apiClient(params).get<T[]>(this.endpoint + uri)
    }

    async post<S>(uri: string, data: S, params?: any): Promise<AxiosResponse<T, any>> {
        return apiClient(params).post<T>(this.endpoint + uri, data, { headers: { "Content-Type": "application/json" } })
    }
}

const apiService = <T>(uri: string) => new AbstractApiService<T>(uri)

export default apiService