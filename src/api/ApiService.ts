import {AxiosResponse} from "axios";
import apiClient from "./apiClient";

/**
 * This class holds methods that any service can refine accordingly to specific needs
 * on backend API call.
 */
class AbstractApiService<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    /**
     * Generic method for fetching any entity of type 'T'.
     * @param uri of the targeted resource.
     * @param params extra parameters for axios configuration.
     */
    async get(uri?: string, params?: unknown): Promise<AxiosResponse<T[], unknown>> {
        return apiClient(params).get<T[]>(this.endpoint + uri)
    }

    /**
     * Generic method for creating new entity of 'S' data type.
     * @param uri of the targeted resource.
     * @param data to be persisted.
     * @param params extra parameters for axios configuration.
     */
    async post<S>(uri: string, data: S, params?: unknown): Promise<AxiosResponse<T, unknown>> {
        return apiClient(params).post<T>(this.endpoint + uri, data, {headers: {"Content-Type": "application/json"}})
    }

    /**
     * Generic method for deleting a resource.
     * @param uri of the targeted resource
     * @param params extra parameters for axios configuration
     */
    async delete(uri: string, params?: unknown): Promise<AxiosResponse<T, unknown>> {
        return apiClient(params).delete<T>(this.endpoint + uri)
    }

    /**
     * Generic method for getting a single element of type 'T'.
     * @param uri of the targeted resource.
     * @param params extra parameters for axios configuration.
     */
    async getOne(uri: string, params?: unknown): Promise<AxiosResponse<T, unknown>> {
        return apiClient(params).get<T>(this.endpoint + uri)
    }

    /**
     * Generic method for updating resource of 'T' type. Request is made with data of type 'S'
     * @param uri of the targeted resource
     * @param data request data as update
     * @param params extra parameters for axios configuration.
     */
    async update<S>(uri: string, data: S, params?: unknown): Promise<AxiosResponse<T, unknown>> {
        return apiClient(params).put<T>(uri, data);
    }
}

const apiService = <T>(uri: string) => new AbstractApiService<T>(uri)

export default apiService