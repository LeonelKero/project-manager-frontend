import Category from "./Category.ts";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
}

export default Product;