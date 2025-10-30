import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiAllProducts, getApiAllProductsOrdered } from "./service";
import type { Product } from "./types";
import ListLoading from "../../components/list-loading";

const ListAllProducts = () => {

  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const [isLoadingRecents, setIsLoadingRecents] = useState(false);

  const getAllRecentsProducts = async () => {
    setIsLoadingRecents(true);
    try {
      const response = await getApiAllProducts();

      setAllProducts(response.data);
    } catch (error) {
      alert(`Houve um erro ao buscar todos os produtos recentes / ${error}`)
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
      alert(`Houve um erro ao buscar todos os produtos recentes / ${error}`)
    }
    setIsLoadingRecents(false);
  };

  useEffect(() => {
    getAllRecentsProducts();
  },[])

  return (
    <UserTemplate>
      <h1 className="mt-10">Todos os produtos</h1>
      <div>
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