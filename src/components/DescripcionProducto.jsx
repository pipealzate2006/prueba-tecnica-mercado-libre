import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Search } from "./search/Search.jsx";
import Images from "./../assets/images.js";
import { ProductsContext } from "./../context/ProductsContext.jsx";

export const DescripcionProducto = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="flex justify-center items-center min-h-screen">Producto no encontrado</div>;
  }
  return (
    <>
      <Search />
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex mb-10">
          <img className="w-60 rounded-full" src={Images.bazar_online} alt="" />
          <div className="flex flex-col">
            <img className="w-20" src={Images.bazar_online} alt="" />
            <img className="w-20" src={Images.bazar_online} alt="" />
            <img className="w-20" src={Images.bazar_online} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center p-5">
          <h1 className="m-auto font-bold text-2xl">{product.title}</h1>
          <p className="m-auto font-bold text-xl">{product.price}</p>
          <p className="m-auto font-bold">{product.stock} Unidades</p>
          <p className="line-clamp-3 m-auto">{product.description}</p>
        </div>
        <button className="block m-10 h-14 bg-purple-800 p-2 shadow-lg text-white font-bold rounded-2xl">
          Comprar
        </button>
      </section>
    </>
  );
};
