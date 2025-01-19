import Product from "../model/Product"
import apiService from "./ApiService"

const PRODUCT_ENDPOINT = "/products"

export const getProducts = async (): Promise<Product[]> => {
    return (await apiService<Product>(PRODUCT_ENDPOINT).get("")).data
}