import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiAllProductsRecents } from "./service";
import type { Product } from "./types";
import ListLoading from "../../components/list-loading";

const ListRecentsProducts = () => {

  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const [isLoadingRecents, setIsLoadingRecents] = useState(false);

  const getAllRecentsProducts = async () => {
    setIsLoadingRecents(true);
    try {
      const response = await getApiAllProductsRecents();

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
      <h1 className="mt-10">Itens Recentes</h1>
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

export default ListRecentsProducts;