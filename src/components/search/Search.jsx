import { useContext, useState } from "react";
import Images from "./../../assets/images.js";
import { ProductsContext } from "./../../context/ProductsContext.jsx";

export const Search = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const [query, setQuery] = useState({
    product: "",
  });

  const handleChangeQueryProducts = (e) => {
    const { name, value } = e.target;
    setQuery((prevDataQuery) => {
      const newQuery = {
        ...prevDataQuery,
        [name]: value,
      };
      return newQuery;
    });
  };

  const handleSubmitQuery = async (e) => {
    e.preventDefault();
    try {
      const responseQuery = await fetch(
        `${import.meta.env.VITE_URL_API}/api/items?q=${query.product}`
      );
      const dataQuery = await responseQuery.json();
      if (responseQuery.status === 200) {
        setProducts(dataQuery);
      } else {
        console.log("Error al realizar la busqueda");
      }
    } catch {
      console.log("Error al realizar la busqueda");
    }
  };

  return (
    <header className="flex justify-start">
      <nav className="mx-4">
        <ul className="flex items-center">
          <li className="">
            <img
              src={Images.bazar_online}
              className="flex justify-start w-20"
              alt="Logo Mercado Libre"
            />
          </li>
          <li>
            <form
              action=""
              className="bg-gray-200 p-1 rounded-xl ml-6"
              onSubmit={handleSubmitQuery}
            >
              <input
                type="text"
                placeholder="Laptops, smartphones, ..."
                className="bg-gray-200 border-0 focus:outline-none mr-1"
                name="product"
                value={query.product}
                onChange={handleChangeQueryProducts}
              />
              <button name="" type="submit">
                <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
};
