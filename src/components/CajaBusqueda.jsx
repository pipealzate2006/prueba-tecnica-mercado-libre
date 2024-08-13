import Images from "./../assets/images.js";
import { Link } from "react-router-dom";

export const CajaBusqueda = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        className="w-auto h-80 mb-4"
        src={Images.bazar_online}
        alt="Bazar Online"
      />
      <form action="" className="flex flex-col items-center">
        <div className="mb-2 p-2 border rounded bg-gray-200">
          <input
            className="bg-gray-200 border-0 focus:outline-none mr-1"
            placeholder="Laptops, smartphones, ..."
            type="text"
            name=""
            id=""
          />
          <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
        </div>
        <Link
          className="p-2 bg-green-900 text-white rounded-3xl shadow-lg"
          type="submit"
          to="/ListaResultados"
        >
          Buscar
        </Link>
      </form>
    </div>
  );
};
