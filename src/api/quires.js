import axios from "./axios";

export const getProducts = () => {
    return (
        axios.get("/products",)
    )
}

export const postProducts = (parametrs) => {
    return (
        axios.post("/products", parametrs)
    )
}

export const getByIdProduct = (id) => {
    return (
        axios.get(`/products/${id}`)
    )
}

export const putProduct = ({id, parametrs}) => {
    return (
        axios.put(`/products/${id}`, parametrs)
    )
}

export const deleteProduct = (id) => {
    return (
        axios.delete(`/products/${id}`)
    )
}