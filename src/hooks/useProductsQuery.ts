import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/ProductService"

const useProductsQuery = () => {
    const { data, isError, error, isSuccess } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })

    return { data, isError, error, isSuccess }
}

export default useProductsQuery