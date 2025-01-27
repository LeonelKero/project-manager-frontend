import {QueryClient, useMutation} from "@tanstack/react-query";
import {deleteProduct} from "../service/ProductService.ts";

const useDeleteProductMut = (queryClient: QueryClient) => useMutation({
    mutationFn: (productId: number) => deleteProduct(productId),
    onSuccess: (result) => {
        console.log("RESULT", result)
        queryClient.invalidateQueries({queryKey: ["products"]});
    },
    onError: (error) => {
        console.error("ERROR", error)
    }
})

export default useDeleteProductMut