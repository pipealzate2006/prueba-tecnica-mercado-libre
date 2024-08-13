import { Search } from "./search/Search.jsx";
import Images from "./../assets/images.js";

export const DescripcionProducto = () => {
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
          <h1 className="m-auto font-bold text-2xl">Iphone X - Apple</h1>
          <p className="m-auto font-bold text-xl">899$</p>
          <p className="m-auto font-bold">2 unidades</p>
          <p className="line-clamp-3 m-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            et quos atque unde a illo ad error facere! Velit, mollitia amet
            magni alias sapiente assumenda aut officia? Voluptate vero nobis
            beatae ad fuga fugiat reiciendis accusantium aliquid iusto. Optio
            hic, doloribus beatae maxime illum mollitia exercitationem? Labore
            perferendis placeat corporis iure, harum tempore corrupti, ea
            exercitationem necessitatibus et numquam optio.
          </p>
        </div>
        <button className="block m-10 h-14 bg-purple-800 p-2 shadow-lg text-white font-bold rounded-2xl">
          Comprar
        </button>
      </section>
    </>
  );
};
