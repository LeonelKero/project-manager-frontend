import axios from "axios";

const apiClient = (params?: any) => axios.create({
    baseURL: "http://localhost:9098/api/v1/products",
    params: {...params}
})

export default apiClient