import { Link } from "react-router-dom";
import { deleteProduct } from "../api/quires";

import "../styles/App.css"

function CardProduct({ boot }) {
    const deleteHandler = (id) => {
        deleteProduct(id)
    }
    return (
        <div className="CardProduct">
            <Link to={`/products/${boot._id}`} style={{ textDecoration: "none", color: "black" }}><h2>Кросовки  - {boot.name}</h2></Link>
            <div>номер товара {boot._id} цвет {boot.color} размер {boot.size}</div>
            <div>Цена {boot.price}</div>
            <button onClick={() => deleteHandler(boot._id)}>Delete</button>
            <Link to={`/products/${boot._id}/edit`} style={{ textDecoration: "none", color: "black" }}><p>Edit</p></Link>
        </div>
    )
}

export default CardProduct;