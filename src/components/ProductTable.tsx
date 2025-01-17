import {useEffect, useState} from "react";
import apiClient from "../api/apiClient.ts";
import Product from "../model/Product.ts";

const ProductTable = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        apiClient().get<Product[]>("").then(value => setProducts(value.data));
    }, [])
    return (<>
        <h1>Product Table</h1>
        {products && products.map(product => (<div key={product.id}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <span>{product.description}</span>
        </div>))}
    </>)
}

export default ProductTable;