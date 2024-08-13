import { useContext, useState } from "react";
import Images from "./../assets/images.js";
import { ProductsContext } from "./../context/ProductsContext.jsx";
import { useNavigate } from "react-router-dom";

export const CajaBusqueda = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const navigate = useNavigate();
  const [buscarProductos, setBuscarProductos] = useState({
    product: "",
  });

  const [errorBuscarProductos, setErrorBuscarProductos] = useState("");
  const [successBuscarProductos, setSuccessBuscarProductos] = useState("");

  const handleChangeBuscarProductos = (e) => {
    const { name, value } = e.target;
    setBuscarProductos((prevDataBuscarProductos) => {
      const newDataBuscarProductos = {
        ...prevDataBuscarProductos,
        [name]: value,
      };
      return newDataBuscarProductos;
    });
  };

  const handleSubmitBuscarProductos = async (e) => {
    e.preventDefault();
    try {
      const responseBuscarProductos = await fetch(
        `${import.meta.env.VITE_URL_API}/api/items?q=${buscarProductos.product}`
      );
      const dataBuscarProductos = await responseBuscarProductos.json();
      if (responseBuscarProductos.status === 200) {
        setProducts(dataBuscarProductos);
        setSuccessBuscarProductos("Busqueda existosa");
        navigate("/ListaResultados");
      } else {
        setErrorBuscarProductos("Busqueda fallida");
      }
    } catch {
      setErrorBuscarProductos("Ocurrio un error al buscar los productos");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        className="w-auto h-80 mb-4"
        src={Images.bazar_online}
        alt="Bazar Online"
      />
      <form
        action=""
        className="flex flex-col items-center"
        onSubmit={handleSubmitBuscarProductos}
      >
        <div className="mb-2 p-2 border rounded bg-gray-200">
          <input
            className="bg-gray-200 border-0 focus:outline-none mr-1"
            placeholder="Laptops, smartphones, ..."
            type="text"
            name="product"
            id=""
            value={buscarProductos.product}
            onChange={handleChangeBuscarProductos}
          />
          <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
        </div>
        <button
          className="p-2 bg-green-900 text-white rounded-3xl shadow-lg"
          type="submit"
          // to="/ListaResultados"
        >
          Buscar
        </button>
        {errorBuscarProductos && (
          <p className="text-red-500">{errorBuscarProductos}</p>
        )}
        {successBuscarProductos && (
          <p className="text-green-500">{successBuscarProductos}</p>
        )}
      </form>
    </div>
  );
};
