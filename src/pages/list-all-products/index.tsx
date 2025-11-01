import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiAllProducts, getApiAllProductsOrdered } from "./service";
import type { Product } from "./types";
import ListLoading from "../../components/list-loading";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { toast } from "react-toastify";

const ListAllProducts = () => {

  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [inputSearch, setInputSearch ] = useState("");

  const [isLoadingRecents, setIsLoadingRecents] = useState(false);

  const getAllRecentsProducts = async () => {
    setIsLoadingRecents(true);
    try {
      const response = await getApiAllProducts();

      setAllProducts(response.data);
    } catch (error) {
      toast.error(`Houve um erro ao buscar todos os produtos recentes | ${error}`);
    }
    setIsLoadingRecents(false);
  };

    const getAllOrderProducts = async (typeOrder: "descending" | "ascending") => {
    setAllProducts([]);
    setIsLoadingRecents(true);
    try {
      const response = await getApiAllProductsOrdered(typeOrder);

      setAllProducts(response.data);
    } catch (error) {
      toast.error(`Houve um erro ao buscar todos os produtos | ${error}`);
    }
    setIsLoadingRecents(false);
  };

  const navigateSearch = () => {
    navigate(`/products/search/${inputSearch}`);
  };

  const handleSearchOnEnter = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigateSearch();
    }
  };

  useEffect(() => {
    getAllRecentsProducts();
  },[])

  return (
    <UserTemplate>
      <div className="flex items-center justify-between mt-10">
        <h1 className="flex-1 text-[24px] ml-1">Todos os produtos</h1>
        <div className="flex flex-1 justify-between items-center gap-2 rounded-md shadow-md p-3 px-6 bg-white border-2 border-gray-50">
          <input
            type="text"
            className="w-full outline-none"
            placeholder="Estou buscando por..."
            onChange={(event) => setInputSearch(event.target.value)}
            onKeyDown={handleSearchOnEnter}
          />
          <button onClick={navigateSearch} className="px-2 cursor-pointer py-1 transition duration-250 hover:brightness-70 active:brightness-40 active:translate-[1px]">
            <IoSearch className="text-[24px] text-gray-400"/>
          </button>
        </div>
      </div>
      <div className="flex self-end mt-2 mb-6">
        <p>
          Ordenar por: <button className="text-primary cursor-pointer px-1 mx-1 border-b-1 border-transparent hover:border-primary active:text-primary-600" onClick={() => getAllOrderProducts("ascending")}>Menor preço</button> | <button className="text-primary cursor-pointer px-1 mx-1 border-b-1 border-transparent hover:border-primary active:text-primary-600" onClick={() => getAllOrderProducts("descending")}>Maior preço</button>
        </p>
      </div>
      { isLoadingRecents && <ListLoading /> }
      <div className="flex flex-wrap">
        {
          allProducts.map((product) => (
            <CardProduct
              key={product._id}
              id={product._id}
              name={product.name}
              manufacturer={product.manufacturer}
              img={product.url1}
              price={product.price}
            />
          ))
        }
      </div>
    </UserTemplate>
  )
};

export default ListAllProducts;