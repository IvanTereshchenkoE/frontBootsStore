import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByIdProduct, postProducts } from "../api/quires";
import FormProductCreate from "../components/FormProductCreate";
import Header from "../layouts/Header";

function CardOfProduct() {
    let { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        getByIdProduct(id).then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <Header />
            <h1>{product.name}</h1>
            <div>{product.price}</div>
            <div>{product.size}</div>
            <div>{product.color}</div>
        </div>
    );
}

export default CardOfProduct;
