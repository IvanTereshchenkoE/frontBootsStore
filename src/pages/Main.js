import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api/quires";
import CardProduct from "../components/CardProduct";
import Header from "../layouts/Header";

function Main() {
  const [bootsCollection, setBootsCollection] = useState([])
  useEffect(() => {
    getProducts().then(res => {
      setBootsCollection(res.data)
    });
  }, []);
  return (
    <div className="Main">
      <Header></Header>
      {bootsCollection.map((boot) =>
        <CardProduct boot={boot} key={boot._id} />)
      }
      <Link to={"/create"} style={{ textDecoration: "none", color:"black" }}><div>Edit new product</div></Link>
    </div>
  );
}

export default Main;
