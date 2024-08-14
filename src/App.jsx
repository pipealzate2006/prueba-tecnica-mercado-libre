import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CajaBusqueda } from "./components/CajaBusqueda.jsx";
import { DescripcionProducto } from "./components/DescripcionProducto.jsx";
import ListaResultados from "./components/ListaResultados.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CajaBusqueda />} />
          <Route path="/ListaResultados" element={<ListaResultados />} />
          <Route path="/DescripcionProducto/:id" element={<DescripcionProducto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
