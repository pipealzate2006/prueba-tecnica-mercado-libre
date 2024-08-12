import Images from "./../assets/images.js";
import { Search } from "./search/Search.jsx";

const ListaResultados = () => {
  return (
    <>
      <Search />
      <main>
        <section className="flex justify-center p-3">
          <h2>Resultados de la busqueda de smart: 12</h2>
        </section>
        <div>
          <ul>
            <li className="flex items-center">
              <img
                src={Images.bazar_online}
                className="w-40 h-40 rounded-full"
                alt=""
              />
              <div className="flex flex-col px-5 overflow-hidden">
                <h1 className="font-bold text-xl">Iphone X</h1>
                <p className="line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid sapiente, ipsam dignissimos cumque perspiciatis magnam
                  vel quisquam eveniet voluptas atque unde similique
                  necessitatibus sint in voluptatibus iste ipsa est earum harum
                  et assumenda praesentium commodi! Nemo quasi blanditiis sint
                  aspernatur illum mollitia aliquam, expedita tenetur fugit ipsa
                  illo consequuntur quaerat placeat deleniti! A asperiores odit
                  animi fugit iure, sequi earum.
                </p>
                <h1 className="font-bold text-xl">$1000</h1>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default ListaResultados;
