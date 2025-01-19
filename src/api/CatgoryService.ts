import Category from "../model/Category";
import apiService from "./ApiService";


const CATEGORY_ENDPOINT = "/categories"

export async function getCategories() {
    return (await apiService<Category>(CATEGORY_ENDPOINT).get("")).data
}

export async function createCategory<CategoryRequest>(request: CategoryRequest) {
    return (await apiService<Category>(CATEGORY_ENDPOINT).post("", request)).data
}