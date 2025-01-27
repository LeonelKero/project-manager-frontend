import apiService from "../api/ApiService.ts";
import Product from "../model/Product.ts";
import ProductRequest from "../model/ProductRequest.ts";

const PRODUCT_ENDPOINT = "/products"

/**
 * Fetch products and return a promise list of those product or an empty list if no product available
 */
export async function getProducts(): Promise<Product[]> {
    return (await apiService<Product>(PRODUCT_ENDPOINT).get("", {})).data
}

/**
 * Fetch single product. If found, it returns a promise of found product
 * @param productID represents the ID of the expected product.
 */
export async function getProduct(productID: number): Promise<Product> {
    const uri = `${PRODUCT_ENDPOINT}/${productID}`
    return (await apiService<Product>(PRODUCT_ENDPOINT).getOne(uri)).data
}

/**
 * Remove product based on its ID. If everything when as expected, status should be '200'
 * @param productID represents the ID of the targeted product
 */
export async function deleteProduct(productID: number): Promise<number> {
    return (await apiService<Product>(PRODUCT_ENDPOINT).delete(`/${productID}`)).status
}

/**
 * Hand new product saving. Then return the saved product
 * @param request is the data to be saved.
 */
export async function addProduct(request: ProductRequest): Promise<Product> {
    return (await apiService<Product>(PRODUCT_ENDPOINT).post<ProductRequest>("", request)).data
}

/**
 * Update product based on its ID. If all went fine, it returns '200' status.
 * @param request is the object containing the updates
 * @param productID is the ID of the targeted product.
 */
export async function updateProduct(request: ProductRequest, productID: number): Promise<number> {
    const uri = `${PRODUCT_ENDPOINT}/${productID}`
    return (await apiService<Product>(PRODUCT_ENDPOINT).update<ProductRequest>(uri, request)).status
}