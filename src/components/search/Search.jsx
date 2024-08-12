import Images from "./../../assets/images.js";

export const Search = () => {
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
            <form action="" className="bg-gray-200 p-1 rounded-xl ml-6">
              <input
                type="text"
                placeholder="Laptops, smartphones, ..."
                className="bg-gray-200 border-0 focus:outline-none mr-1"
              />
              <button>
                <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
};
