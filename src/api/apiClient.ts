import axios from "axios";
import { ProductRequest } from "../components/NewProduct.tsx";
import Product from "../model/Product.ts";

const apiClient = (params?: any) => axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    params: { ...params }
})

// export const getAllProducts = async (): Promise<Product[]> => {
//     return apiClient().get<Product[]>("").then(response => response.data);
// }

// export const deleteProduct = async (uri: string) => {
//     return await apiClient().delete(uri)
// }

export const addProduct = async (preduct: ProductRequest): Promise<Product> => {
    return apiClient().post("", preduct, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default apiClient