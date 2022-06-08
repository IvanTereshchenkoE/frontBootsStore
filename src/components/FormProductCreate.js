import {  useState } from "react";
import { postProducts } from "../api/quires";

function FormProductCreate() {
    const [parametrs, setParametrs] = useState({ name: "", size: 0, color: "", price: 0 })
    const submitHandler = e => {
        e.preventDefault()
        postProducts(parametrs).then(res => console.log(res))
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Product</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setParametrs({ ...parametrs, name: e.target.value })} value={parametrs.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="size">size:</label>
                    <input type="number" name="size" id="size" onChange={e => setParametrs({ ...parametrs, size: e.target.value })} value={parametrs.size} />
                </div>
                <div className="form-group">
                    <label htmlFor="color">color:</label>
                    <input type="text" name="color" id="color" onChange={e => setParametrs({ ...parametrs, color: e.target.value })} value={parametrs.color} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">price    :</label>
                    <input type="number" name="price" id="price" onChange={e => setParametrs({ ...parametrs, price: e.target.value })} value={parametrs.price} />
                </div>
                <input type="submit" value="create" />
            </div>
        </form>
    );
}

export default FormProductCreate;
