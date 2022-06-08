
import { useParams } from "react-router-dom";
import FormProductEdit from "../components/FormProductEdit";
import Header from "../layouts/Header";

function EditProduct() {
  let {id} = useParams();
  
  return (
    <div className="EditProduct">
        <Header></Header>
        <FormProductEdit id={id}></FormProductEdit>
    </div>
  );
}

export default EditProduct;
