import Images from "./../assets/images.js";
import { Search } from "./search/Search.jsx";
import { useContext } from "react";
import { ProductsContext } from "./../context/ProductsContext.jsx";
import { Link } from "react-router-dom";

const ListaResultados = () => {
  const { products } = useContext(ProductsContext);
  return (
    <>
      <Search />
      <main>
        <section className="flex justify-center p-3">
          {products.length > 0
            ? `Se encontraron ${products.length} resultados`
            : "No se encontraron resultados"}
        </section>
        <div>
          <ul>
            {products.map((product) => (
              <Link
                to={`/DescripcionProducto/${product.id}`}
                key={product.id}
                className="flex items-center"
              >
                <img
                  src={Images.bazar_online}
                  className="w-40 h-40 rounded-full"
                  alt=""
                />
                <div className="flex flex-col px-5 overflow-hidden">
                  <h1 className="font-bold text-xl">{product.title}</h1>
                  <p className="line-clamp-3">{product.description}</p>
                  <h1 className="font-bold text-xl">{product.price}$</h1>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default ListaResultados;
