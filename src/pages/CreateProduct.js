import { useEffect, useState } from "react";
import { postProducts } from "../api/quires";
import FormProductCreate from "../components/FormProductCreate";
import Header from "../layouts/Header";

function CreateProduct() {
    return (
        <div>
            <Header />
            <FormProductCreate></FormProductCreate>
        </div>
    );
}

export default CreateProduct;
