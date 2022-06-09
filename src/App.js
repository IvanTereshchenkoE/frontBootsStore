import { Routes, Route, BrowserRouter } from "react-router-dom";
import CardOfProduct from "./pages/CardOfProduct";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import Main from "./pages/Main";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/products/:id" element={<CardOfProduct />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
