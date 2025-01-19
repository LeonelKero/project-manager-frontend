import { useQuery } from "@tanstack/react-query"
import { getCategories } from "../api/CatgoryService"

const useCategoryQuery = () => {
    const { data, isError, isSuccess } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })

    return { data, isError, isSuccess }
}

export default useCategoryQuery